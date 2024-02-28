import hero from "../assets/herobg.png";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import insta from "../assets/insta.png";
import sports from "../assets/sports.png";

const Hero = () => {
  return (
    <>
      <div
        className="relative flex flex-col justify-center items-center h-[90vh] text-center bg-no-repeat bg-cover bg-center" // 80% of viewport height
        style={{ backgroundImage: `url(${hero})` }} // Use the imported image here
      >
        {/* Content container */}
        <div className="space-y-5">
          {/* Logo */}
          <img
            src={logo}
            alt="Queen's Head Logo"
            className="max-w-xs md:max-w-2xl mb-4"
          />

          {/* Subtitle */}
          <h2
            className="text-2xl md:text-3xl leading-normal"
            style={{
              color: "#FFFAE2",
              fontFamily: "'Abhaya Libre', serif",
              fontWeight: "600",
            }} // Abhaya Libre semibold
          >
            Crafting Culinary Memories <br /> by the Sea
          </h2>

          {/* Contact Button */}
          {/* <a
          href="#contact"
          className="inline-block px-4 py-2 border-4  border-solid mb-4"
          style={{
            borderColor: "#BB945C",
            color: "#FFFAE2",
            fontWeight: "600",
          }}
        >
          Contact Us
        </a> */}

          {/* Social Media Icons */}
          <div className="flex space-x-4 justify-center items-center">
            <a
              href="https://www.facebook.com/profile.php?id=61555579756205"
              className="text-white hover:text-gray-300"
            >
              <img src={facebook} alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="#instagram" className="text-white hover:text-gray-300">
              <img src={insta} alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="#linkedin" className="text-white hover:text-gray-300">
              <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 ">
        <div className="relative bg-black flex justify-center items-center">
          <img src={sports} alt="" className="w-72" />
        </div>
      </div>
    </>
  );
};

export default Hero;
