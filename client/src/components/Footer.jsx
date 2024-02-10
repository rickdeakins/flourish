import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {

  return (
    <div id="footer" className="py-4 fixed-bottom margin-right text-secondary" style={{ height: '60px', backgroundColor: '#F2F2F2', marginTop: '10px'}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <p>© 2024 <img src="./assets/misc/logotemp.svg"  alt="logo" style={{ width: '70px', height: 'auto' }} /> | a visual artist showcase</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;