import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVideo, setError, setStatus } from "../Store/Reducers/VideosReducer";

const AddVideo = () => {
  const dispatch = useDispatch();
  const [videoFile, setVideoFile] = useState(null);
  const [videoName, setVideoName] = useState("");
  const uploadStatus = useSelector((state) => state.videos.status);
  const error = useSelector((state) => state.videos.error);

  const generateThumbnail = (videoFile) => {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      video.addEventListener("loadeddata", () => {
        video.currentTime = 2; // Capture the frame at 2 seconds (or any other time)
      });

      video.addEventListener("seeked", () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const thumbnailURL = canvas.toDataURL("image/png");
        resolve(thumbnailURL);
      });

      video.addEventListener("error", (err) => {
        reject(err);
      });

      video.src = URL.createObjectURL(videoFile);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (videoFile && videoName) {
      const videoURL = URL.createObjectURL(videoFile);
      dispatch(setStatus("loading"));
      try {
        const thumbnailURL = await generateThumbnail(videoFile);
        const newVideo = {
          id: Date.now(),
          name: videoName,
          url: videoURL,
          thumbnail: thumbnailURL,
          isBookMarked: false,
        };
        dispatch(addVideo(newVideo));
        setVideoFile(null);
        setVideoName("");
        dispatch(setStatus("succeeded"));
      } catch (err) {
        dispatch(setError("Failed to add video"));
        dispatch(setStatus("failed"));
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-1/2 p-4 bg-[#72045516] rounded-lg shadow-xl shadow-[#720455] translate-x-[-50px] translate-y-[-50px]"
      >
        <div className="mb-4">
          <label className="block text-gray-700">Video Name</label>
          <input
            type="text"
            value={videoName}
            onChange={(e) => setVideoName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Video File</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="p-1 bg-[#720455] border-2 border-[#720455] active:bg-white active:text-[#720455] active:scale-105 duration-300 text-white rounded"
          disabled={uploadStatus === "loading"}
        >
          {uploadStatus === "loading" ? "Uploading..." : "Add Video"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </>
  );
};

export default AddVideo;
