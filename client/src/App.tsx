import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import OpeningHours from "./components/OpeningHours";
import MenuSection from "./components/MenuSection";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <NavBar />
      <div id="home">
        <Hero />
      </div>
      <div id="opening-hours">
        <OpeningHours />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="menu">
        <MenuSection />
      </div>

      <div id="reviews">
        <Reviews />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default App;
