import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div>
    <header className="text-white py-1" style={{ height: '120px', backgroundColor: '#F2F2F2', padding: '20px' }}>
      <div className="container">
      <div className="position-absolute" style={{ left: '80px', top: '75px' }}>
        <img src="/assets/logotemp.svg"  alt="logo" style={{ width: '200px', height: 'auto' }}/>
      </div>
      </div>      
      </header>
      </div>
  );
};

export default Header;
