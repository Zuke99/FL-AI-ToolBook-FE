import React, { useState } from "react";
import Header from "../components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [activeTab, setActiveTab] = useState("login");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password };

    const response = await fetch("http://localhost:4000/api/auth/login", {
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

      // Handle successful login (e.g., redirect or update state)
    } else {
      console.error("Login failed");
      toast.error("Login failed. Please try again."); // Show error toast
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      fullName,
      email,
      password,
      phoneNumber,
      role: "67c4a7d1b6864c582cba271f", // Static role as per your request
    };

    const response = await fetch("http://localhost:4000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json(); // Parse the JSON response
      console.log("Sign up successful", data.message);
      toast.success("Sign up successful!"); // Show success toast
    } else {
      console.error("Sign up failed");
      toast.error("Sign up failed. Please try again."); // Show error toast
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
          <button
            onClick={() => setActiveTab("signup")}
            className={`tab ${
              activeTab === "signup" ? "active" : ""
            } p-2 mx-2 border rounded`}
          >
            Sign Up
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
        ) : (
          <form
            onSubmit={handleSignUpSubmit}
            className="bg-white p-5 shadow-lg rounded w-80"
          >
            <h2 className="text-lg font-bold mb-4">Sign Up</h2>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              required
              className="border p-2 mb-2 w-full rounded"
            />
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
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              required
              className="border p-2 mb-4 w-full rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default Login;
