import React from "react";
import { carousel } from "../../services/data";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carousel.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carousel.length) % carousel.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Her 3000 milisaniyede bir (3 saniye) slayt geçişi yapar

    return () => clearInterval(intervalId); // Bileşen unmont edildiğinde interval silinir
  }, []);
  return (
    <div className="flex justify-center my-10 items-center">
      <div className="relative  w-[90%] h-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carousel.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover"
            />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          ⬅️
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          ➡️
        </button>
      </div>
    </div>
  );
};

export default Carousel;
