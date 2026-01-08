import React from "react";

const Menu = ({ items, activeCategory }) => {
  // Filter items based on the selected category
  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter(item => item.category === activeCategory);

  return (
    <div className="menu-container">
      {filteredItems.map(item => {
        // Set data-test-id for Cypress tests
        const dataTestId = `menu-item-${item.category.toLowerCase()}`;

        return (
          <div key={item.id} className="menu-item" data-test-id={dataTestId}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
