import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

// Page layout composing the new plant form, search bar, and plant list, passing down handlers and state.
function PlantPage({ plants, addPlant, toggleSoldOut, soldOut, searchQuery, setSearchQuery }) {
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search value={searchQuery} onChange={setSearchQuery} />
      <PlantList plants={plants} toggleSoldOut={toggleSoldOut} soldOut={soldOut} />
    </main>
  );
}

export default PlantPage;
