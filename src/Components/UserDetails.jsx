// import React from 'react'

import { useSelector } from "react-redux";

const UserDetails = () => {
  const loggedInUser = useSelector((state) => state.allUsers.loggedInUser);
  console.log(loggedInUser);

  return (
    <div className="translate-x-[-50px] translate-y-[-50px] w-1/3 bg-[#720455] rounded-2xl p-6 flex flex-col items-center gap-2">
      <img
        className="h-24"
        src="https://cdn-icons-png.flaticon.com/256/12083/12083921.png"
        alt="loading"
      />
      <div className="text-center text-white">
        <h1 className=" text-2xl font-bold">{loggedInUser.name}</h1>
        <p className="font-">{loggedInUser.email}</p>
      </div>
    </div>
  );
};

export default UserDetails;
