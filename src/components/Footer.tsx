import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full p-3 text-sm sm:flex-row bg-gray-light">
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
        <a className="p-1 mt-2 rounded sm:ml-4 sm:mt-0 bg-gray-highlight">Não clique!</a>
      </Link>
    </footer>
  );
};
