import { useContext } from "react";
import { CartContext } from "../App";

export default function CartItem({ title, price, image, id, quantity }) {
  const [currentCart, updateCart] = useContext(CartContext);

  const onItemClick = function () {
    const newCart = currentCart.filter((item) => item.id != id);
    updateCart(newCart);
  };

  const addUnit = function () {
    const cartClone = structuredClone(currentCart);
    const index = cartClone.findIndex((item) => item.id === id);
    cartClone[index].quantity += 1;
    updateCart(cartClone);
  };

  const substractUnit = function () {
    const cartClone = structuredClone(currentCart);
    const index = cartClone.findIndex((item) => item.id === id);
    cartClone[index].quantity -= 1;

    if (cartClone[index].quantity == 0) {
      cartClone.splice(index, 1);
    }

    updateCart(cartClone);
  };

  return (
    <>
      <div
        id={id}
        onClick={onItemClick}
        className="mt-3 mx-auto px-2 py-1 items-center flex w-[95%] h-24 rounded-xl outline outline-black bg-neutral-900 relative transition-all duration-300 hover:bg-red-700 cursor-pointer z-30 hover:z-50"
      >
        <h1 className="text-white text-bg px-2 my-3 text-center w-32">
          {title}
        </h1>

        <h2 className="bg-green-500 mx-auto px-2 py-1 rounded-xl w-16 h-8 text-center bg-opacity-50">
          ${price}
        </h2>

        <img
          className="w-32 h-16 mx-auto rounded-xl object-cover"
          src={image}
        ></img>
      </div>

      <div id="quantity" className="flex justify-center my-3">
        <button
          className="mx-3 w-7 h-7 bg-blue-500 rounded-sm text-center justify-center align-middle"
          onClick={substractUnit}
        >
          -
        </button>
        <h1>{quantity}</h1>
        <button
          className=" mx-3 w-7 h-7 bg-blue-500 rounded-sm text-center justify-center align-middle"
          onClick={addUnit}
        >
          +
        </button>
      </div>
    </>
  );
}
