import React from "react";
import { Link } from "react-router-dom";
import CartBtn from "../Button/cartBtn";


const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid py-2 navlist">
            <Link to="/" class="navbar-brand">
              S Store
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class="nav-item">
                  <Link to="/" class="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/product" class="nav-link">
                    Product
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/about" class="nav-link">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/contact" class="nav-link">
                    Contact
                  </Link>
                </li>
                <CartBtn/>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  );
};

export default Navbar;
