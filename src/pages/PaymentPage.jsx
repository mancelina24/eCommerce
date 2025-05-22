import { Link } from "react-router-dom"

const PaymentPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Postal Code</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
              </select>
            </div>
          </form>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <div className="space-y-4">
              <div className="border border-gray-300 rounded-md p-3 flex items-center">
                <input type="radio" name="payment" id="credit-card" className="mr-2" defaultChecked />
                <label htmlFor="credit-card">Credit Card</label>
              </div>
              <div className="border border-gray-300 rounded-md p-3 flex items-center">
                <input type="radio" name="payment" id="paypal" className="mr-2" />
                <label htmlFor="paypal">PayPal</label>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4 py-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>$99.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>$5.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>$8.00</span>
              </div>
            </div>

            <hr className="border-t border-gray-200 my-4" />

            <div className="flex justify-between py-4">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">$113.98</span>
            </div>

            <button className="block w-full px-4 py-2 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition-colors mt-4">
              Complete Order
            </button>

            <Link
              to="/cart"
              className="block w-full px-4 py-2 border border-gray-300 text-center rounded-md hover:bg-gray-100 transition-colors mt-4"
            >
              Back to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage
