import Head from 'next/head';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Post } from '../components/Post';
import { Button } from '../components/Button';
import { MonthlyHeader } from '../components/MonthlyHeader';

import { usePosts } from '../hooks/usePosts';

const Home = () => {
  const { handleLoadMore, isLastPage, isLoading, posts } = usePosts();

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

      {posts.length <= 0 && isLoading ? (
        <h2>Loading...</h2>
      ) : (
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
      )}

      <Footer />
    </div>
  );
};

export default Home;
