import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="text-sm flex flex-col sm:flex-row w-full items-center justify-center p-3 bg-gray-light">
      <h2 className="">
        Created By{' '}
        <a
          href="https://github.com/miguel5g/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Miguel Ângelo
        </a>
      </h2>

      <Link href="/new" passHref>
        <a className="mt-2 sm:ml-4 sm:mt-0 p-1 rounded bg-gray-highlight">Não clique!</a>
      </Link>
    </footer>
  );
};
