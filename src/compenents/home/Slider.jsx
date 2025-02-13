import React, { useEffect, useState } from "react";
import { slider } from "../../services/homedata";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slider.length) % slider.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Her 3000 milisaniyede bir (3 saniye) slayt geçişi yapar

    return () => clearInterval(intervalId); // Bileşen unmont edildiğinde interval silinir
  }, []);
  return (
    <div className="relative w-full h-auto overflow-hidden bg-[#23856d] pt-20">
      <div
        className="flex transition-transform duration-700 "
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: "100%",
        }}
      >
        {slider.map((item) => (
          <div key={item.id} className="relative w-full h-auto flex-shrink-0 ">
            <div className="md:absolute top-50 md:top-40 md:w-[25rem] left-7 md:left-40 flex flex-col justify-center items-center md:items-start gap-10">
              <h4 className="h4 text-center md:text-start ">{item.h4}</h4>
              <h1 className="h1 text-center md:text-start">{item.h1}</h1>
              <p className="h4 md:p text-center md:text-start text-white w-[18rem]">
                {item.p}
              </p>
              <div className="flex flex-col md:flex-row gap-10">
                <h3 className="h3 text-white text-center md:text-start">
                  {item.h3}
                </h3>
                <button className="btnhome w-[14rem] h-[4rem]">
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              {" "}
              <img
                src={item.img}
                alt={`Slide ${item.id}`}
                className=" h-[47rem] md:w-[28rem] md:h-[43rem] object-cover  "
              />
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full  w-[14rem] h-[3.9rem]"
      >
        <FaChevronLeft className="text-white text-2xl md:text-4xl bg-transparent" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full "
      >
        <FaChevronRight className="text-white text-2xl md:text-4xl bg-transparent" />
      </button>
    </div>
  );
};

export default Slider;
