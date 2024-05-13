import { useContext } from "react";
import { FiltersContext } from "../App";

export default function Filters() {
  const [filter, setFilter] = useContext(FiltersContext);

  const onPriceUpdate = function () {
    const selector = document.getElementById("price-range");
    setFilter({
      maxPrice: selector.value,
      type: filter.type,
    });
  };

  const onCategoryUpdate = function () {
    const selector = document.getElementById("category-selector");
    setFilter({
      maxPrice: filter.maxPrice,
      type: selector.value,
    });
  };

  return (
    <>
      <h1 className="justify-center text-3xl text-center pb-3">
        Alejandro shop
      </h1>

      <header className="flex justify-center w-[100vw]">
        <div id="price-range-div" className="mx-2 flex">
          {" "}
          <label htmlFor="price-range-title">
            Max price (${filter.maxPrice})
          </label>
          <input
            className="ml-2 slider"
            type="range"
            min="100"
            max="2000"
            id="price-range"
            defaultValue={2000}
            step={50}
            onChange={onPriceUpdate}
          ></input>
        </div>

        <div id="price-category-id" className="mx-2 flex">
          <label htmlFor="category-selector-label" className="mr-2">
            Categories
          </label>
          <select
            id="category-selector"
            className="bg-neutral-900 rounded-xl  border-2 border-neutral-900 text-center"
            onChange={onCategoryUpdate}
          >
            <option value="all">All</option>
            <option value="fragrances">Fragrances</option>
            <option value="smartphones">Smart phones</option>
            <option value="laptops">Laptops</option>
            <option value="skincare">Skincare</option>
          </select>
        </div>
      </header>
    </>
  );
}
