import Swal from "sweetalert2";

const MenuCard = ({ pizzas }) => {
  const { name, image, price } = pizzas;
  return (
    <div>
      <div className="lg:h-[350px] h-[420px] mx-2 flex flex-col items-center justify-center rounded-lg p-5  shadow-lg hover:animate-zoom">
        {/* IMAGE AND DETAILS IN FLES MOOD */}

        <div className="lg:flex lg:justify-between">
          <section>
            <img
              src={image}
              alt="Pizza"
              className="lg:w-36 lg:h-30 w-40 ml-5 lg:ml-0 rounded-full mb-6"
            />
          </section>

          <section>
            {/* Pizza Title */}
            <h2 className="text-xl font-bold text-green-700 mb-2">{name}</h2>

            {/* Tags */}
            <div className="flex gap-2 mb-3">
              <span className="px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-700">
                mashroom
              </span>
              <span className="px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-700">
                barbiQ sauce
              </span>
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-3 ">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-3xl ${
                    index < 4 ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* BUTTON AND PRICE IN FLEX MOOD */}

        <div className="lg:flex lg:justify-between gap-10">
          <section>
            <p className="text-2xl font-bold text-black mb-4"> {price} </p>
          </section>

          <section>
            <button
              className="bg-orange-600 text-white py-2 px-6 rounded-lg  font-semibold hover:bg-orange-400 transition-colors
              hover:text-[#027361] "
              onClick={() => Swal.fire({
                        text: "Order has been confirmed.",
                        icon: "success"
                        })}
            >
              PURCHASE NOW
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
