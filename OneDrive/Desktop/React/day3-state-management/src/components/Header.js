import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const { theme } = useTheme();
  const { user, isAuthenticated } = useAuth();
  const { itemCount } = useCart();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm">Theme: {theme}</span>
            
            {isAuthenticated && (
              <span className="text-sm">Welcome, {user.name}</span>
            )}
            
            <span className="text-sm">Cart: {itemCount} items</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;