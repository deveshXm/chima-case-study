import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Error: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-500">Error</h1>
        <p className="mt-4 text-gray-600">
          {location.state?.message || 'An unknown error occurred. Please try again.'}
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-600"
        >
          Go back to Home
        </button>
      </div>
    </div>
  );
};

export default Error;
