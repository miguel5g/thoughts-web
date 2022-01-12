export const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-2 p-3 text-center sm:flex-row bg-gray-light">
      <img
        src="https://github.com/miguel5g.png?size=64"
        alt="Miguel"
        className="w-8 h-8 rounded-full"
      />
      <h1 className="text-xl font-bold sm:text-2xl">Pensamentos do Miguel</h1>
    </header>
  );
};
