import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
const Header = () => {
  return (
    <div>
    <header className="text-white py-1 fixed-top" style={{ height: '120px', backgroundColor: '#F2F2F2' }}>
      <div className="container">
      <div className="position-absolute" style={{ left: '100px', top: '20px' }}>
        <img src="./assets/misc/logotemp.svg"  alt="logo" style={{ width: '200px', height: 'auto' }}/>
      </div>
      </div>      
      </header>
      </div>
  );
};

export default Header;
