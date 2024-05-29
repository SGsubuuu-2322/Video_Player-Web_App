import { useSelector } from "react-redux";

const VideoLists = () => {
  const videos = useSelector((state) => state.videos.videos);

  return (
    <div className="p-4">
      {videos.map((video) => (
        <div key={video.id} className="mb-4 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">{video.name}</h3>
          <div className="flex items-center">
            <img
              src={video.thumbnail}
              alt={`${video.name} thumbnail`}
              className="w-32 h-20 object-cover mr-4"
            />
            {/* <video controls src={video.url} className="w-full mt-2" /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoLists;
