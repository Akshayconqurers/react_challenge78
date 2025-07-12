import React from 'react';
import { useCart } from '../contexts/CartContext';

const ShoppingCart = () => {
  const { items, addItem, removeItem, updateQuantity, clearCart, itemCount, total } = useCart();

  // Sample products for demo
  const sampleProducts = [
    { id: 1, name: 'Laptop', price: 999, image: 'https://via.placeholder.com/60' },
    { id: 2, name: 'Mouse', price: 25, image: 'https://via.placeholder.com/60' },
    { id: 3, name: 'Keyboard', price: 75, image: 'https://via.placeholder.com/60' },
    { id: 4, name: 'Monitor', price: 300, image: 'https://via.placeholder.com/60' }
  ];

  const handleAddItem = (product) => {
    addItem(product);
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      updateQuantity(id, quantity);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Products */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <div className="space-y-4">
            {sampleProducts.map(product => (
              <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <img src={product.image} alt={product.name} className="w-12 h-12 rounded" />
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-gray-600">${product.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleAddItem(product)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Cart ({itemCount})</h2>
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
              >
                Clear Cart
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <img src={item.image} alt={item.name} className="w-10 h-10 rounded" />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total: ${total.toFixed(2)}</span>
                  <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;