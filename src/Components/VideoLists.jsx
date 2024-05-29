import { useSelector } from "react-redux";

const VideoLists = () => {
  const videos = useSelector((state) => state.videos.videos);

  return (
    <div className="p-4 mb-16">
      {videos.map((video) => (
        <div
          key={video.id}
          className="mb-4 p-4 bg-white rounded-lg shadow-md flex items-center shadow-lg shadow-[#720455]"
        >
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
      ))}
    </div>
  );
};

export default VideoLists;
