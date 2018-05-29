import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Home</a>
      <div id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/careers">All Careers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/comparisons/new">Compare Careers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/comparisons">Past Comparisons</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
