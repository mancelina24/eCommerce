import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateCartItem,
  removeFromCart,
  setCart,
} from "../store/actions/shoppingCartActions";
import OrderSummary from "../compenents/shopping/Order";
import { Rocket, Trash2 } from "lucide-react";
import HeaderShop from "../layout/HeaderShop";
import Hero from "../compenents/home/Hero";
import FooterShop from "../layout/FooterShop";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  const updateCount = (productId, delta) => {
    const updatedCart = cart.map((item) =>
      item.product.id === productId
        ? { ...item, count: Math.max(1, item.count + delta) }
        : item
    );

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    dispatch(setCart(updatedCart));
  };

  const handleRemove = (productId) => {
    const updatedCart = cart.filter((item) => item.product.id !== productId);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    dispatch(removeFromCart(productId));
  };

  const toggleSelect = (productId) => {
    const updatedCart = cart.map((item) =>
      item.product.id === productId ? { ...item, checked: !item.checked } : item
    );

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    dispatch(setCart(updatedCart));
  };

  const subtotal = () =>
    cart
      .filter((item) => item.checked)
      .reduce((acc, item) => acc + item.count * item.product.price, 0);

  return (
    <div>
      <HeaderShop />
      <div className="bg-secondary-gray flex gap-10 justify-center">
        <div className="ml-48 py-4 flex-1 w-2/3">
          <p className="text-black text-base">My Cart ({cart.length})</p>
          <p className="text-xs mt-1 mb-4 text-red-700 font-semibold">
            Enjoy free shipping on purchases over $50
          </p>

          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div key={item.product.id}>
                <div className="flex gap-2 items-center text-xs p-1 bg-blue-50 border">
                  <p>Seller: Bandage</p>
                  <p className="bg-secondary-light_green text-white p-[4px] border rounded-lg">
                    {item.product.rating}
                  </p>
                </div>

                {item.count * item.product.price >= 200 && (
                  <div className="bg-green-50 border">
                    <p className="p-2 font-semibold text-xs text-center">
                      Free Shipping!
                    </p>
                  </div>
                )}

                <div className="flex flex-col p-4 bg-white shadow-md rounded-b-lg">
                  <div className="flex">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => toggleSelect(item.product.id)}
                      className="mr-4"
                    />
                    <img
                      src={item.product.images[0]?.url}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1 flex flex-row justify-between items-center ml-5 mr-10">
                      <div className="flex flex-col gap-2">
                        <p className="font-semibold text-base">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-red-700 font-bold bg-red-50 p-1 max-w-fit flex gap-1">
                          <Rocket size={14} />
                          {item.product.sell_count} items sold
                        </p>
                      </div>
                      <p className="text-secondary-alert font-bold">
                        {(item.count * item.product.price).toFixed(2)} $
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateCount(item.product.id, -1)}
                        className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
                        disabled={item.count === 1}
                      >
                        -
                      </button>
                      <span className="font-semibold">{item.count}</span>
                      <button
                        onClick={() => updateCount(item.product.id, 1)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => handleRemove(item.product.id)}
                      className="ml-4 p-1 flex gap-2 text-xs items-center my-auto text-primary"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 flex bg-gray-100 rounded-lg text-right justify-end items-center">
            <h3 className="text-base font-semibold">Total:&nbsp;</h3>
            <div className="text-lg font-bold">{subtotal().toFixed(2)} $</div>
          </div>
        </div>

        <div className="mr-48 mt-20 flex flex-col gap-4 w-1/5">
          <OrderSummary />
        </div>
      </div>
      <FooterShop />
    </div>
  );
};

export default ShoppingCart;
