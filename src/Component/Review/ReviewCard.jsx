import  { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import "./review.css"; // Add this for the custom animation styles

const ReviewCard = () => {
  const data = [
    {
      id: 1,
      image: "https://i.ibb.co/yVkM94B/1.png",
      name: "Roushan Mike",
      des: "This pizza was an absolute delight! The crust was perfectly crispy on the outside and soft on the inside. The cheese melted in my mouth, and the tangy tomato sauce tied it all together beautifully. A timeless classic done right!",
    },
    {
      id: 2,
      image: "https://i.ibb.co/tCKPCTk/2.png",
      name: "Hushan Derik",
      des: "I loved the variety of toppings available. I tried the BBQ chicken pizza, and it was phenomenal! The smoky flavor of the chicken combined with the sweetness of the BBQ sauce created a taste explosion.",
    },
    {
      id: 3,
      image: "https://i.ibb.co/VNpzcXc/3.png",
      name: "Twink Avik",
      des: "We ordered a large pizza for a family dinner, and it was a hit. The toppings were generously spread, and the balance of flavors was spot-on. It brought everyone to the table, and there wasn't a single slice left!",
    },
    {
      id: 4,
      image: "https://i.ibb.co/5FysSDw/4.png",
      name: "Arik Erish",
      des: "Nothing beats this pizza when you're up late working or binge-watching your favorite show. The delivery was fast, and the pizza arrived hot and fresh. The gooey cheese and pepperoni were exactly what I needed to end the day on a high note.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true); // Start the slide animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        setIsSliding(false); // Reset sliding state
      }, 500); // Matches the CSS transition duration
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const { name, image, des } = data[currentIndex];

  return (
    <div className="lg:flex lg:justify-between columns-1 md:flex md:justify-between mt-20">
      <section className={`slider-container ${isSliding ? "sliding" : ""}`}>
        <div className="flex justify-center items-center gap-8 p-5">
          <div className="bg-teal-700 text-white p-6 rounded-lg flex flex-col items-center lg:w-[500px] md:w-[300px] shadow-md">
            {/* Avatar */}
            <div className="lg:w-28 lg:h-28 md:w-24 md:h-24 h-16 w-16 rounded-full bg-white flex items-center justify-center mb-4">
              <img src={image} alt={name} className="rounded-full" />
            </div>

            {/* Name */}
            <div className="lg:text-xl font-serif  mb-2">{name}</div>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-2xl ${
                    index < 4 ? "text-yellow-500" : "text-gray-400"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="font-serif lg:text-xl text-xs"> {des} </div>
          </div>
        </div>
      </section>

      <section>
        {/* Right Card */}
        <div className="border border-teal-600 mx-2 p-6 rounded-lg flex flex-col items-center lg:w-[500px] lg:h-[480px] md:h-[570px] h-[530px] shadow-md">
          <div className="flex mb-4 lg:gap-20 gap-10">
            <div className="flex items-center gap-2 text-teal-700">
              <span className="text-blue-600 text-4xl">
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
              <span className="font-semibold text-2xl text-blue-600 font-serif">
                2M
              </span>
            </div>
          </div>

          <p className="text-center font-semibold lg:text-xl italic text-gray-700 py-3 md:text-xl">
            “Welcome to{" "}
            <span className="text-teal-600 font-bold font-serif lg:text-2xl">
              HUNGER PIZZA
            </span>{" "}
            website, your go-to destination for mouthwatering, freshly baked
            pizzas!  We are giving our service since 2007 and sending fresh
            pizzas at your door in just time. Customize your pizza just the way
            you like it, adding your favorite toppings and sauces. Whether
            you're dining solo, with friends, or hosting a party, we've got you
            covered. Our user-friendly website ensures a seamless ordering
            experience, with fast delivery to your doorstep. Don't miss out on
            exclusive deals and offers. Savor the taste of perfection—order
            your dream pizza today!“
          </p>
        </div>
      </section>
    </div>
  );
};

export default ReviewCard;
