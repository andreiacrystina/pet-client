import React from 'react';

import { Link, NavLink } from 'react-router-dom';

// import { Container } from './styles';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Pet</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/tutores">Tutores</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/bolsistas">Bolsistas</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/reunioes">Reuniões</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/projetos">Projetos</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
