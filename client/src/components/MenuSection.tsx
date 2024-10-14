import drinksImage from "../assets/drinks.png";
import Gallery from "./Gallery";
import image1 from "../assets/pint.jpg";
import image2 from "../assets/fishnchips.jpg";
import image3 from "../assets/pintoutside.jpg";
import image4 from "../assets/pienchips.jpg";
import menuPdf from "../assets/menupdf.pdf"; // Import your PDF file here
import sundayMenuPdf from "../assets/sundaymenupdf.pdf";

const MenuSection = () => {
  const images = [
    { src: image1, alt: "pint" },
    { src: image2, alt: "fish and chips" },
    { src: image3, alt: "pint outside" },
    { src: image4, alt: "pie and chips" },
  ];

  return (
    <div className="relative flex flex-col items-center text-center min-h-fit">
      <img
        src={drinksImage}
        alt="Drinks"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="z-10 flex flex-col items-center text-center bg-black bg-opacity-50">
        <h1
          style={{
            color: "#FFFAE2",
            fontFamily: "'Abhaya Libre', serif",
            fontWeight: "600",
          }}
          className="text-4xl md:text-5xl my-3 pt-6 font-bold"
        >
          Food & Drinks
        </h1>
        <Gallery images={images} />
        <div className="flex space-x-4 mt-3 mb-4">
          <a
            href={menuPdf}
            download="Menu.pdf"
            className="py-1 px-3 bg-transparent border-4 border-[#BB945C] text-[#FFFAE2] font-bold focus:outline-none focus:shadow-outline hover:bg-[#BB945C]"
          >
            Standard Menu
          </a>
          <a
            href={sundayMenuPdf}
            download="SundayMenu.pdf"
            className="py-1 px-3 bg-transparent border-4 border-[#BB945C] text-[#FFFAE2] font-bold focus:outline-none focus:shadow-outline hover:bg-[#BB945C]"
          >
            Sunday Menu
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
