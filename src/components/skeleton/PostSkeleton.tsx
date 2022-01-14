export const PostSkeleton = () => {
  return (
    <div className="flex flex-col p-6 rounded bg-gray-light">
      <div className="animate-pulse">
        {/* Header */}
        <div className="flex items-end gap-2 mb-4">
          <div className="h-5 w-64 bg-gray-highlight rounded-full" />
          <div className="h-3 w-64 bg-gray-highlight rounded-full" />
        </div>

        {/* Paragraph */}
        <div className="flex flex-col gap-1">
          <div className="h-3 w-full bg-gray-highlight rounded-full" />
          <div className="flex gap-4">
            <div className="h-3 w-full bg-gray-highlight rounded-full" />
            <div className="h-3 w-full bg-gray-highlight rounded-full" />
          </div>
          <div className="h-3 w-full bg-gray-highlight rounded-full" />
          <div className="flex gap-4">
            <div className="h-3 w-full bg-gray-highlight rounded-full" />
            <div className="h-3 w-full bg-gray-highlight rounded-full" />
            <div className="h-3 w-full bg-gray-highlight rounded-full" />
          </div>
          <div className="h-3 w-full bg-gray-highlight rounded-full" />
        </div>

        {/* Note */}
        <div className="mt-4 h-3 w-2/3 bg-gray-highlight rounded-full" />
      </div>
    </div>
  );
};
