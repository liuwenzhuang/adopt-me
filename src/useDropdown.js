import React, { useState } from "react";

const useDropdown = (label, defaultState, source) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(/\s/, "").toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={source.length === 0}
      >
        <option value="all">All</option>
        {source.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, setState];
};

export default useDropdown;
