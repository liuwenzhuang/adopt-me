import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  if (!pets || !pets.length) {
    return <h1>No Pets Found</h1>;
  }
  return pets.map((pet) => {
    return (
      <Pet
        name={pet.name}
        key={pet.id}
        animal={pet.type}
        breed={pet.breeds.primary}
        id={pet.id}
        media={pet.photos}
        location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
      />
    );
  });
};

export default Results;
