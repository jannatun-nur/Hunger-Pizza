import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";

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
    <div className="lg:flex lg:justify-around columns-1 md:flex md:justify-between">
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
        <div className="border border-teal-600 mx-2 p-6 rounded-lg flex flex-col items-center lg:w-7/12 lg:h-[480px] md:h-[570px] h-[530px] shadow-md">
          {/* Statistics */}
          <div className="flex mb-4 lg:gap-20 gap-10">
            <div className="flex items-center gap-2 text-teal-700">
              <span className=" text-blue-600 text-4xl">
                <FaFacebook />
              </span>
              <span className="font-semibold text-2xl text-blue-600 font-serif">
                30k
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-blue-500 text-white px-4 py-1 rounded-ss-xl text-xl">
                Follow
              </button>
              <span className=" font-semibold text-2xl text-blue-600 font-serif">
                2M
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-center font-semibold lg:text-xl  italic text-gray-700 py-3 md:text-xl">
            “Welcome to <span className="text-teal-600 font-bold font-serif lg:text-2xl">HUNGER PIZZA</span> website, your go-to destination for
            mouthwatering, freshly baked pizzas! We are giving our service since 2007 
            and sending fresh pizzas at your door in just time.
            Customize your pizza just the way you like it, adding your favorite
            toppings and sauces. Whether you're dining solo, with friends, or
            hosting a party, we've got you covered. Our user-friendly website
            ensures a seamless ordering experience, with fast delivery to your
            doorstep. Don't miss out on exclusive deals and offers. Savor the
            taste of perfection—order your dream pizza today!“
          </p>
        </div>
      </section>
    </div>
  );
};

export default ReviewCard;
