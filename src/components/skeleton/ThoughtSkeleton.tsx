export const ThoughtSkeleton = () => {
  return (
    <div className="flex flex-col p-6 rounded bg-gray-light">
      <div className="animate-pulse">
        {/* Header */}
        <div className="flex items-end gap-2 mb-4">
          <div className="w-64 h-5 rounded-full bg-gray-highlight" />
          <div className="w-64 h-3 rounded-full bg-gray-highlight" />
        </div>

        {/* Paragraph */}
        <div className="flex flex-col gap-1">
          <div className="flex gap-4">
            <div className="w-full h-3 rounded-full bg-gray-highlight" />
            <div className="w-full h-3 rounded-full bg-gray-highlight" />
          </div>
          <div className="w-full h-3 rounded-full bg-gray-highlight" />
          <div className="flex gap-4">
            <div className="w-full h-3 rounded-full bg-gray-highlight" />
            <div className="w-full h-3 rounded-full bg-gray-highlight" />
            <div className="w-full h-3 rounded-full bg-gray-highlight" />
          </div>
          <div className="w-full h-3 rounded-full bg-gray-highlight" />
        </div>

        {/* Note */}
        <div className="w-2/3 h-3 mt-4 rounded-full bg-gray-highlight" />
      </div>
    </div>
  );
};
