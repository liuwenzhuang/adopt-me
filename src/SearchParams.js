import React, { useState } from "react";
import useDropdown from "./useDropdown";

const ANIMALS = ["dog", "cat", "bird", "horse", "chick", "duck"];

const SearchParams = () => {
  const [location, setLocation] = useState("HangZhou, CN");
  const [animal, AnimalDropdown] = useDropdown("animal", "all", ANIMALS);

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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
