import Banner from "./Component/Banner"
import Footer from "./Component/Footer/Footer"
import Menu from "./Component/Menu/Menu"
import Offer from "./Component/Offer/Offer"
import Review from "./Component/Review/Review"



function App() {
 

  return (
    <>
   <div className="bg-white min-h-screen">
   <Banner/>
   <Offer/>
   <Menu/>
   <Review/>
   <Footer/>
   
   </div>
    </>
  )
}

export default App
