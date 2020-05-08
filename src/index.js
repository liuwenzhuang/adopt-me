const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.feed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Luna", animal: "Cat", feed: "CatFood" }),
    React.createElement(Pet, { name: "Jiji", animal: "Bird", feed: "Wheat" }),
    React.createElement(Pet, { name: "Wang", animal: "Dog", feed: "Bone" }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
