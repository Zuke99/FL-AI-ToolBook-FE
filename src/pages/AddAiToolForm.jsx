import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import { BACKEND_URL } from "../utils/urls"; // Import the BACKEND_URL constant

function AddAiToolForm() {
  const [formData, setFormData] = useState({
    name: "",
    categories: "",
    subCategories: [], // Changed to an array to hold selected subcategories
    url: "",
    socialLinks: {
      facebook: "",
      linkedin: "",
      instagram: "",
      whatsapp: "",
      youtube: "",
    },
    features: {
      pros: [],
      cons: [],
    },
  });

  const [categories, setCategories] = useState([]); // State to hold categories
  const [subCategories, setSubCategories] = useState([]); // State to hold subcategories

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/categories/`); // Use BACKEND_URL
        setCategories(response.data); // Set the categories state with the fetched data
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []); // Fetch categories on component mount

  const handleCategoryChange = async (e) => {
    const selectedCategoryId = e.target.value;
    setFormData({ ...formData, categories: selectedCategoryId }); // Update selected category

    if (selectedCategoryId) {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/categories/${selectedCategoryId}` // Use BACKEND_URL
        );
        setSubCategories(response.data.subCategories); // Set the subcategories based on selected category
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    } else {
      setSubCategories([]); // Clear subcategories if no category is selected
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      // Add subcategory if checked
      setFormData((prevData) => ({
        ...prevData,
        subCategories: [...prevData.subCategories, value],
      }));
    } else {
      // Remove subcategory if unchecked
      setFormData((prevData) => ({
        ...prevData,
        subCategories: prevData.subCategories.filter((sub) => sub !== value),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Construct the complete data structure to send to the API
      const completeData = {
        name: formData.name,
        rating: {
          score: 0, // Default value or you can set it based on your logic
          totalReviews: 0, // Default value or you can set it based on your logic
        },
        stats: {
          pageViews: 0, // Default value or you can set it based on your logic
          todayViews: 0, // Default value or you can set it based on your logic
          visits: 0, // Default value or you can set it based on your logic
          savedCount: 0, // Default value or you can set it based on your logic
        },
        categories: formData.categories,
        socialLinks: formData.socialLinks,
        features: {
          pros: formData.features.pros,
          cons: formData.features.cons,
        },
        reviews: [], // Default empty array
        metrics: {
          overallScore: 0, // Default value or you can set it based on your logic
          easeOfUse: 0, // Default value or you can set it based on your logic
          customerService: 0, // Default value or you can set it based on your logic
          features: 0, // Default value or you can set it based on your logic
          valueForMoney: 0, // Default value or you can set it based on your logic
        },
        pricing: [], // Default empty array
        media: {
          photos: [], // Default empty array
          videos: [], // Default empty array
        },
        qaSection: [], // Default empty array
        status: {
          isClaimed: false, // Default value
          isPromoted: false, // Default value
        },
        url: formData.url,
      };

      // Retrieve the token from local storage
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${BACKEND_URL}/aitool/`, // Use BACKEND_URL
        completeData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          <select
            name="categories"
            onChange={handleCategoryChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.parentCategory}
              </option>
            ))}
          </select>
          <div>
            <h3 className="font-bold">Sub Categories</h3>
            {subCategories.map((subCategory, index) => (
              <div key={index}>
                <label>
                  <input
                    type="checkbox"
                    value={subCategory}
                    onChange={handleSubCategoryChange}
                  />
                  {subCategory}
                </label>
              </div>
            ))}
          </div>
          <input
            type="text"
            name="url"
            placeholder="URL"
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input
            type="text"
            name="socialLinks.facebook"
            placeholder="Facebook Link"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input
            type="text"
            name="socialLinks.linkedin"
            placeholder="LinkedIn Link"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input
            type="text"
            name="socialLinks.instagram"
            placeholder="Instagram Link"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input
            type="text"
            name="socialLinks.whatsapp"
            placeholder="WhatsApp Link"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input
            type="text"
            name="socialLinks.youtube"
            placeholder="YouTube Link"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          <textarea
            name="features.pros"
            placeholder="Pros (comma separated)"
            onChange={(e) =>
              setFormData({
                ...formData,
                features: {
                  ...formData.features,
                  pros: e.target.value.split(","),
                },
              })
            }
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          <textarea
            name="features.cons"
            placeholder="Cons (comma separated)"
            onChange={(e) =>
              setFormData({
                ...formData,
                features: {
                  ...formData.features,
                  cons: e.target.value.split(","),
                },
              })
            }
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddAiToolForm;
