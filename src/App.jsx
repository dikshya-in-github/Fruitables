import Navbar from "./components/Navbar"
import ModalSearch from "./components/ModalSearch"
import HeroStart from "./components/HeroStart"
import FeatureSection from "./components/FeatureSection"
import FruitShop from "./components/FruitShop"
import Features from "./components/Features"
import Vesitable from "./components/Vesitable"
import Banner from "./components/Banner"
import BestSeller from "./components/BestSeller"
import Fact from "./components/Fact"
import Tastimonial from "./components/Tastimonial"

// Libraries Stylesheet
import "./lib/lightbox/css/lightbox.min.css"
import "./lib/owlcarousel/assets/owl.carousel.min.css"

import "./css/style.css"
import "./css/bootstrap.min.css"

function App() {
    return (
        <>
            <Navbar />
            <ModalSearch/>
            <HeroStart/>
            <FeatureSection/>
            <FruitShop/>
            <Features/>
            <Vesitable/>
            <Banner/>
            <BestSeller/>
            <Fact/>
            <Tastimonial/>
        </>
    )
}

export default App
