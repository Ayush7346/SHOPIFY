import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.css";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand header-logo" href="#">
            Shopify
          </a>

          <form class="d-flex">
            <input
              class="form-control me-2 search-header search-header"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success search-button" type="submit">
              Search
            </button>
          </form>

         
          <div class="" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="header-menu">
                <li class="nav-item">
                  <a class="nav-link nav-menu" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-menu" href="#">
                    About Us
                  </a>
                </li>
              </div>
            </ul>
          </div>

          <AiOutlineShoppingCart
            className="cart-button"
            size={30}
            color={"white"}
          />

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle profile-header"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: "white" }}
            >
              Profile
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#">
                  login
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </li>
        </div>
      </nav>
    </div>
  );
}

export default Header;
