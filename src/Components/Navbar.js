import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/star-wars-logo.svg";
import { ReactComponent as Search } from "../assets/search.svg";
import { ReactComponent as List } from "../assets/list2.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__content">
        <Logo width={100} height={50} />
          <div className="navbar__items">
          <NavLink exact to="/" activeClassName="--selected" className="navbar__item">
            <List width={24} height={24} />
            <div className="navbar__item--description">Characters List</div>
          </NavLink>
          <NavLink exact to="/search" activeClassName="--selected" className="navbar__item">
            <Search width={24} height={24} />
            <div className="navbar__item--description">
              Search for characters
            </div>
          </NavLink>
        </div>
      </div>
      <div className="navbar__separator"></div>
    </div>
  );
};

export default Navbar;
