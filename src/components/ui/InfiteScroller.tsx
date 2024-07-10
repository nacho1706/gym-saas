"use client";

const InfiniteScroll = () => {
  const sports = [
    "Crossfit training",
    "HIIT",
    "Strength training",
    "Athletic conditioning",
    "Spinning training",
  ];

  const repeatedSports = [...sports, ...sports, ...sports]; // Duplicate the array to create continuous effect

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="flex animate-scroll space-x-10">
        {repeatedSports.map((sport, index) => (
          <div key={index} className="flex items-center">
            <span className="text-white text-2xl max-sm:text-xl pr-2 max-sm:pr-3">
              {sport}
            </span>
            {index < repeatedSports.length - 1 && (
              <span className="text-white text-2xl max-sm:text-xl mx-8"> • </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;

