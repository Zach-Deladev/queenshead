import React from "react";
import hero from "../assets/tabletop.webp";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import insta from "../assets/insta.png";
import sports from "../assets/sports.png";

interface HeroProps {
  onOpenModal: () => void; // Define the prop for opening the modal
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <>
      <div
        className="relative flex flex-col justify-center items-center h-[90vh] text-center bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="space-y-5">
          <img
            src={logo}
            alt="Queen's Head Logo"
            className="max-w-xs md:max-w-xl mb-4"
          />
          <h2
            className="text-2xl md:text-3xl leading-normal"
            style={{
              color: "#FFFAE2",
              fontFamily: "'Abhaya Libre', serif",
              fontWeight: "600",
            }}
          >
            Crafting Culinary Memories <br /> by the Sea
          </h2>

          {/* Booking Button */}
          <button
            onClick={onOpenModal}
            className="inline-block px-4 py-2 border-4 border-solid mb-4"
            style={{
              borderColor: "#BB945C",
              color: "#FFFAE2",
              fontWeight: "600",
            }}
          >
            Book Now
          </button>

          <div className="flex space-x-4 justify-center items-center">
            <a
              href="https://www.facebook.com/profile.php?id=61555579756205"
              className="text-white hover:text-gray-300"
            >
              <img src={facebook} alt="Facebook" className="w-8 h-8" />
            </a>
            <a
              href="https://www.instagram.com/queensheadcullercoats?igsh=MTM3dmhqNWpkenZtbg=="
              className="text-white hover:text-gray-300"
            >
              <img src={insta} alt="Instagram" className="w-8 h-8" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61555579756205"
              className="text-white hover:text-gray-300"
            >
              <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 ">
        <div className="relative bg-black flex justify-center items-center">
          <img src={sports} alt="" className="w-72 " />
        </div>
      </div>
    </>
  );
};

export default Hero;
