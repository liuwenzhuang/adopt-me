import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Luna", animal: "Cat", feed: "CatFood" }),
    React.createElement(Pet, { name: "Jiji", animal: "Bird", feed: "Wheat" }),
    React.createElement(Pet, { name: "Wang", animal: "Dog", feed: "Bone" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
