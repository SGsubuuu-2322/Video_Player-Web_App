const UserLists = ({ data }) => {
  console.log(data);
  return (
    <div className="w-full flex flex-col p-4 pt-20 mb-16">
      {data.map((item, index) => (
        <div
          key={index}
          className="mb-4 p-4 bg-white rounded-lg flex items-center justify-between shadow-lg shadow-[#720455] cursor-pointer"
        >
          <div className="flex gap-2 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/256/12083/12083921.png"
              alt={`thumbnail`}
              className="w-10 h-10 object-cover mr-4"
            />
            <h1>{item.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserLists;
