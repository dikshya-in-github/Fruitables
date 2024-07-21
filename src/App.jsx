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
import Footer from "./components/Footer"

// Libraries Stylesheet
import "./lib/lightbox/css/lightbox.min.css"
import "./lib/owlcarousel/assets/owl.carousel.min.css"

import "./css/style.css"
import "./css/bootstrap.min.css"

import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom"

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <div>
                    <h1>Home</h1>
                    <Link to="about">About Us</Link>
                </div>
            ),
        },
        {
            path: "about",
            element: <div>About</div>,
        },
    ])

    return (
        <>
            <Navbar />
            {/* baki */}

            <RouterProvider router={router} />
            
            <ModalSearch />
            {/* baki */}
            <HeroStart />
            {/* baki */}
            <FeatureSection />
            {/* ✅ */}
            <FruitShop />
            {/* imgs baki */}
            <Features />
            {/* imgs */}
            <Vesitable />
            {/* baki */}
            <Banner />
            {/* img */}
            <BestSeller />
            {/* img */}
            <Fact />
            {/* ✅ */}
            <Tastimonial />
            {/* baki */}
            <Footer />
            {/*img  */}
        </>
    )
}

export default App
