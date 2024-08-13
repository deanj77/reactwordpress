import React, { useEffect } from "react";
import MenuBar from "./MenuBar";
import IconSite from "./IconSite";
import { Link, useLocation } from "react-router-dom";
import UserIcon from "../assets/images/profile.png";
import SearchIcon from "../assets/images/search.png";
import MenuIcon from "../assets/images/menu.png";
import SearchForm from "./SearchForm";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";

const Header = () => {
  const context = useContext(AppContext);
  const location = useLocation();
  function toggleMenu() {
    context.setIsOpen(!context.isOpen);
    context.setSearched(false);
  }

  function toggleSearch() {
    context.setIsOpen(false);
    context.setSearched(!context.searched);
  }

  useEffect(() => {
    context.setIsOpen(false);
  }, [location]);

  return (
    <div className="text-white">
      <div>
        <div className="h-16  bg-red-700 w-screen flex justify-between items-center text-xl px-5 ">
          <div className="flex ">
            <button onClick={toggleMenu}>
              <img className="w-6" src={MenuIcon} alt="menu" />
            </button>
            <div className="flex justify-center">
              <IconSite />
            </div>
          </div>
          <div className="">Article News</div>
          <div className="flex">
            <button onClick={toggleSearch}>
              <img className="w-3/5" src={SearchIcon} alt="search" />
            </button>
            <button
              onClick={() => {
                context.setLogedIn(!context.logedIn);
              }}
            >
              {context.logedIn ? (
                <Link to="/profile">
                  <img className="w-8" src={UserIcon} alt="user" />
                </Link>
              ) : (
                <Link to="/login">login</Link>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`overflow-hidden font-bold  bg-red-700 transition-[max-height] duration-1000    ${
          context.isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        {context.isOpen ? <MenuBar /> : ""}
      </div>
      <div
        className={`overflow-hidden font-bold w-screen bg-red-700 transition-[max-height] duration-1000 pb-2   ${
          context.searched ? "max-h-40" : "max-h-0"
        }`}
      >
        {context.searched ? <SearchForm /> : ""}
      </div>
    </div>
  );
};

export default Header;
