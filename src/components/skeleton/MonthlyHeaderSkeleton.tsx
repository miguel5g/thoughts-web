export const MonthlyHeaderSkeleton = () => {
  return (
    <div className="relative my-3 p-2">
      <div className="top-1/2 left-0 -translate-y-1/2 absolute w-full bg-gray-highlight h-px" />
      <div className="top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute w-64 bg-gray h-3" />
      <div className="animate-pulse flex items-center justify-center">
        <div className="h-3 w-48 bg-gray-highlight rounded-full"></div>
      </div>
    </div>
  );
};
