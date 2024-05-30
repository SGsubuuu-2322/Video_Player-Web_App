const Filter = ({ func }) => {
  return (
    <div className="p-2 w-full">
      <form className="w-full">
        <select
          onChange={func}
          name="filter"
          className="w-full px-2 py-3 shadow-lg shadow-[#414040] rounded-lg focus:outline-0 font-black text-lg text-[#720455]"
        >
          <option value="All">All</option>
          <option value="Bookmarked">Bookmarked</option>
        </select>
      </form>
    </div>
  );
};

export default Filter;
