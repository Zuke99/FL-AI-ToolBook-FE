import React, { useState } from "react";
import { BACKEND_URL } from "../utils/urls"; // Import the BACKEND_URL constant
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications

function UploadMediaForm({ onUploadComplete, aiToolId }) {
  const [mediaFiles, setMediaFiles] = useState({
    images: [],
    videos: [],
  });
  const [loading, setLoading] = useState(false); // Loading state

  const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
  const MAX_VIDEO_SIZE = 10 * 1024 * 1024; // 10MB
  const VALID_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif"];
  const VALID_VIDEO_TYPES = ["video/mp4", "video/avi", "video/mov"];

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const fileArray = Array.from(files);
    const invalidFiles = fileArray.filter((file) => {
      const isImage = name === "images";
      const isValidType = isImage
        ? VALID_IMAGE_TYPES.includes(file.type)
        : VALID_VIDEO_TYPES.includes(file.type);
      const isValidSize = isImage
        ? file.size <= MAX_IMAGE_SIZE
        : file.size <= MAX_VIDEO_SIZE;
      return !isValidType || !isValidSize;
    });

    if (invalidFiles.length > 0) {
      const errorMessage = invalidFiles
        .map(
          (file) =>
            `${file.name} is invalid. Allowed types: ${
              name === "images"
                ? VALID_IMAGE_TYPES.join(", ")
                : VALID_VIDEO_TYPES.join(", ")
            }. Max size: ${name === "images" ? "5MB" : "10MB"}.`
        )
        .join("\n");
      toast.error(errorMessage);
      return; // Stop processing if there are invalid files
    }

    setMediaFiles((prev) => ({
      ...prev,
      [name]: fileArray,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mediaFiles.images.length === 0 && mediaFiles.videos.length === 0) {
      toast.error("Please select at least one image or video to upload.");
      return; // Stop submission if no files are selected
    }

    const formDataImages = new FormData();
    mediaFiles.images.forEach((file) => formDataImages.append("images", file));
    formDataImages.append("aitoolId", aiToolId); // Add aiToolId to form data for images

    setLoading(true); // Set loading to true when starting the upload

    try {
      const token = localStorage.getItem("token");

      // First API call for images
      const responseImages = await axios.post(
        `${BACKEND_URL}/cloudinary/upload`, // Use Cloudinary API for images
        formDataImages,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Check if the response status indicates success
      if (responseImages.status === 200) {
        console.log(responseImages.data);
        

        // Prepare to upload videos if any
        if (mediaFiles.videos.length > 0) {
          const formDataVideos = new FormData();
          mediaFiles.videos.forEach((file) =>
            formDataVideos.append("videos", file)
          );
          formDataVideos.append("aitoolId", aiToolId); // Add aiToolId to form data for videos

          // Second API call for videos
          const responseVideos = await axios.post(
            `${BACKEND_URL}/cloudinary/uploadvideo`, // Use Cloudinary API for videos
            formDataVideos,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
              },
            }
          );

          // Check if the response status indicates success
          if (responseVideos.status === 200) {
            console.log(responseVideos.data);
            toast.success("Videos uploaded successfully!");
            onUploadComplete(); // Call the callback to indicate upload is complete
          } else {
            toast.error("Error uploading videos. Please try again."); // Handle error for videos
          }
        } else {
          onUploadComplete(); // Call the callback if no videos to upload
        }
      } else {
        toast.error("Error uploading images. Please try again."); // Handle error for images
      }
    } catch (error) {
      console.error("Error uploading media:", error);
      toast.error("Error uploading media. Please try again."); // Show error toast
    } finally {
      setLoading(false); // Set loading to false after the upload process
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Upload Media</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Upload Images:</label>
            <input
              type="file"
              name="images"
              multiple
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              disabled={loading} // Disable input while loading
            />
          </div>
          <div>
            <label className="block mb-2">Upload Videos:</label>
            <input
              type="file"
              name="videos"
              multiple
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              disabled={loading} // Disable input while loading
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Uploading..." : "Upload Media"}{" "}
            {/* Show loading text */}
          </button>
        </form>
      </div>
    </>
  );
}

export default UploadMediaForm;
