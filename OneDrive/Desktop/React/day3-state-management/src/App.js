import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import ThemeToggle from './components/ThemeToggle';
import LoginForm from './components/LoginForm';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
            <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                  <h1 className="text-2xl font-bold">My Portfolio</h1>
                  <ThemeToggle />
                </div>
              </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="space-y-12">
                {/* Authentication Section */}
                <section>
                  <h2 className="text-3xl font-bold mb-6">Authentication Demo</h2>
                  <LoginForm />
                </section>

                {/* Shopping Cart Section */}
                <section>
                  <h2 className="text-3xl font-bold mb-6">Shopping Cart Demo</h2>
                  <ShoppingCart />
                </section>
              </div>
            </main>
          </div>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;