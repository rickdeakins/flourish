import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        
        
        <div>
          {Auth.loggedIn() ? (
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
