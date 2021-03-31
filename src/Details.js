import React, { useEffect, useState } from "react";
import pet from "@frontendmasters/pet";
import { useParams } from "@reach/router";
import Carousel from "./Carousel";

const Details = () => {
  const [loading, setLoading] = useState(true);
  const [animalData, setAnimalData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    pet
      .animal(+id)
      .then((res) => {
        setAnimalData(res.animal);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h1>Loading</h1>;
  }

  const { name, type, description, photos: media } = animalData;
  const location = `${animalData.contact.address.city}, ${animalData.contact.address.state}`;
  const breed = animalData.breeds.primary;
  return (
    <div className="details">
      <Carousel media={media} />
      <div>
        <h1>{name}</h1>
        <h2>{`${type} — ${breed} — ${location}`}</h2>
        <button>Adopt {name}</button>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Details;
