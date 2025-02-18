import React from 'react';
import './header/Header.css';
import { Link } from 'react-router-dom';
// import logo from './header/logo.png';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <div className='logo'>
              <img src={} alt="Teleflix Logo"  />
              </div> */}
            </li>
            <li className="nav-item" id='teleflix'>
              Teleflix AI
            </li>
          </ul>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  justify-content-end " id="navbarNav">
            <ul className="navbar-nav" >
              <li className="nav-item">
                <Link to={'/'}> Home</Link>
              </li>
              <li className="nav-item">
                Services
              </li>
              <li className="nav-item">
                Contact
              </li>
              <li className="nav-item">
                About Us
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

