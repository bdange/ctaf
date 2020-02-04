import React from "react";
import "./App.css";
import { Element } from "react-scroll";

import Header from "./components/Header";
import Announcement from "./components/Announcement";
import Widget from "./components/Widget";

function App() {
  return (
    <div className="App">
      <Header />
      <Announcement />
      <br />

      <Widget />
    </div>
  );
}

export default App;
