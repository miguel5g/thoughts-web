import { createContext, useEffect, useState } from 'react';

import { getPosts } from '../utils/GetPosts';

type SearchCallback = () => void;
interface PostsContextType {
  page: number;
  posts: PostData[];
  isLoading: boolean;
  isLastPage: boolean;
  handleLoadMore: () => void;
  refreshPosts: () => void;
  search: (search: string, callback?: SearchCallback) => void;
}

export const PostsContext = createContext({} as PostsContextType);

let lastSearch = '';

export const PostsProvider: React.FC = ({ children }) => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<PostData[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isLastPage, setLastPage] = useState(false);

  useEffect(() => {
    async function handle() {
      const initialPosts = await getPosts(1);

      setLoading(false);
      setPosts(initialPosts.posts);
      setLastPage(initialPosts.totalPages === 1);
    }

    handle();
  }, []);

  async function handleLoadMore() {
    if (isLoading || isLastPage) return;

    setLoading(true);

    const { posts: newPosts, totalPages } = await getPosts(page + 1);

    setPosts((oldPosts) => [...oldPosts, ...newPosts]);
    setPage(page + 1);
    setLoading(false);
    setLastPage(page + 1 === totalPages);
  }

  async function refreshPosts() {
    setPage(1);
    setLoading(true);
    setLastPage(false);

    const { posts: newPosts, totalPages } = await getPosts(1);

    setPosts(newPosts);
    setLoading(false);
    setLastPage(totalPages === 1);
  }

  async function search(term: string, callback?: SearchCallback) {
    if (isLoading || term === lastSearch) return;

    if (callback) callback();

    setPage(1);
    setPosts([]);
    setLoading(true);
    setLastPage(false);

    const { posts: newPosts, totalPages } = await getPosts(1, term);

    lastSearch = term;

    setPosts(newPosts);
    setLoading(false);
    setLastPage(totalPages === 1);
  }

  return (
    <PostsContext.Provider
      value={{
        page,
        posts,
        isLoading,
        isLastPage,
        handleLoadMore,
        refreshPosts,
        search,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
