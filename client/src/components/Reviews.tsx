import React, { useState, useEffect } from "react";
import "./ReviewsCarousel.css"; // Make sure to create a CSS file for styling
import review from "../assets/reviews.png";
interface Review {
  name: string;
  review: string;
  stars: number;
}

const reviews: Review[] = [
  {
    name: "Jacqueline Graham",
    review:
      "Popped here for lunch on a damp cool January day and decided to go for the chicken curry. Everything about it was delicious and will certainly be going back!",
    stars: 5,
  },
  {
    name: "Sophia Wilson",
    review:
      "In a lovely location next to the water, clean and staff are very friendly and accommodating. Food came out relatively fast, fresh and good sized portions at a reasonable price",
    stars: 4,
  },
  {
    name: "David G",
    review:
      "Dropped in for lunch and so glad we did. The service is excellent , pleasant but not pushy with plenty of time to browse the menu while having a drink.",
    stars: 4,
  },
];

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Change slide every 2 seconds

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  const renderStars = (stars: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < stars ? "filled" : ""}`}>
        ★
      </span>
    ));
  };

  return (
    <>
      {/* <div className="grid grid-cols-1 md:grid-cols-1 p-6">
        <div className="relative bg-white flex justify-center items-center">
          <img src={review} alt="Review" className="w-3/5 md:w-1/3 my-3" />
        </div>
      </div> */}
      <div className="reviews-carousel">
        <div className="review-card">
        <div className="grid grid-cols-1 md:grid-cols-1 p-6">
        <div className="relative  flex justify-center items-center">
          <img src={review} alt="Review" className="md:w-full my-3" />
        </div>
      </div>
          <p className="review-text">"{reviews[currentIndex].review}"</p>
          <div className="review-stars">
            {renderStars(reviews[currentIndex].stars)}
          </div>
          <p className="review-author">- {reviews[currentIndex].name}</p>
        </div>
      </div>
    
    </>
  );
};

export default Reviews;
