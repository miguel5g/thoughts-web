import { MonthlyHeaderSkeleton, PostSkeleton } from '.';

export const MainSkeleton = () => {
  return (
    <main className="flex-1 mx-6">
      <div className="max-w-3xl gap-3 mx-auto flex flex-col">
        <MonthlyHeaderSkeleton />

        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </div>
    </main>
  );
};
