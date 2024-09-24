import React, { useState } from "react";

const CheckoutForm = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact and Shipping Information */}
        <div className="bg-white p-8 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-6">Contact information</h2>
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 border border-gray-300 rounded mb-4"
          />

          <h2 className="text-lg font-semibold mb-6">Shipping information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="w-full p-3 border border-gray-300 rounded mb-4"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full p-3 border border-gray-300 rounded mb-4"
            />
          </div>
          <input
            type="text"
            placeholder="Company (optional)"
            className="w-full p-3 border border-gray-300 rounded mb-4"
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full p-3 border border-gray-300 rounded mb-4"
          />
          <input
            type="text"
            placeholder="Apartment, suite, etc."
            className="w-full p-3 border border-gray-300 rounded mb-4"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="City"
              className="w-full p-3 border border-gray-300 rounded mb-4"
            />
            <select className="w-full p-3 border border-gray-300 rounded mb-4">
              <option>United States</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="State / Province"
              className="w-full p-3 border border-gray-300 rounded mb-4"
            />
            <input
              type="text"
              placeholder="Postal code"
              className="w-full p-3 border border-gray-300 rounded mb-4"
            />
          </div>
          <input
            type="text"
            placeholder="Phone"
            className="w-full p-3 border border-gray-300 rounded mb-4"
          />

          {/* Delivery Method */}
          <h2 className="text-lg font-semibold mb-6">Delivery method</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-4 border border-gray-300 rounded flex justify-between items-center">
              <div>
                <p>Standard</p>
                <p className="text-sm text-gray-500">4-10 business days</p>
              </div>
              <span>$5.00</span>
            </div>
            <div className="p-4 border border-gray-300 rounded flex justify-between items-center">
              <div>
                <p>Express</p>
                <p className="text-sm text-gray-500">2-5 business days</p>
              </div>
              <span>$16.00</span>
            </div>
          </div>

          {/* Payment Method */}
          <h2 className="text-lg font-semibold mb-6">Payment</h2>
          <div className="flex space-x-4 mb-4">
            <label className="flex items-center">
              <input type="radio" name="payment" className="mr-2" />
              Credit card
            </label>
            <label className="flex items-center">
              <input type="radio" name="payment" className="mr-2" />
              PayPal
            </label>
            <label className="flex items-center">
              <input type="radio" name="payment" className="mr-2" />
              eTransfer
            </label>
          </div>
          <input
            type="text"
            placeholder="Card number"
            className="w-full p-3 border border-gray-300 rounded mb-4"
          />
          <input
            type="text"
            placeholder="Name on card"
            className="w-full p-3 border border-gray-300 rounded mb-4"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Expiration date (MM/YY)"
              className="w-full p-3 border border-gray-300 rounded mb-4"
            />
            <input
              type="text"
              placeholder="CVC"
              className="w-full p-3 border border-gray-300 rounded mb-4"
            />
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-8 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-6">Order summary</h2>
          <div className="border-b pb-4 mb-4">
            {/* Item 1 */}
            <div className="flex justify-between mb-4">
              <div className="flex">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Product 1"
                  className="w-12 h-12 object-cover mr-4"
                />
                <div>
                  <p>Basic Tee</p>
                  <p className="text-sm text-gray-500">Black, Large</p>
                  <p className="text-sm">$32.00</p>
                </div>
              </div>
              <div>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-12 border border-gray-300 p-2 text-center"
                />
                <button className="text-gray-500 hover:text-red-500 mt-2">
                  Remove
                </button>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex justify-between">
              <div className="flex">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Product 2"
                  className="w-12 h-12 object-cover mr-4"
                />
                <div>
                  <p>Basic Tee</p>
                  <p className="text-sm text-gray-500">Sienna, Large</p>
                  <p className="text-sm">$32.00</p>
                </div>
              </div>
              <div>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-12 border border-gray-300 p-2 text-center"
                />
                <button className="text-gray-500 hover:text-red-500 mt-2">
                  Remove
                </button>
              </div>
            </div>
          </div>
          {/* Order Details */}
          <div className="mb-6">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>$64.00</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>$5.00</p>
            </div>
            <div className="flex justify-between">
              <p>Taxes</p>
              <p>$5.52</p>
            </div>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <p>Total</p>
            <p>$75.52</p>
          </div>
          <button className="w-full bg-blue-600 text-white p-3 rounded mt-4">
            Confirm order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
