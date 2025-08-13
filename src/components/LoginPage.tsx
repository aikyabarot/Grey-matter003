import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { login } = useAppContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter an email address');
      return;
    }

    const success = login(email);
    if (!success) {
      setError('Invalid email. Please try one of the suggested emails.');
    } else {
      setError('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gray Matter by Buxton</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Try{' '}
              <span className="font-mono text-xs bg-gray-100 px-1 rounded">recruiter@buxton.com</span>,{' '}
              <span className="font-mono text-xs bg-gray-100 px-1 rounded">manager@buxton.com</span>,{' '}
              <span className="font-mono text-xs bg-gray-100 px-1 rounded">admin@buxton.com</span>,{' '}
              <span className="font-mono text-xs bg-gray-100 px-1 rounded">tech@buxton.com</span>, or{' '}
              <span className="font-mono text-xs bg-gray-100 px-1 rounded">executive@buxton.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;