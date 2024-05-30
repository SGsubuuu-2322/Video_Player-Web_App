import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa6";
import { IoCloseCircleSharp } from "react-icons/io5";
import { bookmarkVideo, deleteVideo } from "../Store/Reducers/VideosReducer";

const VideoLists = () => {
  const videos = useSelector((state) => state.videos.videos);
  const dispatch = useDispatch();

  const handleToggleClick = (video) => {
    dispatch(bookmarkVideo(video.id));
  };
  const handleDeletionClick = (video) => {
    dispatch(deleteVideo(video.id));
    // console.log(videos);
  };

  return (
    <div className="p-4 mb-16">
      {videos.map((video) => (
        <div
          key={video.id}
          className="mb-4 p-4 bg-white rounded-lg shadow-md flex items-center justify-between shadow-lg shadow-[#720455]"
        >
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                src={video.thumbnail}
                alt={`${video.name} thumbnail`}
                className="w-28 h-16 object-cover mr-4"
              />
              {/* <video controls src={video.url} className="w-full mt-2" /> */}
            </div>
            <h3 className="text-lg font-semibold">{video.name}</h3>
          </div>
          <span className="flex gap-2">
            {video.isBookMarked ? (
              <FaHeart
                className="hover:text-red-500 active:scale-125 duration-200 text-red-500"
                onClick={() => handleToggleClick(video)}
              />
            ) : (
              <FaHeart
                className="hover:text-red-500 active:scale-125 duration-200"
                onClick={() => handleToggleClick(video)}
              />
            )}

            <IoCloseCircleSharp
              className="hover:text-red-500 active:scale-125 duration-200"
              onClick={() => handleDeletionClick(video)}
            />
          </span>
        </div>
      ))}
    </div>
  );
};

export default VideoLists;
