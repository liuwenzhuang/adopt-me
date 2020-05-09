import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="luna" animal="Cat" feed="CatFood" />
      <Pet name="Jiji" animal="Bird" feed="Wheat" />
      <Pet name="Wang" animal="Dog" feed="Bone" />
    </div>
  )
};

render(<App />, document.getElementById("root"));
