import { useContext } from "react";
import { CartContext } from "../App";
import CartItem from "./cartItem";

export default function Cart({ status }) {
  const [currentCart, updateCart] = useContext(CartContext);

  const getTotalPrice = function () {
    let currentPrice = 0;
    currentCart.forEach((item) => {
      currentPrice = currentPrice + item.price * item.quantity;
    });
    return currentPrice;
  };

  return (
    <div
      id="cart-frame"
      className={
        "bg-neutral-950 h-[96vh] w-96 fixed right-2 top-2 rounded-2xl " + status
      }
    >
      <h1 className="text-2xl text-center mt-4 ">Current cart</h1>
      <div id="cart-scroll" className="overflow-y-scroll w-[100%] h-[80%]">
        {currentCart.map((item) => {
          console.log(item);
          return (
            <CartItem
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              id={item.id}
              quantity={item.quantity}
            ></CartItem>
          );
        })}
      </div>
      <h1 className="text-green-600 text-3xl text-center mt-6">
        Total price: {getTotalPrice()}
      </h1>
    </div>
  );
}
