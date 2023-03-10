import React from "react";
import { createRoot } from 'react-dom';

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Luna",
      breed: "Belgian Shepard",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Pepper",
      breed: "Tabby",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Ein",
      breed: "Corgi",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
