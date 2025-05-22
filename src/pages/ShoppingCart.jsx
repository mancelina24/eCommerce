import React, { useState, useEffect } from "react";
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

  const cartItemsCount = cart.reduce(
    (total, item) => total + item.count,
    0
  );

  // Calculate totals only for checked items
  const subtotal = cart.reduce(
    (total, item) => total + (item.checked ? item.product.price * item.count : 0),
    0
  );
  const shipping = subtotal > 0 ? 5.99 : 0; // Example shipping cost
  const tax = subtotal * 0.08; // Example tax rate (8%)
  const total = subtotal + shipping + tax;

  const handleQuantityChange = (productId, currentCount, change) => {
    const newCount = currentCount + change;
    if (newCount <= 0) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(updateCartItem(productId, { count: newCount }));
    }
  };

  const handleCheckItem = (productId, currentChecked) => {
    dispatch(updateCartItem(productId, { checked: !currentChecked }));
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  if (cart.length === 0) {
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
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Shopping Cart ({cartItemsCount} items)</h1>
        <Link
          to="/shop"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm divide-y">
            {cart.map((item) => (
              <div key={item.product.id} className="p-6">
                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckItem(item.product.id, item.checked)}
                    className="h-4 w-4 text-blue-600"
                  />
                  <img
                    src={item.product.images[0]?.url}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.product.name}</h3>
                    <p className="text-gray-500">{item.product.description}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.count, -1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="font-medium">{item.count}</span>
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.count, 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.product.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-semibold ${item.checked ? 'text-gray-900' : 'text-gray-400'}`}>
                      ${(item.product.price * item.count).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
