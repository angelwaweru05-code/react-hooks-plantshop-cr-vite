import React from "react";

// Displays a single plant's details and a button to toggle its sold-out status.
function PlantCard({ plant, toggleSoldOut, isSoldOut }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button
        className={isSoldOut ? "" : "primary"}
        onClick={() => toggleSoldOut(plant.id)}
      >
        {isSoldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
