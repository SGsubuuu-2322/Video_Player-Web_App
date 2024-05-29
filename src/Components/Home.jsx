import AddVideo from "./AddVideo";
import VideoLists from "./VideoLists";

const Home = () => {
  return (
    <div className="h-full w-full flex">
      <div className="h-full w-[75%] bg-[#72045530] flex justify-center items-center">
        <AddVideo />
      </div>
      <div className="h-full w-[25%] bg-[#72045560] overflow-y-auto">
        <VideoLists />
      </div>
    </div>
  );
};

export default Home;
