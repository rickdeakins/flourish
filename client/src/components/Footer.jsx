import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {

  return(
<div id="footer" className="text-secondary py-1 fixed-bottom" style={{ height: '75px', backgroundColor: 'rgba(180, 180, 180, .10)' }}>
      <div id="text-secondary" style={{ margin: '20px'}}>
      <p>© 2024 flourish - a visual artist showcase</p>
    </div>  
    </div>  
  )
}

export default Footer;