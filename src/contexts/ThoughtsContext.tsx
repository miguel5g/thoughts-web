import { createContext, useEffect, useState } from 'react';

import { getThoughts } from '../utils/GetThoughts';

type SearchCallback = () => void;
interface ThoughtsContextType {
  page: number;
  thoughts: ThoughtData[];
  isLoading: boolean;
  isLastPage: boolean;
  handleLoadMore: () => void;
  refreshThoughts: () => void;
  search: (search: string, callback?: SearchCallback) => void;
}

export const ThoughtsContext = createContext({} as ThoughtsContextType);

let lastSearch = '';

export const ThoughtsProvider: React.FC = ({ children }) => {
  const [page, setPage] = useState(1);
  const [Thoughts, setThoughts] = useState<ThoughtData[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isLastPage, setLastPage] = useState(false);

  useEffect(() => {
    async function handle() {
      const initialThoughts = await getThoughts(1);

      setLoading(false);
      setThoughts(initialThoughts.thoughts);
      setLastPage(initialThoughts.totalPages === 1);
    }

    handle();
  }, []);

  async function handleLoadMore() {
    if (isLoading || isLastPage) return;

    setLoading(true);

    const { thoughts: newThoughts, totalPages } = await getThoughts(page + 1);

    setThoughts((oldThoughts) => [...oldThoughts, ...newThoughts]);
    setPage(page + 1);
    setLoading(false);
    setLastPage(page + 1 === totalPages);
  }

  async function refreshThoughts() {
    setPage(1);
    setLoading(true);
    setLastPage(false);

    const { thoughts: newThoughts, totalPages } = await getThoughts(1);

    setThoughts(newThoughts);
    setLoading(false);
    setLastPage(totalPages === 1);
  }

  async function search(term: string, callback?: SearchCallback) {
    if (isLoading || term === lastSearch) return;

    if (callback) callback();

    setPage(1);
    setThoughts([]);
    setLoading(true);
    setLastPage(false);

    const { thoughts: newThoughts, totalPages } = await getThoughts(1, term);

    lastSearch = term;

    setThoughts(newThoughts);
    setLoading(false);
    setLastPage(totalPages === 1);
  }

  return (
    <ThoughtsContext.Provider
      value={{
        page,
        thoughts: Thoughts,
        isLoading,
        isLastPage,
        handleLoadMore,
        refreshThoughts,
        search,
      }}
    >
      {children}
    </ThoughtsContext.Provider>
  );
};
