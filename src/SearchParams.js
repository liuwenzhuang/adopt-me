import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";

const SearchParams = () => {
  const [location, setLocation] = useState("HangZhou, CN");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("animal", "all", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("breed", "all", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });
    setPets(animals || []);
  }

  // useEffect 会在依赖列表（第二个参数）中的数据变化时触发，在第一次渲染后必然会被调用
  useEffect(() => {
    setBreeds([]);
    setBreed("all");
    pet
      .breeds(animal)
      .then((res) => setBreeds(res.breeds.map((item) => item.name)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animal]);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
