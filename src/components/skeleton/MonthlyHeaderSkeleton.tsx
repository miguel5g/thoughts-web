export const MonthlyHeaderSkeleton = () => {
  return (
    <div className="relative p-2 my-3">
      <div className="absolute left-0 w-full h-px -translate-y-1/2 top-1/2 bg-gray-highlight" />
      <div className="absolute w-64 h-3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-gray" />
      <div className="flex items-center justify-center animate-pulse">
        <div className="w-48 h-3 rounded-full bg-gray-highlight"></div>
      </div>
    </div>
  );
};
