import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Plus, Minus, Trash2 } from "lucide-react";
import {
  updateCartItem,
  removeFromCart,
} from "../store/actions/shoppingCartActions";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shoppingCart.cart);
  const [cartItems, setCartItems] = useState(cart);

  const cartItemsCount = cartItems.reduce((total, item) => total + item.count, 0);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.count,
    0
  );
  const shipping = 5.99; // Example shipping cost
  const tax = subtotal * 0.08; // Example tax rate (8%)
  const total = subtotal + shipping + tax;

  // Function to add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const handleQuantityChange = (productId, currentCount, change) => {
    const newCount = currentCount + change;
    if (newCount <= 0) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(updateCartItem(productId, { count: newCount }));
    }
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  // Example effect to log cart items (you can replace this with actual logic)
  useEffect(() => {
    console.log('Cart items:', cartItems);
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <p className="text-lg mb-6">Your cart is empty</p>
          <Link
            to="/shop"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">
                Cart Items ({cartItemsCount})
              </h2>
            </div>

            {cartItems.map((item) => (
              <div key={item.product.id} className="p-6 border-b">
                <div className="flex items-start gap-4">
                  <img
                    src={
                      item.product.image ||
                      "/placeholder.svg?height=100&width=100"
                    }
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{item.product.name}</h3>
                      <span className="font-medium">
                        ${(item.product.price * item.count).toFixed(2)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      ${item.product.price.toFixed(2)} each
                    </p>

                    <div className="flex items-center gap-6 mt-4">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-1 border border-gray-300 rounded-md hover:bg-gray-100"
                          onClick={() =>
                            handleQuantityChange(
                              item.product.id,
                              item.count,
                              -1
                            )
                          }
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{item.count}</span>
                        <button
                          className="p-1 border border-gray-300 rounded-md hover:bg-gray-100"
                          onClick={() =>
                            handleQuantityChange(item.product.id, item.count, 1)
                          }
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        className="text-sm text-gray-500 hover:text-red-500"
                        onClick={() => handleRemoveItem(item.product.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-2 inline-block" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <hr className="border-t border-gray-200 my-4" />

            <div className="space-y-4 py-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>

            <hr className="border-t border-gray-200 my-4" />

            <div className="flex justify-between py-4">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>

            <Link
              to="/payment"
              className="block w-full px-4 py-2 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition-colors mt-4"
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/shop"
              className="block w-full px-4 py-2 border border-gray-300 text-center rounded-md hover:bg-gray-100 transition-colors mt-4"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
