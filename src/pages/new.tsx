import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { Button } from '../components/Button';

import { api } from '../services/Api';

import styles from '../styles/pages/new.module.css';

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
    <div className="flex flex-col min-h-screen px-3">
      <Head>
        <title>Criar novo pensamento</title>
      </Head>

      <header className="flex items-center py-3">
        <div className="flex w-full max-w-3xl mx-auto">
          <Link href="/" passHref>
            <a className="flex items-center gap-2">
              <FiArrowLeft className="text-aqua" />
              <span className="text-lg transition text-white-dark hover:text-white">
                Voltar para o início
              </span>
            </a>
          </Link>
        </div>
      </header>

      <main className="w-full max-w-2xl p-16 mx-auto my-16 rounded bg-gray-light">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <h1 className="text-3xl font-bold text-white">Novo pensamento</h1>

          <div className={styles.inputGroup}>
            <label htmlFor="validator">Código de validação</label>
            <input
              id="validator"
              type="password"
              value={validator}
              onChange={(e) => setValidator(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="note">Nota do pensamento</label>
            <input id="note" type="text" value={note} onChange={(e) => setNote(e.target.value)} />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="content">Pensamento</label>
            <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
          </div>

          <Button className="mx-auto">{isLoading ? 'Salvando...' : 'Salvar'}</Button>
        </form>
      </main>
    </div>
  );
};

export default New;
