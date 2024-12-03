

const MenuCard = ( {pizzas}) => {

    const {name, image} = pizzas;
    return (
        <div>
         <div
      className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-5 max-w-sm mx-auto shadow-lg"
    >
      {/* Pizza Image */}
      <img
        src={image}
        alt="Pizza"
        className="w-48 h-48 rounded-full mb-4"
      />

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
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-lg ${index < 4 ? "text-yellow-500" : "text-gray-300"}`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Price */}
      <p className="text-2xl font-bold text-black mb-4">$40.00</p>

      {/* Purchase Button */}
      <button
        className="bg-orange-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
        onClick={() => alert("Pizza purchased!")}
      >
        PURCHASE NOW
      </button>
    </div>
            
        </div>
    );
};

export default MenuCard;