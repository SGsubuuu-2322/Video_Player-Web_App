import { useState } from "react";
import AddVideo from "./AddVideo";
import Filter from "./Filter";
import VideoLists from "./VideoLists";

const Home = () => {
  const [category, setcategory] = useState("All");

  // useEffect(() => {
  //   console.log(category);
  // }, [category]);
  return (
    <div className="h-full w-full flex">
      <div className="h-full w-[75%] bg-[#72045530] flex justify-center items-center">
        <AddVideo />
      </div>
      <div className="h-full w-[25%] bg-[#72045560] overflow-y-auto">
        <Filter func={(e) => setcategory(e.target.value)} />
        <VideoLists lists={category} />
      </div>
    </div>
  );
};

export default Home;
