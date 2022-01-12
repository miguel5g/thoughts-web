import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';

import { api } from '../services/Api';

import style from '../styles/pages/new.module.css';

const New = () => {
  const [validator, setValidator] = useState('');
  const [content, setContent] = useState('');
  const [note, setNote] = useState('');
  const [isLoading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLoading) return;

    setLoading(true);

    api
      .post('/posts', { content, validator, note })
      .then(() => {
        setLoading(false);
        setContent('');
        setValidator('');
        alert('Pensamento criado com sucesso!');
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        alert('Erro ao salvar pensamento.\n\nDetalhes no DevTools.');
      });
  }

  return (
    <div className="flex flex-col min-h-screen gap-8 px-3">
      <Head>
        <title>Criar novo pensamento</title>
      </Head>

      <header className="flex items-center py-3">
        <div className="flex max-w-3xl w-full mx-auto">
          <Link href="/" passHref>
            <a className="text-aqua">Voltar</a>
          </Link>
        </div>
      </header>

      <main className="max-w-lg w-full bg-gray-light p-6 rounded mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h1 className="text-center text-3xl font-bold text-white">Criar novo pensamento</h1>

          <div className={style.inputGroup}>
            <label htmlFor="validator">Código de validação</label>
            <input
              id="validator"
              type="password"
              value={validator}
              onChange={(e) => setValidator(e.target.value)}
            />
          </div>

          <div className={style.inputGroup}>
            <label htmlFor="note">Nota do pensamento</label>
            <input id="note" type="text" value={note} onChange={(e) => setNote(e.target.value)} />
          </div>

          <div className={style.inputGroup}>
            <label htmlFor="content">Pensamento</label>
            <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
          </div>

          <button className="bg-gray-highlight mx-auto px-6 py-2 rounded transition hover:opacity-75">
            {isLoading ? 'Salvando...' : 'Salvar'}
          </button>
        </form>
      </main>
    </div>
  );
};

export default New;
