import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}

export default Layout;
