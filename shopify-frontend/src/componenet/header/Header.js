import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.css";
import { FaUserCircle , FaSearch} from "react-icons/fa";
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand header-logo" href="#">
            Shopify
          </a>





          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <div className="header-menu">
              <li class="nav-item">
                <a class="nav-link nav-menu" aria-current="page" href="#">
                  Store
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-menu" href="#">
                  Mac
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-menu" href="#">
                  iPad
                </a>
              </li><li class="nav-item">
                <a class="nav-link nav-menu" href="#">
                  iPhone
                </a>
              </li><li class="nav-item">
                <a class="nav-link nav-menu" href="#">
                  Watch
                </a>
              </li><li class="nav-item">
                <a class="nav-link nav-menu" href="#">
                  AirPods
                </a>
              </li>
            </div>
          </ul>
        </div>
        
        <div className="header-login-cart">
        <FaSearch 
        className="profile-button"
        size={18}
        color={"white"}
        />
        
        <Link to='/cart'>
        <AiOutlineShoppingCart
          className="cart-button"
          size={20}
          color={"white"}
        />
        </Link>
        <FaUserCircle 
         className="profile-button"
         color={"white"}
        />
     
</div>

      </nav>
    </div>
  );
}

export default Header;
