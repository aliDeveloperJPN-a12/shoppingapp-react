import React from "react";
import './Navbar.css'
function Navbar() {
  return (
    <div>
      {/* ------------------------------------------------------- */}
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <img id='sizeLogo' src='https://img.freepik.com/free-vector/branding-identity-corporate-logo-vector-design-template_460848-13992.jpg?size=626&ext=jpg&uid=R95782890&ga=GA1.2.1674998831.1678211563&semt=sph'/>
          <a className="navbar-brand" href="/">
            Fast-Learn.ir
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mlg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/LoginPage">
                  ورود / عضویت
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Profile">
                  پروفایل من
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  دوره ها
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                    دوره python
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    دوره c++
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    دوره php
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    دوره ruby
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    دوره GO
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    دوره c
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    دوره react
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                       دوره bootstrap 5
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex margin-form" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="جستجو دوره"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary margin" type="submit">
                جستجو
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* ------------------------------------------------------- */}
    </div>
  );
}

export default Navbar;
