import Head from 'next/head';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Post } from '../components/Post';
import { Button } from '../components/Button';
import { MonthlyHeader } from '../components/MonthlyHeader';
import { MonthlyHeaderSkeleton, PostSkeleton } from '../components/skeleton';

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

      <main className="flex flex-col flex-1 gap-3 mx-6">
        <ul className="flex flex-col w-full max-w-3xl gap-3 mx-auto">
          {isLoading && posts.length === 0 ? (
            <>
              <li>
                <MonthlyHeaderSkeleton />
                <PostSkeleton />
              </li>
              <li>
                <PostSkeleton />
              </li>
              <li>
                <PostSkeleton />
              </li>
            </>
          ) : (
            posts.map((post, index) => (
              <li key={post.id}>
                {isFirstOfMonthly(index) && <MonthlyHeader date={post.createdAt} />}

                <Post post={post} />
              </li>
            ))
          )}
        </ul>

        {!isLastPage && posts.length > 0 && (
          <Button className="mx-auto mt-4" onClick={handleLoadMore}>
            {isLoading ? 'Carregando...' : 'Carregar mais'}
          </Button>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
