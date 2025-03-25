import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BACKEND_URL } from "../utils/urls";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [activeTab, setActiveTab] = useState("login");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password };

    const response = await fetch(`${BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json(); // Parse the JSON response
      console.log("Login successful", data.message);

      // Store the id, email, token, and refresh token in localStorage
      localStorage.setItem("id", data.response.id);
      localStorage.setItem("email", data.response.email);
      localStorage.setItem("token", data.response.token);
      localStorage.setItem("refreshToken", data.response.refreshToken);

      // Show success toast
      toast.success("Login successful!");

      // Redirect to AddAiToolForm after successful login
      navigate("/add-ai-tool");
    } else {
      console.error("Login failed");
      toast.error("Login failed. Please try again."); // Show error toast
    }
  };

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");

    // Show logout toast
    toast.success("Logged out successfully!");

    // Optionally, you can redirect or update the UI here
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="tabs mb-4">
          <button
            onClick={() => setActiveTab("login")}
            className={`tab ${
              activeTab === "login" ? "active" : ""
            } p-2 mx-2 border rounded`}
          >
            Login
          </button>
        </div>
        {activeTab === "login" ? (
          <form
            onSubmit={handleLoginSubmit}
            className="bg-white p-5 shadow-lg rounded w-80"
          >
            <h2 className="text-lg font-bold mb-4">Login</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="border p-2 mb-2 w-full rounded"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="border p-2 mb-4 w-full rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="bg-red-500 text-white p-2 rounded w-full mt-2"
            >
              Logout
            </button>
          </form>
        ) : null}
      </div>
    </>
  );
};

export default Login;
