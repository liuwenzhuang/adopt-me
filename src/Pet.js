import React from 'react';

export default function Pet({ name, animal, feed }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{feed}</h2>
    </div>
  )
};
