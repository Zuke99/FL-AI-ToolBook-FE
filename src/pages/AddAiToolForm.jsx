import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import { BACKEND_URL } from "../utils/urls"; // Import the BACKEND_URL constant
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications
import UploadMediaForm from "./UploadMediaForm"; // Import the new UploadMediaForm component

function AddAiToolForm() {
  const [formData, setFormData] = useState({
    name: "",
    categories: [], // Changed to an array to hold multiple selected categories
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
    pricing: [], // Add pricing to the formData state
    details: {
      // Add details to the formData state
      introduction: "",
      usage: "",
      speciality: "",
    },
    contact: {
      // Add contact to the formData state
      mobile: "",
      email: "",
    },
    qaSection: [], // Add qaSection to the formData state
  });

  const [categories, setCategories] = useState([]); // State to hold categories
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track submission
  const [aiToolId, setAiToolId] = useState(null); // New state variable for AI Tool ID

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/categories/`);
        console.log("Fetched categories:", response.data); // Log the fetched categories
        setCategories(response.data); // Set the categories state with the fetched data
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []); // Fetch categories on component mount

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    console.log(value);
    console.log(`Category ID ${value} is ${checked ? "checked" : "unchecked"}`); // Log the checkbox state
    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        categories: [...prevData.categories, value], // Store category ID
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        categories: prevData.categories.filter(
          (categoryId) => categoryId !== value // Filter out the unchecked category ID
        ),
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      details: {
        ...prevData.details,
        [name]: value,
      },
    }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      contact: {
        ...prevData.contact,
        [name]: value,
      },
    }));
  };

  const handlePricingChange = (index, field, value) => {
    const updatedPricing = [...formData.pricing];
    if (!updatedPricing[index]) {
      updatedPricing[index] = {
        planName: "",
        features: [],
        isPopular: false,
      };
    }
    updatedPricing[index][field] = value;
    setFormData({ ...formData, pricing: updatedPricing });
  };

  const handleDeletePricingPlan = (index) => {
    const updatedPricing = formData.pricing.filter((_, i) => i !== index);
    setFormData({ ...formData, pricing: updatedPricing });
  };

  const handleQAChange = (index, field, value) => {
    const updatedQA = [...formData.qaSection];
    if (!updatedQA[index]) {
      updatedQA[index] = { question: "", answer: "" }; // Initialize if not present
    }
    updatedQA[index][field] = value;
    setFormData({ ...formData, qaSection: updatedQA });
  };

  const handleDeleteQA = (index) => {
    const updatedQA = formData.qaSection.filter((_, i) => i !== index);
    setFormData({ ...formData, qaSection: updatedQA });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Phone number validation (must be 10 digits)
    const phoneRegex = /^\d{10}$/;

    if (!emailRegex.test(formData.contact.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (
      !phoneRegex.test(formData.contact.mobile) ||
      formData.contact.mobile.length !== 10
    ) {
      toast.error("Please enter a valid mobile number (10 digits).");
      return;
    }

    try {
      // Construct the complete data structure to send to the API
      const completeData = {
        name: formData.name,
        rating: {
          score: 0,
          totalReviews: 0,
        },
        stats: {
          pageViews: 0,
          todayViews: 0,
          visits: 0,
          savedCount: 0,
        },
        categories: formData.categories, // This will now contain category IDs
        socialLinks: formData.socialLinks,
        features: {
          pros: formData.features.pros,
          cons: formData.features.cons,
        },
        reviews: [],
        metrics: {
          overallScore: 0,
          easeOfUse: 0,
          customerService: 0,
          features: 0,
          valueForMoney: 0,
        },
        pricing: formData.pricing,
        media: {
          photos: [],
          videos: [],
        },
        qaSection: formData.qaSection,
        status: {
          isClaimed: false,
          isPromoted: false,
        },
        url: formData.url,
        details: formData.details,
        contact: formData.contact,
      };

      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${BACKEND_URL}/aitool/`,
        completeData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data); // Log the entire response to check its structure

      if (response.status === 201) {
        // Access the AI Tool ID from the newAiTool object
        const aiToolId = response.data.newAiTool._id; // Correctly accessing the ID
        console.log("AI Tool ID:", aiToolId);

        setAiToolId(aiToolId); // Set the AI Tool ID in state

        setIsSubmitted(true);
      } else {
        toast.error(`Unexpected response: ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  const handleUploadComplete = () => {
    // Logic after upload is complete, e.g., redirect or show a success message
    window.location.reload(); // Refresh the page or redirect as needed
  };

  if (isSubmitted) {
    return (
      <>
        <Header />
        <ToastContainer />
        <UploadMediaForm
          onUploadComplete={handleUploadComplete}
          aiToolId={aiToolId}
        />
      </>
    );
  }

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="max-w-4xl mx-auto p-6 border border-gray-300 rounded-lg shadow-md">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Name and URL Fields */}
          <h3 className="font-bold col-span-2">Name & website url</h3>
          <input
            type="text"
            name="name"
            placeholder="Tool Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input
            type="text"
            name="url"
            placeholder="Tool URL"
            value={formData.url}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />

          {/* Categories */}
          <h3 className="font-bold col-span-2">Categories</h3>
          {categories.length > 0 ? ( // Check if categories are available
            categories.map((category) => (
              <label key={category._id} className="flex items-center">
                <input
                  type="checkbox"
                  value={category._id}
                  checked={formData.categories.includes(category._id)}
                  onChange={handleCategoryChange}
                  className="mr-2"
                />
                {category.parentCategory}
              </label>
            ))
          ) : (
            <p>No categories available.</p> // Message if no categories are fetched
          )}

          {/* Social Links */}
          <h3 className="font-bold col-span-2">Social Links</h3>
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

          {/* Features */}
          <h3 className="font-bold col-span-2">Features</h3>
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
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 col-span-2"
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
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 col-span-2"
          />

          {/* Contact Information */}
          <h3 className="font-bold col-span-2">Contact Information</h3>
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.contact.mobile}
            onChange={handleContactChange}
            maxLength={10}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.contact.email}
            onChange={handleContactChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />

          {/* Details */}
          <h3 className="font-bold col-span-2">Details</h3>
          <textarea
            name="introduction"
            placeholder="Introduction"
            value={formData.details.introduction}
            onChange={handleDetailsChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 col-span-2"
          />
          <textarea
            name="usage"
            placeholder="Usage"
            value={formData.details.usage}
            onChange={handleDetailsChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 col-span-2"
          />
          <textarea
            name="speciality"
            placeholder="Speciality"
            value={formData.details.speciality}
            onChange={handleDetailsChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 col-span-2"
          />

          {/* Pricing Plans */}
          <h3 className="font-bold col-span-2">Pricing Plans</h3>
          {formData.pricing.map((plan, index) => (
            <div key={index} className="space-y-2 col-span-2">
              <input
                type="text"
                placeholder="Plan Name"
                value={plan.planName}
                onChange={(e) =>
                  handlePricingChange(index, "planName", e.target.value)
                }
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder="Price"
                value={plan.price}
                onChange={(e) =>
                  handlePricingChange(
                    index,
                    "price",
                    parseFloat(e.target.value)
                  )
                }
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              />
              <textarea
                placeholder="Features (comma separated)"
                value={plan.features.join(", ")}
                onChange={(e) =>
                  handlePricingChange(
                    index,
                    "features",
                    e.target.value.split(",").map((feature) => feature.trim())
                  )
                }
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              />
              <label>
                <input
                  type="checkbox"
                  checked={plan.isPopular}
                  onChange={(e) =>
                    handlePricingChange(index, "isPopular", e.target.checked)
                  }
                />
                Popular Plan
              </label>
              <button
                type="button"
                onClick={() => handleDeletePricingPlan(index)}
                className="text-red-500 hover:underline"
              >
                Delete Plan
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              setFormData({
                ...formData,
                pricing: [
                  ...formData.pricing,
                  {
                    planName: "", // Initialize with default values
                    price: 0,
                    features: [],
                    isPopular: false,
                  },
                ],
              })
            }
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 col-span-2"
          >
            Add Pricing Plan
          </button>

          {/* Q&A Section */}
          <h3 className="font-bold col-span-2">Q&A Section</h3>
          {formData.qaSection.map((qa, index) => (
            <div key={index} className="space-y-2 col-span-2">
              <input
                type="text"
                placeholder="Question"
                value={qa.question}
                onChange={(e) =>
                  handleQAChange(index, "question", e.target.value)
                }
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              />
              <textarea
                placeholder="Answer"
                value={qa.answer}
                onChange={(e) =>
                  handleQAChange(index, "answer", e.target.value)
                }
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => handleDeleteQA(index)}
                className="text-red-500 hover:underline"
              >
                Delete Q&A
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              setFormData({
                ...formData,
                qaSection: [
                  ...formData.qaSection,
                  { question: "", answer: "" }, // Initialize with empty values
                ],
              })
            }
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 col-span-2"
          >
            Add Q&A
          </button>

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 col-span-2"
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
}

export default AddAiToolForm;
