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
        }, 3000);
    
        return () => clearInterval(interval); // Cleanup interval on unmount
      }, []);
    
      const { name, image } = data[currentIndex];
    
      return (
        <div className="flex justify-center items-center gap-8 p-5">
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
      );
    };
    

export default ReviewCard;