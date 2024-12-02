import banner from '../../public/images/banner.png'
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className="">
  <div className="hero-content flex-col lg:flex-row-reverse bg-[#17422f]">
    <img
      src={banner}
      id="banner-image"
      className="max-w-sm rounded-lg " />
    <div> 
      <h1 className="lg:text-7xl font-thin font-serif">HUNGER <br></br>
      <span className=''>PIZZA</span> </h1>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;