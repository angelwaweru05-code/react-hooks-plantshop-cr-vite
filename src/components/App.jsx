import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const API_URL = "http://localhost:6001/plants";

// Root component managing global plant state, fetching, creation, sold-out toggling, and search filtering.
function App() {
  // List of all plants fetched from the backend
  const [plants, setPlants] = useState([]);
  // Set of plant IDs currently marked as sold out
  const [soldOut, setSoldOut] = useState(new Set());
  // Current search query string
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch all plants from the backend on page load
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // POST a new plant to the backend and add it to local state once created
  const addPlant = (newPlant) => {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((createdPlant) => {
        setPlants((prev) => [...prev, createdPlant]);
      });
  };

  // Toggle a plant's sold-out status by adding/removing its ID from the soldOut set
  const toggleSoldOut = (id) => {
    setSoldOut((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Filter plants by search query using case-insensitive includes
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={filteredPlants}
        addPlant={addPlant}
        toggleSoldOut={toggleSoldOut}
        soldOut={soldOut}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
}

export default App;
