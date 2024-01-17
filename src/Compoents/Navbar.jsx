import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
       <img className="w-auto h-20" src={logo}alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-4">
          {/* <li><Link to='/'>Home</Link></li> */}
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-base font-bold text-orange-500" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/allbooks"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-base font-bold text-orange-500" : ""
            }
          >
           All Books
          </NavLink>
          <NavLink
            to="/borrowbooks"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-base font-bold text-orange-500" : ""
            }
          >
           Borrow Books
          </NavLink>
          <NavLink
            to="/addbooks"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-base font-bold text-orange-500" : ""
            }
          >
           Add Books
          </NavLink>
          <NavLink
            to="/signUp"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-base font-bold text-orange-500" : ""
            }
          >
           Registation
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
      <button><NavLink to="/signin">Login</NavLink></button>
      </div>
    </div>
  );
};

export default Navbar;
