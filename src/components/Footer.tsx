import Link from 'next/link';
import { FiChevronsUp } from 'react-icons/fi';

import { Button } from './Button';

import styles from '../styles/components/footer.module.css';

export const Footer = () => {
  function handleBackToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <p className="">
          Created By{' '}
          <a
            href="https://github.com/miguel5g/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Miguel Ângelo
          </a>
        </p>

        <Link href="/new" passHref>
          <a className="p-1 rounded bg-gray-highlight">Não clique aqui!</a>
        </Link>

        <Button onClick={handleBackToTop}>
          <FiChevronsUp />
          <span>Voltar para o início</span>
        </Button>
      </div>
    </footer>
  );
};
