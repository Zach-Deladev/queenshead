import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import OpeningHours from "./components/OpeningHours";
import MenuSection from "./components/MenuSection";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import AboutUs from "./components/AboutUs";
import Spacer from "./components/Spacer";
import Modal from "./components/Modal";
import BookingWidget from "./components/BookingWidget";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [widgetKey, setWidgetKey] = useState(0);
  const venueId = import.meta.env.VITE_VENUE_ID || ""; // Get venue ID from environment variables

  const handleOpenModal = () => {
    setWidgetKey((prevKey) => prevKey + 1); // Change the key to force re-render
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setWidgetKey((prevKey) => prevKey + 1); // Update the key to reset the widget
  };

  return (
    <>
      <NavBar onOpenModal={handleOpenModal} />
      <div id="home">
        <Hero onOpenModal={handleOpenModal} />
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
      <div id="spacer">
        <Spacer />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <div id="contact">
        <Footer />
      </div>

      {/* Modal Component */}
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        style={{
          width: "80%", // Adjust the width as needed
          maxWidth: "800px", // Set a max-width if needed
        }}
      >
        <BookingWidget key={widgetKey} venueId={venueId} />
      </Modal>
    </>
  );
}

export default App;
