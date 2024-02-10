import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
import { Nav } from 'react-bootstrap';
// import Login from './Login'
function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
//   const currentPage = useLocation().pathname;

//   // Function to handle login/logout
//   const handleLogin = () => {
//     // Perform login logic here
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     // Perform logout logic here
//     setIsLoggedIn(false);
//   };

  return (
    <Nav
      defaultActiveKey="./Home"
      as="ul"
      className="justify-content-center"
    >
      <Nav.Item as="li">
        <Nav.Link href="./Home">Home</Nav.Link>
      </Nav.Item>
      {/* <Nav.Item as="li">
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Item> */}
    </Nav>
  );
};

export default Navbar;
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="collapse navbar-collapse" id="navbarNav">
    //     <ul className="navbar-nav mr-auto">
    //       <li className="nav-item">
    //         <Link
    //           to="/Home"
    //           className={currentPage === "/Home" ? "nav-link active" : "nav-link"}
    //         >
    //           Home
    //         </Link>
    //       </li>
    //     </ul>
    //     {/* Conditionally render the search bar based on login state */}
    //     {isLoggedIn && (
    //       <form className="form-inline my-2 my-lg-0">
    //         <input
    //           className="form-control mr-sm-2"
    //           type="search"
    //           placeholder="Search"
    //           aria-label="Search"
    //         />
    //         <button
    //                      className="btn btn-outline-success my-2 my-sm-0"
    //                      type="submit"
    //                    >
    //                      Search
    //                    </button>
    //                  </form>
    //                )}
    //              </div>
    //            </nav>
        //      );
        //    }
           
        //    export default Navbar;
           
