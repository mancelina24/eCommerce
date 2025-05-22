import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Plus, Minus, Trash2 } from "lucide-react";
import {
  updateCartItem,
  removeFromCart,
} from "../../store/actions/shoppingCartActions";

const ShoppingCartDropdown = ({ isOpen, onClose }) => {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  const cartItemsCount = cart.reduce((total, item) => total + item.count, 0);
  const cartTotal = cart.reduce(
    (total, item) => total + item.product.price * item.count,
    0
  );

  // If the dropdown is not open, don't render anything
  if (!isOpen) return null;

  const handleQuantityChange = (productId, currentCount, change) => {
    const newCount = currentCount + change;
    if (newCount <= 0) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(updateCartItem(productId, { count: newCount }));
    }
  };

  return (
    <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg z-50 w-80 p-0 border">
      <div className="p-4">
        <div className="text-sm font-medium">Shopping Cart</div>
        <div className="text-xs text-gray-500">{cartItemsCount} items</div>
      </div>
      <hr className="border-t border-gray-200" />
      <div className="max-h-80 overflow-auto">
        {cart.length === 0 ? (
          <div className="p-4 text-center text-sm text-gray-500">
            Your cart is empty
          </div>
        ) : (
          cart.map((item) => (
            <div key={item.product.id} className="p-4">
              <div className="flex items-center gap-4">
                <img
                  src={
                    (item.product.images && item.product.images.length > 0
                      ? item.product.images[0].url
                      : // Eğer item.product.image diye bir şey varsa (eski bir yapıdan kalma olabilir) onu kullan
                        item.product.image) ||
                    // Hiçbiri yoksa placeholder göster
                    "/placeholder.svg?height=64&width=64"
                  }
                  alt={item.product.name}
                  className="h-16 w-16 object-cover rounded"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium">{item.product.name}</div>
                  <div className="text-sm text-gray-500">
                    ${item.product.price}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="p-1 border border-gray-300 rounded-md hover:bg-gray-100"
                      onClick={() =>
                        handleQuantityChange(item.product.id, item.count, -1)
                      }
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="text-sm">{item.count}</span>
                    <button
                      className="p-1 border border-gray-300 rounded-md hover:bg-gray-100"
                      onClick={() =>
                        handleQuantityChange(item.product.id, item.count, 1)
                      }
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                    <button
                      className="p-1 text-gray-500 hover:text-red-500 ml-auto"
                      onClick={() => dispatch(removeFromCart(item.product.id))}
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <>
          <hr className="border-t border-gray-200" />
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">Total</span>
              <span className="text-sm font-medium">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <div className="flex gap-2">
              <Link
                to="/cart"
                className="w-1/2 px-4 py-2 text-sm text-center border border-gray-300 rounded-md hover:bg-gray-100"
                onClick={onClose}
              >
                View Cart
              </Link>
              <Link
                to="/payment"
                className="w-1/2 px-4 py-2 text-sm text-center bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={onClose}                
              >
                Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCartDropdown;
