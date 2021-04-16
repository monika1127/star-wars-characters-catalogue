import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCharactersList } from "../Redux/characters/actions";

import { ReactComponent as Logo } from "../assets/star-wars-logo.svg";
import { ReactComponent as Search } from "../assets/search.svg";
import { ReactComponent as List } from "../assets/list2.svg";

const Navbar = () => {

  const [activeLink, setActiveLink]= useState('home')

  const newPageLoading = (link)=> {
    if(link===activeLink) return
    setActiveLink(link)
    dispatch(clearCharactersList())
  }

  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="navbar__content">
        <Logo width={100} height={50} />
        <div className="navbar__items">
          <Link
            to="/"
            className={`navbar__item ${activeLink==="home" && '--selected'}`}
            onClick={() => newPageLoading("home")}
          >
            <List width={24} height={24} />
            <div className="navbar__item--description">Characters List</div>
          </Link>
          <Link
            exact
            to="/search"
            className={`navbar__item ${activeLink==="search" && '--selected'}`}
            onClick={() =>  newPageLoading("search")}
          >
            <Search width={24} height={24} />
            <div className="navbar__item--description">
              Search for characters
            </div>
          </Link>
        </div>
      </div>
      <div className="navbar__separator"></div>
    </div>
  )
  }

export default Navbar;
