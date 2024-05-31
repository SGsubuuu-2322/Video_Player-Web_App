import { useEffect, useState } from "react";
import AddVideo from "./AddVideo";
import Filter from "./Filter";
import VideoLists from "./VideoLists";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseCircle } from "react-icons/io5";
import { removeCurrentVideo } from "../Store/Reducers/VideosReducer";

const Home = () => {
  const dispatch = useDispatch();
  const [category, setcategory] = useState("All");
  const currentVideo = useSelector((state) => state.videos.currentVideo);

  const closeVideo = () => {
    dispatch(removeCurrentVideo());
  };

  // useEffect(() => {
  //   console.log(currentVideo);
  // }, [currentVideo]);

  return (
    <div className="relative h-full w-full flex">
      <div className="h-full w-[75%] bg-[#72045530] flex justify-center items-center">
        <AddVideo />
      </div>
      <div className="h-full w-[25%] bg-[#72045560] overflow-y-auto">
        <Filter func={(e) => setcategory(e.target.value)} />
        <VideoLists lists={category} />
      </div>
      {currentVideo ? (
        <div className="absolute z-[100] w-screen h-screen top-0 left-0 bg-[rgba(0,0,0,.6)] text-white flex items-center justify-center">
          <video
            controls
            src={currentVideo.url}
            className="w-1/2 mt-2 translate-x-[-50px] translate-y-[-50px]"
          />

          <IoCloseCircle
            onClick={closeVideo}
            className="text-3xl hover:text-red-500 active:scale-125 duration-200 absolute top-5 right-[24%]"
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
