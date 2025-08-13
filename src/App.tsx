import React from 'react';
import { useAppContext } from './context/AppContext';
import LoginPage from './components/LoginPage';

const App: React.FC = () => {
  const { user, isLoggedIn, logout } = useAppContext();

  if (!isLoggedIn) {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">Gray Matter by Buxton</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">{user?.email}</span>
              <button
                onClick={logout}
                className="px-3 py-1 text-sm text-gray-700 border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Dashboard</h2>
          <p className="text-gray-600">
            Welcome, {user?.role}! This is a placeholder for the dashboard content.
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
