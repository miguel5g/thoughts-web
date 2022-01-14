import ptBR from 'date-fns/locale/pt-BR';
import { format } from 'date-fns';

import styles from '../styles/components/monthlyHeader.module.css';

interface MonthlyHeaderProps {
  date: string;
}

export const MonthlyHeader = ({ date: dateString }: MonthlyHeaderProps) => {
  const date = new Date(dateString);

  function formatDate() {
    return format(date, 'MMMM && yyyy', { locale: ptBR }).replace(/&&/g, 'de');
  }

  return (
    <>
      <header className={styles.monthlyHeaderContainer}>
        <p>{formatDate()}</p>
      </header>

      {/* <header className="my-3 border-l-4 border-aqua rounded p-2 bg-gray-highlight">
        <h1 className="text-white font-medium text-xl first-letter:uppercase">{formatDate()}</h1>
      </header> */}
    </>
  );
};
