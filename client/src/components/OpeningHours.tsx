import pub from "../assets/pubfront.jpg";

const OpeningHours = () => {
  return (
    <div
      className="relative bg-[#B2C4A1]"
      style={{
        backgroundImage: `url(${pub})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-[#B2C4A1] bg-opacity-100 p-6">
        <div className="bg-white p-6 border-4 border-[#BB945C]">
        <h3 className="font-bold  text-center md:text-lg  mb-6">
          - OPENING HOURS -
        </h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
          {/* Hours for Monday - Friday */}
          <div>
            <p className="font-bold text-xl">12 AM - 12 PM All Week!</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;