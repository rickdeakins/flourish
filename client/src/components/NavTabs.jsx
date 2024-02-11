import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  const genres = [
    { id: 1, name: 'Abstract' },
    { id: 2, name: 'Landscape' },
    { id: 3, name: 'Impressionism' },
    { id: 4, name: 'Photography' },
    { id: 5, name: 'Realism' },
  ];

  const [expandedGenres, setExpandedGenres] = useState({});

  const toggleGenre = (genreId) => {
    setExpandedGenres(prevState => ({
      ...prevState,
      [genreId]: !prevState[genreId]
    }));
  };

  return (
    <nav id="nav" className="position-absolute bottom-0 start-50 translate-middle-x" style={{ maxWidth: 'calc(100% - 120px)' }}>
      <ul className="nav nav-tabs flex-row">
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

        {/* Dropdown for genres */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" onClick={() => toggleGenre('genres')} aria-expanded={expandedGenres['genres'] ? 'true' : 'false'}>
            Genres
          </a>
          <ul className={`dropdown-menu ${expandedGenres['genres'] ? 'show' : ''}`}>
            {genres.map(genre => (
              <li key={genre.id}>
                <Link
                  to={`/genre/${genre.id}`}
                  className={currentPage === `/genre/${genre.id}` ? 'dropdown-item active' : 'dropdown-item'}
                  onClick={() => toggleGenre(genre.id)}
                >
                  {genre.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
