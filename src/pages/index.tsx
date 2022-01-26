import Head from 'next/head';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Thought } from '../components/Thought';
import { Button } from '../components/Button';
import { MonthlyHeader } from '../components/MonthlyHeader';
import { MonthlyHeaderSkeleton, ThoughtSkeleton } from '../components/skeleton';

import { useThoughts } from '../hooks/useThoughts';
import { SearchBox } from '../components/SearchBox';

const Home = () => {
  const { handleLoadMore, isLastPage, isLoading, thoughts } = useThoughts();

  function isFirstOfMonthly(index: number): boolean {
    const current = thoughts[index];
    const previous = thoughts[index - 1];

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
        <div className="flex flex-col w-full max-w-3xl gap-6 mx-auto">
          <SearchBox />

          <ul className="flex flex-col w-full gap-3">
            {isLoading && thoughts.length === 0 ? (
              <>
                <li>
                  <MonthlyHeaderSkeleton />
                  <ThoughtSkeleton />
                </li>
                <li>
                  <ThoughtSkeleton />
                </li>
                <li>
                  <ThoughtSkeleton />
                </li>
              </>
            ) : (
              thoughts.map((thought, index) => (
                <li key={thought.id}>
                  {isFirstOfMonthly(index) && <MonthlyHeader date={thought.createdAt} />}

                  <Thought thought={thought} />
                </li>
              ))
            )}

            {!isLoading && thoughts.length === 0 && (
              <li className="flex flex-col items-center justify-center p-6 text-center">
                <img src="/svg/void.svg" alt="Vazio" className="w-2/5 mb-6" />
                <h2 className="text-3xl font-bold text-white">Não encontrei nada com este termo</h2>
                <p className="text-sm">Tente procurar por outras palavras ou frases!</p>
              </li>
            )}
          </ul>

          {!isLastPage && thoughts.length > 0 && (
            <Button className="mx-auto mt-4" onClick={handleLoadMore}>
              {isLoading ? 'Carregando...' : 'Carregar mais'}
            </Button>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
