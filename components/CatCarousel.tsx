import React, { useState, useEffect } from 'react';

function CatCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const catImages = [
    'https://www.catster.com/wp-content/uploads/2017/12/A-gray-kitten-meowing.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg',
    'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg',
    'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9',
    'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg',
    'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/06/cat-217679.jpg?h=c4ed616d&itok=3qHaqQ56',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % catImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative h-64 w-full">
      {catImages.map((image, index) => (
        <img
          key={image}
          src={image}
          alt="cat"
          className={`absolute top-0 left-0 h-full w-full object-cover transition duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pb-2">
        {catImages.map((image, index) => (
          <div
            key={image}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full mr-1 bg-gray-300 ${
              index === currentIndex ? 'bg-blue-500' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default CatCarousel;
