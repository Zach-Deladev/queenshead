import { useState } from 'react';
import drinksImage from '../assets/drinks.png';
import Gallery from './Gallery';
import image1 from '../assets/pint.jpg';
import image2 from '../assets/fishnchips.jpg';
import image3 from '../assets/pintoutside.jpg';
import image4 from '../assets/pienchips.jpg';
import menu from '../assets/menu.jpg';

const MenuSection = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const images = [
    { src: image1, alt: 'pint' },
    { src: image2, alt: 'fish and chips' },
    { src: image3, alt: 'pint outside' },
    { src: image4, alt: 'pie and chips' },
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
          style={{ color: '#FFFAE2', fontFamily: "'Abhaya Libre', serif", fontWeight: '600' }}
          className="text-4xl md:text-5xl my-3 pt-6 font-bold"
        >
          Food & Drinks
        </h1>
        <Gallery images={images} />
        <button
          type="button"
          onClick={toggleModal}
          className="py-1 px-3 mt-3 mb-4 bg-transparent border-4 border-[#BB945C] text-[#FFFAE2] font-bold focus:outline-none focus:shadow-outline hover:bg-[#BB945C]"
        >
          View Menu
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-black p-4 border-[#BB945C] border-2 shadow-lg flex flex-col items-center">
            <img
              src={menu}
              alt="Menu"
              className="border-[#BB945C] border-2 mb-4 max-w-xs md:max-w-xl"
            />
            <button
              onClick={toggleModal}
              className="mt-4 py-1 px-3 bg-[#BB945C] text-white font-bold rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuSection;
