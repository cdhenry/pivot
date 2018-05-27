import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Home</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor03">
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
