import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Post } from '../components/Post';

import { getPosts } from '../utils/GetPosts';

interface HomeProps {
  totalPages: number;
  posts: PostData[];
}

const Home = ({ posts: initialPosts }: HomeProps) => {
  const [posts, setPosts] = useState<PostData[]>(initialPosts);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [isLastPage, setLastPage] = useState(false);

  useEffect(() => {
    handleCheckPost();
  }, []);

  async function handleCheckPost() {
    const { posts: lastPosts } = await getPosts();

    if (lastPosts[0].id !== posts[0].id) {
      setPosts(lastPosts);
    }
  }

  async function handleLoadMore() {
    if (isLoading || isLastPage) return;

    setLoading(true);

    const { posts: newPosts, totalPages } = await getPosts(page + 1);

    setPosts((oldPosts) => [...oldPosts, ...newPosts]);
    setPage(page + 1);
    setLoading(false);
    setLastPage(page + 1 === totalPages);
  }

  return (
    <div className="flex flex-col min-h-screen gap-4">
      <Head>
        <title>Pensamentos do Miguel</title>
      </Head>

      <Header />

      <main className="flex flex-col flex-1 gap-3 mx-6">
        <ul className="flex flex-col max-w-3xl gap-3 mx-auto">
          {posts.map((post) => (
            <li key={post.id}>
              <Post post={post} />
            </li>
          ))}
        </ul>

        {!isLastPage && (
          <button
            className="px-6 py-2 mx-auto my-4 transition rounded bg-gray-highlight hover:opacity-75"
            onClick={handleLoadMore}
          >
            {isLoading ? 'Carregando...' : 'Carregar mais'}
          </button>
        )}
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const data = await getPosts();

  return {
    props: data,
    revalidate: 3600,
  };
};

export default Home;
