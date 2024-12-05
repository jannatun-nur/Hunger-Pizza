import { useEffect, useState } from "react";

const ReviewCard = () => {
  const data = [
    {
      id: 1,
      image: "https://i.ibb.co.com/yVkM94B/1.png",
      name: "Roushan Mike",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/tCKPCTk/2.png",
      name: "Hushan Derik",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/VNpzcXc/3.png",
      name: "Twink Avik",
    },
    {
      id: 4,
      image: "https://i.ibb.co.com/5FysSDw/4.png",
      name: "Arik Erish",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const { name, image } = data[currentIndex];

  return (
    <div className="lg:flex lg:justify-around">
      <section>
        <div className="flex justify-center items-center gap-8 p-5 ">
          <div className="bg-teal-700 text-white p-6 rounded-lg flex flex-col items-center w-80 shadow-md">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4">
              <img src={image} alt={name} className="rounded-full" />
            </div>

            {/* Name */}
            <div className="text-lg font-semibold mb-2">{name}</div>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-xl ${
                    index < 4 ? "text-yellow-500" : "text-gray-400"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* Right Card */}
        <div className="border border-teal-600 p-6 rounded-lg flex flex-col items-center w-6/12 shadow-md">
          {/* Statistics */}
          <div className="flex gap-4 mb-4">
            <div className="flex items-center gap-2 text-teal-700">
              <span className="text-xl">👍</span>
              <span className="font-semibold">30+ k</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-blue-500 text-white px-3 py-1 rounded-full">
                Follow
              </button>
              <span className="text-gray-700 font-semibold">2M</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-center text-gray-700 italic">
            “hdhfdsfh ihgkdfpo uf iysfh jjfkalfhd jhdjfkhdhf jdibcjxzc kvcjkbvc
            jbcnjvkc bk vjoh dlfhd fdlfhdlflsdlk sdkjf lsdfklsdhf bulf uyhifud
            ugdf uidfy “
          </p>
        </div>
      </section>
    </div>
  );
};

export default ReviewCard;
