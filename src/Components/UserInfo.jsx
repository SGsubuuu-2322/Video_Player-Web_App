import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import UserDetails from "./UserDetails";
import { useDispatch } from "react-redux";
import { userListAPI } from "../API/ApiCalls";
import UserLists from "./UserLists";

const UserInfo = () => {
  const dispatch = useDispatch();
  const [userLists, setUserLists] = useState(null);

  const refreshHandler = () => {
    dispatch(userListAPI()).then((res) => {
      setUserLists(res.payload);
    });
  };

  useEffect(() => {
    refreshHandler();
  }, []);

  return (
    <div className="relative h-full w-full flex">
      <div className="h-full w-[75%] bg-[#72045530] flex justify-center items-center">
        <UserDetails />
      </div>
      <div className="h-full w-[25%] bg-[#72045560] flex flex-col gap-2 overflow-y-auto">
        <div className="fixed top-20 right-0 w-1/4 pt-3 pb-3 bg-opacity-40 backdrop-filter backdrop-blur">
          <SearchBar />
        </div>
        {userLists ? <UserLists data={userLists} /> : <></>}
        {/* <UserLists data={userLists} /> */}
      </div>
    </div>
  );
};

export default UserInfo;
