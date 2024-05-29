// import React from 'react'

import { Link, NavLink, useNavigate } from "react-router-dom";

const AuthNav = () => {
  const Navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("loggedInUser");
    Navigate("/login");
  };

  return (
    <nav className="w-full h-20  bg-secondary flex justify-between items-center px-5">
      <Link
        to="/"
        className="image-container hover:scale-110 w-30 h-10 rounded-md overflow-hidden"
      >
        <img
          src="https://cdn.imgbin.com/4/19/17/imgbin-computer-icons-icon-design-video-player-design-Bz0EsxrM9J8cbKNr0Hw9XCQfK.jpg"
          alt="logo"
          className="w-full h-full object-contain"
        />
      </Link>

      <div className="nav-content w-[25%]">
        <ul className="flex justify-between h-10">
          <NavLink
            to="/"
            className={(e) =>
              `rounded-lg border-2 hover:border-white  border-black px-3  text-xl font-semibold text-black hover:text-white hover:underline hover:underline-offset-2 ${
                e.isActive && "border-white text-white shadow-lg "
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/user/info"
            className={(e) =>
              `rounded-lg border-2 hover:border-white  border-black px-3  text-xl font-semibold text-black hover:text-white hover:underline hover:underline-offset-2 ${
                e.isActive && "border-white text-white shadow-lg "
              }`
            }
          >
            User-Info
          </NavLink>
          <button
            onClick={handleClick}
            className={
              "rounded-lg border-2 hover:border-white  border-black px-3  text-xl font-semibold text-black hover:text-white hover:underline hover:underline-offset-2 "
            }
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default AuthNav;
