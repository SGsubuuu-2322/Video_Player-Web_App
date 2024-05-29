// import React from 'react'

import { NavLink } from "react-router-dom";

const PublicNav = () => {
  // console.log(userType);

  return (
    <nav className="w-full h-20 bg-secondary flex justify-between items-center px-5">
      <div className="image-container duration-200 hover:scale-110 w-30 h-10 rounded-md overflow-hidden">
        <img
          src="https://cdn.imgbin.com/4/19/17/imgbin-computer-icons-icon-design-video-player-design-Bz0EsxrM9J8cbKNr0Hw9XCQfK.jpg"
          alt="logo"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="nav-content w-48">
        <ul className="flex justify-between h-10">
          <NavLink
            to="/login"
            className={(e) =>
              `rounded-lg border-2 hover:border-white  border-black px-3  text-xl font-semibold text-black hover:text-white hover:underline hover:underline-offset-2 ${
                e.isActive && "border-white text-white shadow-lg "
              }`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={(e) =>
              `rounded-lg border-2 hover:border-white  border-black px-3  text-xl font-semibold text-black hover:text-white hover:underline hover:underline-offset-2 ${
                e.isActive && "border-white text-white shadow-lg "
              }`
            }
          >
            Register
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default PublicNav;
