import holiday from '../../../public/images/holiday.png'
import offer from '../../../public/images/offer.png'
import './offer.css'
const Offer = () => {
    return (
        <div>
      <div>
      <img  
            className='lg:ml-60'
            id='holiday'
             src={holiday}/>
      </div> 

            <div className='flex justify-between px-10'>
               <section>
               <img src={offer}
                id='offer'  />
               </section>

                <section 
                id="offer-text"
                className='text-black '>
                <p>Extra beef mashroom chasse platter</p>
                <p>40.98 $ ONLY</p>
                <button>ORDER NOW</button>

                </section>
            </div>


        </div>
    );
};

export default Offer;