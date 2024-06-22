import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      <style>
        {`
          .nav-link.active {
            position: relative;
          }
          
          .nav-link.active::after {
            content: "";
            display: block;
            position: absolute;
            bottom: -5px; 
            left: 0;
            width: 100%;
            height: 3px; 
            background-color: #FFFFFF; 
          }
        `}
      </style>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#2b004e" }}
      >
        <div className="container-fluid">
          <NavLink
            className="navbar-brand"
            to="/"
            style={{ color: "white", fontWeight: "bold" }}
          >
            NewsDa<span style={{ color: "#FC5607" }}>w</span>g
          </NavLink>
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
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0"
              style={{ color: "white" }}
            >
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  exact
                  to="/"
                  style={{ color: "white" }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/business"
                  style={{ color: "white" }}
                >
                  Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/entertainment"
                  style={{ color: "white" }}
                >
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/general"
                  style={{ color: "white" }}
                >
                  General
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/health"
                  style={{ color: "white" }}
                >
                  Health
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/science"
                  style={{ color: "white" }}
                >
                  Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/sports"
                  style={{ color: "white" }}
                >
                  Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/technology"
                  style={{ color: "white" }}
                >
                  Technology
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
