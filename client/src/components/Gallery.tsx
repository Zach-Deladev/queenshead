import React from 'react';

// Assuming you have a type for the image object
type Image = {
  src: string;
  alt?: string;
};

type GalleryProps = {
  images: Image[];
};

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 ">
      {images.map((image, index) => (
        <div key={index} className="w-full p-5 ">
          <img src={image.src} alt={image.alt || `Gallery item ${index}`} className="w-full h-auto object-cover   " />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
