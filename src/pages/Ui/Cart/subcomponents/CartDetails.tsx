import React, { useState } from 'react';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const removeItem = () => {
    // Logic to remove item from the list
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Products Details</h2>
      <table className="min-w-full bg-transparent ">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left text-gray-600">Num</th>
            <th className="py-2 px-4 border-b text-left text-gray-600">Book</th>
            <th className="py-2 px-4 border-b text-left text-gray-600">Amount</th>
            <th className="py-2 px-4 border-b text-left text-gray-600">Cost</th>
            <th className="py-2 px-4 border-b text-left text-gray-600">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2 px-4 text-gray-700">01.</td>
            <td className="py-2 px-4 flex items-center space-x-4">
              <img src="/assets/books/book.png" alt="My Book Cover" className="w-16 h-20" />
              <p className="text-gray-700">My Book Cover Name</p>
            </td>
            <td className="py-2 px-4">
              <div className="flex items-center">
                <button 
                  onClick={decreaseQuantity} 
                  className="bg-purple-500 text-white px-3 py-1 rounded-l hover:bg-purple-600"
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button 
                  onClick={increaseQuantity} 
                  className="bg-purple-500 text-white px-3 py-1 rounded-r hover:bg-purple-600"
                >
                  +
                </button>
              </div>
            </td>
            <td className="py-2 px-4 text-gray-700">36 AED</td>
            <td className="py-2 px-4 text-gray-700">{36 * quantity} AED</td>
            <td className="py-2 px-4 text-center">
              <button 
                onClick={removeItem} 
                className="text-red-500 text-xl hover:text-red-600"
              >
                &times;
              </button>
            </td>
          </tr>
          {/* Repeat above <tr> for more items */}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetails;
