import Head from 'next/head';
import Link from 'next/link';
import toast from 'react-hot-toast';
import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { Button } from '../components/Button';

import { api } from '../services/Api';
import { usePosts } from '../hooks/usePosts';

import styles from '../styles/pages/new.module.css';

const New = () => {
  const [validator, setValidator] = useState('');
  const [content, setContent] = useState('');
  const [note, setNote] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { refreshPosts } = usePosts();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLoading) return;

    setLoading(true);

    const promise = api.post('/posts', {
      content,
      validator,
      note: note === '' ? undefined : note,
    });

    toast.promise(promise, {
      loading: 'Salvando...',
      success: () => {
        setLoading(false);
        setContent('');
        setValidator('');
        setNote('');
        refreshPosts();

        return 'Pensamento criado com sucesso!';
      },
      error: (err) => {
        setLoading(false);
        console.log(err);

        return 'Ocorreu um erro ao salvar.';
      },
    });
  }

  return (
    <div className="flex flex-col min-h-screen px-3">
      <Head>
        <title>Criar novo pensamento</title>
      </Head>

      <header className="flex items-center py-4">
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

      <main className="w-full max-w-2xl p-4 mx-auto my-4 rounded md:p-8 lg:p-16 lg:my-16 bg-gray-light">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <h1 className="text-3xl font-bold text-center text-white">Novo pensamento</h1>

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
            <input
              id="note"
              type="text"
              maxLength={128}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <span>Vazio ou entre 4 e 128 caracteres.</span>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="content">Pensamento</label>
            <textarea
              id="content"
              maxLength={512}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <span>Entre 4 e 512 caracteres.</span>
          </div>

          <Button className="mx-auto">{isLoading ? 'Salvando...' : 'Salvar'}</Button>
        </form>
      </main>
    </div>
  );
};

export default New;
