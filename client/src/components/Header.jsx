import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './Searchbar'; // Import the SearchBar component

const Header = () => {
  return (
    <div>
      <header className="text-white py-1" style={{ height: '120px', backgroundColor: '#F2F2F2', padding: '20px' }}>
        <div className="container">
          <div className="position-absolute" style={{ left: '80px', top: '75px' }}>
            <img src="/assets/logotemp.svg"  alt="logo" style={{ width: '200px', height: 'auto' }}/>
          </div>
          {/* Add the SearchBar component here */}
          <div className="position-absolute" style={{ right: '80px', top: '75px' }}>
            <SearchBar onSearch={(query) => console.log('Searching for:', query)} />
          </div>
          {/* End of SearchBar component */}
        </div>      
      </header>
    </div>
  );
};

export default Header;

