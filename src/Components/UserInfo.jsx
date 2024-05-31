import SearchBar from "./SearchBar";
import UserDetails from "./UserDetails";

const UserInfo = () => {
  return (
    <div className="relative h-full w-full flex">
      <div className="h-full w-[75%] bg-[#72045530] flex justify-center items-center">
        <UserDetails />
      </div>
      <div className="h-full w-[25%] bg-[#72045560] overflow-y-auto p-3">
        <SearchBar />
      </div>
    </div>
  );
};

export default UserInfo;
