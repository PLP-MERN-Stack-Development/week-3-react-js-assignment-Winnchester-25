import React, { useState } from 'react';
import Button from '../components/Button';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-4">PLP Task Manager</h1>
      
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg mb-4">
          Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">src/pages/Home.jsx</code> and save to test HMR
        </p>

        <Button />

        <div className="flex items-center gap-4 my-4">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            -
          </button>
          <span className="text-xl font-bold">{count}</span>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
