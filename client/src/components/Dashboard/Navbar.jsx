import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-emerald-600 hover:text-emerald-700">
          Expensify
        </Link>
        
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Link 
                to="/dashboard" 
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Logout
              </button>
              {user && (
                <span className="text-gray-600">
                  {user.name || user.email}
                </span>
              )}
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;