import React from "react";
import "./App.css";
import { Element } from "react-scroll";

import Header from "./components/Header";
import Announcement from "./components/Announcement";

function App() {
  return (
    <div className="App">
      <Header />
      <Announcement />
    </div>
  );
}

export default App;
