import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router";
import "../styles/header.css";
export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header>
      <ul className={showMenu ? "menu-mobile" : "menu-web"}>
        <li onClick={handleButtonToggle}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={handleButtonToggle}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li onClick={handleButtonToggle}>
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li onClick={handleButtonToggle}>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li onClick={handleButtonToggle}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="menu-icon" onClick={handleButtonToggle}>
        {showMenu ? <IoClose /> : <IoMenu />}
      </div>
    </header>
  );
};
