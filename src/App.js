import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Example from "./components/example";
import CharacterSelection from "./menu/characterSelection";

class App extends Component {
  render() {
    return (
      <div>
        <Example />
        <CharacterSelection />
      </div>
    );
  }
}

export default App;
