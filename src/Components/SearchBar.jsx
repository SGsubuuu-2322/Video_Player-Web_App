import { MdPersonSearch } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className="w-full">
      <form className="flex justify-between bg-[#720455] p-2 ">
        <input
          type="text"
          name="searc-term"
          className="w-[85%] px-2 py-1 rounded-lg focus:outline-0"
        />
        <MdPersonSearch className="text-3xl hover:text-white active:scale-125 duration-200" />
      </form>
    </div>
  );
};

export default SearchBar;
