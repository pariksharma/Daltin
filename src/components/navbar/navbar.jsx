import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './navbar.css'; // Your custom styles
import Button1 from "../buttons/Button1";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const navigate = useNavigate()

  const userLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('email')
    localStorage.removeItem('login')
    toast.success('Logged-out successfully')
    navigate('/')
  }

  return (
    <div className="container-fluid w-100 m-0 p-0">
      {/* Navbar */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <div className="container mb-0">
          <button className="bg-dark px-4 mx-4">
            <p className="p-0 m-0 text-light">Logo</p>
          </button>
          <Nav className="navbar-nav mx-auto m-0 p-0" navbarScroll>
            <Nav.Link href="/about-us" active= {"true"}>About Us</Nav.Link>
            <Nav.Link href="#action2">Destinations</Nav.Link>
            <Nav.Link href="#action3">Universities</Nav.Link>
            <Nav.Link href="#action4">Our Products</Nav.Link>
            <Nav.Link href="#action5">Our Services</Nav.Link>
          </Nav>

          {/* Search Icon and Search Box */}
          <div className="header-actions d-flex gap-3 m-0 p-0 ">
            <div
              className="search-container m-0 p-0"
              onMouseEnter={() => setSearchVisible(true)} // Show search box on hover
              onMouseLeave={() => setSearchVisible(false)} // Hide search box when hover ends
            >
              <i className="fas fa-search search-icon m-2 p-0"></i>
              <input
                type="text"
                placeholder="Search..."
                className={`search-input m-0 p-0 ${searchVisible ? 'visible' : ''}`}
                style={{minWidth: '150px'}}
              />
            </div>
          </div>
          <div className="d-flex gap-1 p-0 mb-0">
            <Button1 value= "Talk to experts" />
            <Button1 value="Logout" handleClick={userLogout} />
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
