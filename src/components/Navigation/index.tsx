import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

const Navigation: FC = (): JSX.Element => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink exact to="/">
            My Account
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/users">Users</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
