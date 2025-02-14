import React, { useState } from "react";

const AboutVideo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <div className="flex justify-center items-center my-20">
      <div className="relative w-[23rem] h-auto md:w-[38rem] md:h-auto rounded-lg overflow-hidden shadow-lg">
        {!isPlaying ? (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <button className="bg-blue-500 p-5 rounded-full shadow-lg">
              ▶
            </button>
          </div>
        ) : null}
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          className="w-full h-full object-cover"
          controls
          autoPlay={isPlaying}
          muted={false} // Burada sesi açmak için muted özelliğini false yapıyoruz
        />
      </div>
    </div>
  );
};

export default AboutVideo;
