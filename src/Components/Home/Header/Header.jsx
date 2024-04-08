import {  NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>My Website</h2>
      <nav className="font-bold">
        <NavLink to="/">Home</NavLink>
        <NavLink className="ml-4" to="/about">
          About
        </NavLink>
        <NavLink className="ml-4" to="/contact">
          Contact
        </NavLink>
        <NavLink className="ml-4" to="/users">
          Users
        </NavLink>
        <NavLink className="ml-4" to="/posts">
          Posts
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
