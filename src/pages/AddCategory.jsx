import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import { BACKEND_URL } from "../utils/urls";

const AddCategory = () => {
  const [parentCategory, setParentCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${BACKEND_URL}/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ parentCategory }),
      });

      if (response.ok) {
        toast.success("Category added successfully!");
        setParentCategory("");
      } else {
        toast.error("Failed to add category");
      }
    } catch (error) {
      console.error("Error adding category:", error);
      toast.error("Error adding category. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-md mt-10">
        <h1 className="text-2xl font-bold mb-4 text-center">Add Category</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={parentCategory}
            onChange={(e) => setParentCategory(e.target.value)}
            placeholder="Enter parent category"
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Category
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCategory;
