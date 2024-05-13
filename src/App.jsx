import React, { useEffect, useState } from "react";
import { getItems } from "./calls/ItemsApi";
import Item from "./comps/item";
import Filters from "./comps/filters.jsx";
import Cart from "./comps/cart.jsx";

export const FiltersContext = React.createContext();
export const CartContext = React.createContext();

function App() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState({
    type: "all",
    maxPrice: "2000",
  });

  const [currentCart, updateCart] = useState([]);

  let cartClass = "";

  useEffect(() => {
    getItems(setItems);
  }, []);

  const filterProducts = function () {
    return items.filter((product) => {
      return (
        product.price <= filter.maxPrice &&
        (filter.type === "all" || filter.type == product.category)
      );
    });
  };

  return (
    <>
      <CartContext.Provider value={[currentCart, updateCart]}>
        <FiltersContext.Provider value={[filter, setFilter]}>
          <Filters></Filters>
          <div
            id="show-item"
            className="grid grid-cols-2 justify-center w-[80vw] md:grid-cols-4 md:w-[45vw] mx-auto"
          >
            {filterProducts(items).map((item) => {
              console.log(item);
              return (
                <Item
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.thumbnail}
                  id={item.id}
                ></Item>
              );
            })}
          </div>
        </FiltersContext.Provider>

        <Cart status={cartClass}></Cart>
      </CartContext.Provider>
    </>
  );
}

export default App;
