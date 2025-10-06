import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {" "}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <a className=" font-bold text-xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to={"/readlist"}>
              <li>
                <a>ReadList</a>
              </li>
            </Link>
            <Link to={"/"}>
              {" "}
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link to={"/about"}>
              {" "}
              <li>
                <a>About</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end ">
          <a className="btn bg-green-400">Sign In</a>
          <a className="btn ml-2 bg-blue-400">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
