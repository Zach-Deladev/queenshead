import drinksImage from "../assets/drinks.png";
import Gallery from "./Gallery";
import image1 from "../assets/pint.jpg";
import image2 from "../assets/fishnchips.jpg";
import image3 from "../assets/pintoutside.jpg";
import image4 from "../assets/pienchips.jpg";
import menuPdf from "../assets/menupdf.pdf"; // Import your PDF file here

const MenuSection = () => {
  // Removed useState hook for showModal

  const images = [
    { src: image1, alt: "pint" },
    { src: image2, alt: "fish and chips" },
    { src: image3, alt: "pint outside" },
    { src: image4, alt: "pie and chips" },
  ];

  return (
    <div className="relative flex flex-col items-center text-center  min-h-fit">
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
        <a
          href={menuPdf} // Link to your PDF file
          download="Menu.pdf" // Optional: Specify a filename for the downloaded file
          className="py-1 px-3 mt-3 mb-4 bg-transparent border-4 border-[#BB945C] text-[#FFFAE2] font-bold focus:outline-none focus:shadow-outline hover:bg-[#BB945C]"
        >
          Download Menu
        </a>
      </div>
    </div>
  );
};

export default MenuSection;
