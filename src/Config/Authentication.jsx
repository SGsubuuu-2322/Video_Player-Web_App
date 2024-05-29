// import React from 'react'

import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthLayout from "../Layouts/AuthLayout";
// import { useSelector } from "react-redux";

const Authentication = () => {
  const Navigate = useNavigate();
  const [loggedIn, setloggedIn] = useState(false);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("loggedInUser"))) {
      setloggedIn(true);
    } else {
      setloggedIn(false);
      Navigate("/login");
    }
  }, [Navigate]);
  return (
    loggedIn && (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    )
  );
};

export default Authentication;
