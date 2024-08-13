import React from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <ul className="flex mobile-screen:flex-col mobile-screen:items-center text-white [&>*]:py-1">
      <li>
        <Link to="/news">news</Link>
      </li>
      <li>
        <Link to="/articles">articles</Link>
      </li>
      <li>
        <Link to="/profile">profile</Link>
      </li>
      <li>
        <Link to="/login">login</Link>
      </li>
    </ul>
  );
};

export default MenuBar;
