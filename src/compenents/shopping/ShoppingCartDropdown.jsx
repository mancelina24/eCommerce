import React, { useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Plus, Minus, Trash2 } from "lucide-react";
import {
  updateCartItem,
  removeFromCart,
} from "../../store/actions/shoppingCartActions";

const ShoppingCartDropdown = () => {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const history = useHistory();

  return (
    <div className="absolute right-0 top-full bg-white shadow-lg z-50 p-5 w-[320px] rounded-md border">
      <p className="text-black font-bold mb-2">My Cart ({cart.length})</p>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {cart.map((item) => (
            <div key={item.product.id} className="flex gap-3 border-b pb-2">
              <img
                src={
                  item.product.images?.[0]?.url ||
                  item.product.image ||
                  "/placeholder.svg?height=64&width=64"
                }
                alt={item.product.name}
                className="w-14 h-14 object-cover rounded"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold">{item.product.name}</p>
                <p className="text-xs text-gray-500">Quantity: {item.count}</p>
                <p className="text-sm font-bold text-secondary-alert">
                  {item.product.price} TL
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-4 flex gap-2">
          <a
            className="flex-1 text-center border py-2 rounded-md border-secondary-alert text-secondary-alert font-bold hover:bg-gray-100"
            onClick={() => history.push("/cart")}
          >
            View Cart
          </a>

          <button
            className="flex-1 text-center bg-red-500 hover:bg-red-600 text-white py-2 rounded-md"
            onClick={() => history.push("/payment")}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartDropdown;
