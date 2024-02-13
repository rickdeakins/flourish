import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import headerLogo from '../../assets/logotemp.svg';
import NavTabs from './NavTabs';

const Header = ({ isAuthenticated }) => {
  return (
    <div>
      <header className="text-white py-1 fixed-top margin-right text-secondary" style={{ position: 'fixed', height: '175px', width: '100%', top: '0', left: '0', backgroundColor: '#F2F2F2', padding: '20px' }}>
        <div className="container">
          <div className="position-absolute" style={{ left: '80px', top: '8%' }}>
            <img src={headerLogo} alt="logo" style={{ width: '200px', height: 'auto', marginBottom: '10%' }} />
          </div>
        <NavTabs isAuthenticated={isAuthenticated} />
        </div>
      </header>
      <div style={{ marginTop: '6%' }}>
        {/* Content below the header */}
      </div>
    </div>
  );
};

export default Header;

