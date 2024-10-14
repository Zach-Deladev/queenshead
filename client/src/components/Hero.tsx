import { useState } from "react";
import hero from "../assets/tabletop.webp";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import insta from "../assets/insta.png";
import sports from "../assets/sports.png";
import menu1 from "../assets/chirstmasmenuone.png";
import menu2 from "../assets/christmasmenu2.png";
import christmasMenuPdf from "../assets/christmas_menu.pdf"; // Import your PDF file
import standardMenuPdf from "../assets/menupdf.pdf";
import sundayMenuPdf from "../assets/sundaymenupdf.pdf";
import standardMenuImage from "../assets/foodmenuimg.png";
import sundayMenuImage from "../assets/sundaymenuimg.png";


interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [isMenuModalOpen, setMenuModalOpen] = useState(false);
  const [menuType, setMenuType] = useState("christmas");

  const handleOpenMenuModal = (type: string) => {
    setMenuType(type);
    setMenuModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const handleCloseMenuModal = () => {
    setMenuModalOpen(false);
    // Restore body scroll when modal is closed
    document.body.style.overflow = "auto";
  };

  const getMenuContent = () => {
    switch (menuType) {
      case "standard":
        return {
          title: "Standard Menu",
          image: standardMenuImage,
          pdf: standardMenuPdf,
        };
      case "sunday":
        return {
          title: "Sunday Menu",
          image: sundayMenuImage,
          pdf: sundayMenuPdf,
        };
      case "christmas":
      default:
        return {
          title: "Christmas Menu",
          images: [menu1, menu2],
          pdf: christmasMenuPdf,
        };
    }
  };

  const menuContent = getMenuContent();

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
            Christmas Bookings now open! <br />
          </h2>

          {/* Menu Buttons */}
          <div className="flex flex-col md:flex-row md:space-x-4 justify-center mt-4 mb-4 space-y-4 md:space-y-0">
            <button
              onClick={() => handleOpenMenuModal("standard")}
              className="inline-block px-4 py-2 border-4 border-solid"
              style={{
                borderColor: "#BB945C",
                color: "#FFF",
                fontWeight: "600",
              }}
            >
              Standard Menu
            </button>
            <button
              onClick={() => handleOpenMenuModal("sunday")}
              className="inline-block px-4 py-2 border-4 border-solid"
              style={{
                borderColor: "#BB945C",
                color: "#FFF",
                fontWeight: "600",
              }}
            >
              Sunday Menu
            </button>
            <button
              onClick={() => handleOpenMenuModal("christmas")}
              className="inline-block px-4 py-2 border-4 border-solid"
              style={{
                borderColor: "#BB945C",
                color: "#FFF",
                fontWeight: "600",
              }}
            >
              Christmas Menu
            </button>
          </div>

          {/* Booking Button */}
          <div className="mt-4">
            <button
              onClick={onOpenModal}
              className="inline-block px-4 py-2 border-4 border-solid"
              style={{
                borderColor: "#BB945C",
                color: "#FFFAE2",
                fontWeight: "600",
              }}
            >
              Book Now
            </button>
          </div>

          <div className="flex space-x-4 justify-center items-center mt-4">
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

      {/* Modal for Menus */}
      {isMenuModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto"
          onClick={handleCloseMenuModal}
        >
          <div
            className="bg-black bg-opacity-70 p-8 border-4 rounded-none mx-4 max-w-lg w-full"
            style={{
              borderColor: "#BB945C", // Matching border color
              backgroundColor: "rgba(0, 0, 0, 0.67)", // 67% transparent black background
              maxHeight: "90vh", // Ensure the modal doesn't exceed 90% of the viewport height
              overflowY: "auto", // Scroll inside modal if content overflows
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">{menuContent.title}</h2>

            {/* Display Menu Images */}
            {menuContent.images ? (
              <div className="flex flex-col space-y-4">
                {menuContent.images.map((image, index) => (
                  <img key={index} src={image} alt={`${menuContent.title} ${index + 1}`} className="max-w-full" />
                ))}
              </div>
            ) : (
              <div className="flex flex-col space-y-4">
                <img src={menuContent.image} alt={menuContent.title} className="max-w-full" />
              </div>
            )}

            {/* Download Menu Button */}
            <a
              href={menuContent.pdf}
              download
              className="mt-4 m-2 inline-block px-4 py-2 border-2 border-solid"
              style={{
                borderColor: "#BB945C",
                color: "#fff",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Download Full Menu
            </a>

            {/* Close Button */}
            <button
              onClick={handleCloseMenuModal}
              className="mt-4 px-4 py-2 border-2 border-solid"
              style={{
                borderColor: "#BB945C",
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-1">
        <div className="relative bg-black flex justify-center items-center">
          <img src={sports} alt="" className="w-72" />
        </div>
      </div>
    </>
  );
};

export default Hero;