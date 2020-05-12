import React, { useState, useEffect } from "react";
import useDropdown from "./useDropdown";
import { getBreeds } from "./BreedSource";

const ANIMALS = ["dog", "cat", "bird", "horse", "chick", "duck"];

const SearchParams = () => {
  const [location, setLocation] = useState("HangZhou, CN");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("animal", "all", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("breed", "all", breeds);

  useEffect(() => {
    setBreeds([]);
    setBreed("all");
    getBreeds(animal).then((breeds) => {
      setBreeds(breeds);
    });
  }, [animal, setBreeds, setBreed]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
