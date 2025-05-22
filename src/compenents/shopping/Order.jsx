import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const OrderSummary = () => {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const history = useHistory();

  // Sadece "checked" olan ürünlerin toplamını hesapla
  const subtotal = () =>
    cart
      .filter((item) => item.checked)
      .reduce((acc, item) => acc + item.count * item.product.price, 0);

  // Kargo ücretini belirle
  const shipmentPrice = () => {
    if (cart.length === 0) return 0;
    const allEligible = cart
      .filter((item) => item.checked)
      .every((item) => item.count * item.product.price >= 50);
    return allEligible ? 0 : 50.0;
  };

  // Toplam fiyat
  const total = () => subtotal() + shipmentPrice();

  return (
    <div>
      <button
        className="bg-secondary-alert hover:bg-secondary-dark text-white py-2 px-4 rounded-t-md w-full flex gap-2 items-center justify-center"
        onClick={() => history.push("/shop")}
      >
        Continue shopping
      </button>

      <div className="border rounded-b-xl p-4">
        <p className="text-black text-base font-bold mb-5">Order summary</p>

        <div className="flex justify-between mb-4 text-sm">
          <span>Subtotal</span>
          <span>{subtotal().toFixed(2)} $</span>
        </div>

        <div className="flex justify-between mb-4 text-sm">
          <span>Shipping</span>
          <span>{shipmentPrice() === 0 ? "Free" : "20.00$"}</span>
        </div>

        {shipmentPrice() === 0 && (
          <div className="flex justify-between mb-4 text-sm text-secondary-light_green font-bold">
            <span>Free Shipping Discount</span>
            <span>-20.00 $</span>
          </div>
        )}

        <hr className="my-4" />

        <div className="flex justify-between text-base font-bold mb-4">
          <span>Total</span>
          <span>{total().toFixed(2)} $</span>
        </div>

        <button
          className="bg-secondary-alert hover:bg-secondary-dark text-white py-2 px-4 rounded-md w-full flex gap-2 items-center justify-center"
          onClick={() => history.push("/order")}
        >
          <span>Checkout</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
