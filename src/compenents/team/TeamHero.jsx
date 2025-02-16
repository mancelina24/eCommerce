import React from "react";
import { heroimages } from "../../services/TeamData";

const TeamHero = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Büyük Resim */}
        <div className="lg:col-span-2">
          <img
            src={heroimages[0]}
            alt="Large Fashion"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Küçük Resimler */}
        <div className="grid grid-cols-2 gap-4">
          {heroimages.slice(1).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Small Fashion ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamHero;
