import { useContext } from "react";
import { CartContext } from "../App";

export default function Item({ title, price, image, id }) {
  const [currentCart, updateCart] = useContext(CartContext);

  const isOnCart = function () {
    const result = currentCart.find((item) => item.id == id);

    if (result) {
      return false;
    } else {
      return true;
    }
  };

  const onAddCartClick = function () {
    const canAdd = isOnCart(id);
    if (canAdd) {
      updateCart([
        ...currentCart,
        {
          title: title,
          price: price,
          image: image,
          id: id,
        },
      ]);
    }
  };

  return (
    <div
      id={id}
      className="w-48 h-64 rounded-xl outline outline-black bg-neutral-900 m-2 relative transition-all duration-100 hover:scale-105 z-30 hover:z-50"
    >
      <h1 className="text-white text-bg px-2 my-3 text-center h-9 truncate">
        {title}
      </h1>

      <h2 className="bg-green-500 mx-auto px-2 py-1 rounded-xl w-24 text-center bg-opacity-50">
        ${price}
      </h2>

      <button
        className=" mt-3 flex mx-auto text-neutral-600"
        onClick={onAddCartClick}
      >
        Add to cart
      </button>

      <img
        className="w-44 h-28 mx-auto rounded-xl object-cover absolute bottom-2 left-2"
        src={image}
      ></img>
    </div>
  );
}
