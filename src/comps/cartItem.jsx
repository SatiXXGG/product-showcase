import { useContext } from "react";
import { CartContext } from "../App";

export default function CartItem({ title, price, image, id }) {
  const [currentCart, updateCart] = useContext(CartContext);

  const onItemClick = function () {
    const newCart = currentCart.filter((item) => item.id != id);
    console.log(id);
    console.log(newCart);

    updateCart(newCart);
  };

  return (
    <div
      id={id}
      onClick={onItemClick}
      className="mt-3 mx-auto px-2 py-1 items-center flex w-[95%] h-24 rounded-xl outline outline-black bg-neutral-900 relative transition-all duration-300 hover:bg-red-700 cursor-pointer z-30 hover:z-50"
    >
      <h1 className="text-white text-bg px-2 my-3 text-center w-32">{title}</h1>

      <h2 className="bg-green-500 mx-auto px-2 py-1 rounded-xl w-16 h-8 text-center bg-opacity-50">
        ${price}
      </h2>

      <img
        className="w-32 h-16 mx-auto rounded-xl object-cover"
        src={image}
      ></img>
    </div>
  );
}
