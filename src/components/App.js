import React, { useState } from "react";
import Menu from "./Menu";
import { menuItems } from "../data";
import "../styles.css";

function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div id="main">
      <h1>Our Menu</h1>
      <div className="buttons">
        <button
          id="filter-btn-1"
          className={activeCategory === "Breakfast" ? "active" : ""}
          onClick={() => setActiveCategory("Breakfast")}
        >
          Breakfast
        </button>
        <button
          id="filter-btn-2"
          className={activeCategory === "Lunch" ? "active" : ""}
          onClick={() => setActiveCategory("Lunch")}
        >
          Lunch
        </button>
        <button
          id="filter-btn-3"
          className={activeCategory === "Shakes" ? "active" : ""}
          onClick={() => setActiveCategory("Shakes")}
        >
          Shakes
        </button>
        <button
          className={activeCategory === "All" ? "active" : ""}
          onClick={() => setActiveCategory("All")}
        >
          All
        </button>
      </div>
      <Menu items={menuItems} activeCategory={activeCategory} />
    </div>
  );
}

export default App;
