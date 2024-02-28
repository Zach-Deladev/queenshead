import { useState } from "react";
import pubImage from "../assets/pubfront.jpg"; // Make sure the path is correct

const AboutUs = () => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <section className="bg-[#B2C4A1] py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={pubImage}
              alt="The Queen's Head Pub"
              className="rounded-lg shadow-md border-4 border-[#BB945C]"
            />
          </div>
          <div className="border-4 border-[#BB945C] bg-white p-6 ">
            <h2
              style={{
                fontFamily: "'Abhaya Libre', serif",
              }}
              className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 "
            >
              About Us
            </h2>
            <p className="text-gray-600 mb-4">
              Experience the charm and warm hospitality of The Queen's Head, a
              traditional seaside pub that combines the allure of the coast with
              the comfort of a local tavern. Revel in our gastro pub style
              cuisine, a delightful gastronomic journey that celebrates locally
              sourced produce in all its freshness and authenticity. Every dish
              we serve is a testament to our commitment to crafting memorable
              meals by the sea.
            </p>
            {/* Hidden paragraphs */}
            <div className={`${readMore ? "block" : "hidden"} md:block`}>
              <p className="text-gray-600 mb-4">
                At our bar, you'll find a diverse selection of premium draught
                beers, ales, wines, and spirits, specially curated to complement
                our food. Whether you're a beer enthusiast, a wine connoisseur,
                or a lover of spirits, our offerings cater to all tastes.
              </p>
              <p className="text-gray-600 mb-4">
                Our large beer garden is a haven for those sunny days when all
                you want to do is bask in the coastal atmosphere. It's the
                perfect setting to unwind, enjoy a refreshing drink, and soak up
                the sun.
              </p>
              <p className="text-gray-600">
                At The Queen's Head, we're more than just a pub. We're a place
                where food, drinks, and the sea come together to create
                unforgettable experiences. Join us for a meal and let us
                transport you to a world of coastal charm and culinary delight.
              </p>
            </div>
            {/* Read More/Less Button */}
            <button
              onClick={toggleReadMore}
              className="mt-4 py-2 px-4 bg-[#BB945C] hover:bg-[#BB945C] text-[#FFFAE2] font-bold rounded focus:outline-none focus:shadow-outline md:hidden"
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
