import React, { Component } from "react";
import logo from "../../Images/Logos/black_logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src={logo} width="40" height="40" alt={"logo"} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <HashLink to="/#">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="/#what-we-do">
                <a className="nav-link" href="#">
                  What we provide?
                </a>
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="/#contributors">
                <a className="nav-link" href="#">
                  Contributors
                </a>
              </HashLink>
            </li>
            <li className="nav-item">
              <Link to="/aboutus">
                <a className="nav-link" href="/aboutus">
                  About
                </a>
              </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right ml-md-auto ">
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                href="https://bit.ly/2NwWLhp"
              >
                Join
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sign in
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/login/student">
                  <a class="dropdown-item" href="/login/student">
                    Student
                  </a>
                </Link>
                <Link to="/login/professor">
                  <a class="dropdown-item" href="/login/professor">
                    Professor
                  </a>
                </Link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sign up
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/signup/student">
                  <a class="dropdown-item" href="/signup/student">
                    Student
                  </a>
                </Link>
                <Link to="/signup/professor">
                  <a class="dropdown-item" href="/signup/professor">
                    Professor
                  </a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="" />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
