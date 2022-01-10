export const Header = () => {
  return (
    <header className="flex flex-col text-center sm:flex-row items-center justify-center gap-2 p-3 bg-gray-light">
      <img
        src="https://github.com/miguel5g.png?size=64"
        alt="Miguel"
        className="rounded-full h-8 w-8"
      />
      <h1 className="font-bold text-xl sm:text-2xl">Pensamentos do Miguel</h1>
    </header>
  );
};
