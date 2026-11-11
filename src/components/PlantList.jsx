import React from "react";
import PlantCard from "./PlantCard";

// Renders a PlantCard for each plant in the filtered plants list.
function PlantList({ plants, toggleSoldOut, soldOut }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          toggleSoldOut={toggleSoldOut}
          isSoldOut={soldOut.has(plant.id)}
        />
      ))}
    </ul>
  );
}

export default PlantList;
