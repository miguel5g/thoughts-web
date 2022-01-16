import { createContext, useEffect, useState } from 'react';

import { getPosts } from '../utils/GetPosts';

interface PostsContextType {
  page: number;
  posts: PostData[];
  isLoading: boolean;
  isLastPage: boolean;
  handleLoadMore: () => void;
  refreshPosts: () => void;
}

export const PostsContext = createContext({} as PostsContextType);

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

  return (
    <PostsContext.Provider
      value={{
        page,
        posts,
        isLoading,
        isLastPage,
        handleLoadMore,
        refreshPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
