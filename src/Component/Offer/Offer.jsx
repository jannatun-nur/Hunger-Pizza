import holiday from "../../../public/images/holiday.png";
import offer from "../../../public/images/offer.png";
import "./offer.css";
const Offer = () => {
  return (
    <div className="bg-white min-h-screen">
      <div>
        <img className="lg:ml-60" id="holiday" src={holiday} />
      </div>

      <div className="lg:flex lg:justify-between md:flex md:justify-between px-10">
        <section>
          <img src={offer} id="offer" />
        </section>

        <section id="offer-text" className="text-black text-center">
          <p className="lg:text-3xl md:text-2xl text-[#027361] font-serif">
            Extra beef mashroom chasse platter
          </p>
          <p className="lg:text-3xl md:text-2xl text-[#027361] font-serif lg:py-4 py-2">
            40.98 ${" "}
            <span
              className="text-[#f57d11]
                font-bold font-serif shadow-slate-50"
            >
              {" "}
              ONLY
            </span>
          </p>
          <button className="lg:text-4xl md:text-4xl text-3xl font-bold text-[#027361] animate-bounce font-serif lg:py-6 py-4">
            ORDER <span className="text-[#f57d11]">NOW</span>{" "}
          </button>
        </section>
      </div>
    </div>
  );
};

export default Offer;
