import React, { useEffect, useState } from "react";
import { carousel } from "../../services/data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Hero = ({ isMenuOpen }) => {
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
    <div
      className={`flex my-10 items-center  ${isMenuOpen ? "mt-20" : "mt-0"}`}
    >
      <div className="relative w-full h-auto overflow-hidden ">
        <div
          className="flex transition-transform duration-700 "
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: "100%",
          }}
        >
          {carousel.map((item) => (
            <div key={item.id} className="relative w-full h-auto flex-shrink-0">
              <img
                src={item.img}
                alt={`Slide ${item.id}`}
                className=" h-[47rem] md:w-full md:h-[70rem] object-cover"
              />
              <div className="absolute top-50 md:top-40 md:w-[25rem] left-7 md:left-40 flex flex-col gap-10">
                <h5 className="h5">{item.h5}</h5>
                <h1 className="h1 ">{item.h1}</h1>
                <h4 className="h4">{item.h4}</h4>
                <button className="btnhome w-[14rem] h-[4rem]">SHOP NOW</button>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full shadow w-[14rem] h-[3.9rem]"
        >
          <FaChevronLeft className="text-white text-2xl md:text-4xl bg-transparent" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full shadow"
        >
          <FaChevronRight className="text-white text-2xl md:text-4xl bg-transparent" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
