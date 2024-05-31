import { useEffect } from "react";
import SearchBar from "./SearchBar";
import UserDetails from "./UserDetails";
import { useDispatch, useSelector } from "react-redux";
import { userListAPI } from "../API/ApiCalls";
import UserLists from "./UserLists";

const UserInfo = () => {
  const dispatch = useDispatch();

  const userLists = useSelector((state) => state.allUsers.userList);

  useEffect(() => {
    dispatch(userListAPI());
  }, []);

  return (
    <div className="relative h-full w-full flex">
      <div className="h-full w-[75%] bg-[#72045530] flex justify-center items-center">
        <UserDetails />
      </div>
      <div className="h-full w-[25%] bg-[#72045560] flex flex-col gap-2 overflow-y-auto p-3">
        <SearchBar />
        <UserLists data={userLists} />
      </div>
    </div>
  );
};

export default UserInfo;
