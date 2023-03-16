import React from "react";


export const Gallery = () => {
 
      const images = [
    "https://source.unsplash.com/random/800x600",
    "https://source.unsplash.com/random/600x800",
    "https://source.unsplash.com/random/600x800",
    "https://source.unsplash.com/random/600x800",
    "https://source.unsplash.com/random/900x700",
    "https://source.unsplash.com/random/900x700",
    "https://source.unsplash.com/random/700x900",
    "https://source.unsplash.com/random/800x800",
    "https://source.unsplash.com/random/600x600",
  ];

  return (
    <div className=" py-8 bg-violet-400">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index}`} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .bg-gray-100 {
          background-color: #f7fafc;
        }
        .py-8 {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }
        .grid-cols-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .grid-cols-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .rounded-lg {
          border-radius: 0.5rem;
        }
        .shadow-lg {
          box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.3), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);
          
        }
      `}</style>
    </div>
  );
};
 



  