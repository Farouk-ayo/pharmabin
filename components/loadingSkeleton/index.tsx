const LoadingSkeleton = ({ count = 6, type = "card" }) => {
  return [...Array(count)].map((_, index) => (
    <div
      key={index}
      className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 animate-pulse"
    >
      {type === "card" && (
        <>
          <div className="h-6 bg-gray-300 rounded-md mb-4 w-3/4"></div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
              <div className="h-4 bg-gray-300 rounded-md w-2/3"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
              <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
              <div className="h-4 bg-gray-300 rounded-md w-1/3"></div>
            </div>
          </div>
        </>
      )}
      {type === "table" && (
        <div className="space-y-2">
          <div className="h-6 bg-gray-300 rounded-md mb-2 w-full"></div>
          {[...Array(3)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="h-4 bg-gray-300 rounded-md w-full mb-2"
            ></div>
          ))}
        </div>
      )}
    </div>
  ));
};

export default LoadingSkeleton;
