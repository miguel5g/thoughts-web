import React, { useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { usePosts } from '../hooks/usePosts';

export const SearchBox = () => {
  const [search, setSearch] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const { search: handleSearch } = usePosts();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    handleSearch(search, () => searchInputRef.current?.blur());
  }

  return (
    <div>
      <div className="flex flex-col gap-2 mb-3 text-center">
        <h2 className="text-2xl font-bold text-white">Navegue entre meus pensamentos</h2>
        <p className="text-sm">Busque por coisas que eu já publiquei</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          ref={searchInputRef}
          className="flex-1 p-4 text-white rounded bg-gray-highlight"
          type="text"
          placeholder="Digite algo para pesquisar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 p-4 text-white rounded bg-gray-highlight"
        >
          <FiSearch />
          <span>Pesquisar</span>
        </button>
      </form>
    </div>
  );
};
