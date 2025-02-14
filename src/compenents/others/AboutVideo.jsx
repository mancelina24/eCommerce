import React from "react";

const AboutVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative w-[800px] h-[450px] rounded-lg overflow-hidden shadow-lg">
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
          src="video.mp4" // Buraya video yolunu ekle
          className="w-full h-full object-cover"
          controls
          autoPlay={isPlaying}
        />
      </div>
    </div>
  );
};

export default AboutVideo;
