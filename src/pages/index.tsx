import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Post } from '../components/Post';
import { Button } from '../components/Button';
import { MonthlyHeader } from '../components/MonthlyHeader';

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

    if (lastPosts[0].id !== posts[0]?.id) {
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

  function isFirstOfMonthly(index: number): boolean {
    const current = posts[index];
    const previous = posts[index - 1];

    if (!previous) return true;

    const currentDate = new Date(current.createdAt);
    const previousDate = new Date(previous.createdAt);

    return currentDate.getMonth() !== previousDate.getMonth();
  }

  return (
    <div className="flex flex-col min-h-screen gap-8">
      <Head>
        <title>Pensamentos do Miguel</title>
      </Head>

      <Header />

      <main className="flex flex-col flex-1 gap-3 mx-6">
        <ul className="flex flex-col max-w-3xl gap-3 mx-auto">
          {posts.map((post, index) => (
            <li key={post.id}>
              {isFirstOfMonthly(index) && <MonthlyHeader date={post.createdAt} />}

              <Post post={post} />
            </li>
          ))}
        </ul>

        {!isLastPage && (
          <Button className="mx-auto mt-4" onClick={handleLoadMore}>
            {isLoading ? 'Carregando...' : 'Carregar mais'}
          </Button>
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
    revalidate: 60,
  };
};

export default Home;
