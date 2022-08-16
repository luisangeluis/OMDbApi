import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg my-2  bg-dark">
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <p className="nav-link">Home</p>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">Series</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
