import { Link, useLocation } from 'react-router-dom';
import React from "react";

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav id="nav" style={{ position: 'absolute', right: '60px', top: '15px'}}>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about"
            className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;

