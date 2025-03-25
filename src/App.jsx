import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import AddAiToolForm from "./pages/AddAiToolForm"; // Import the new page
import AddCategory from "./pages/AddCategory";
import Login from "./pages/Login";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* New route */}
        <Route path="/add-ai-tool" element={<AddAiToolForm />} />{" "}
        <Route path="/add-category" element={<AddCategory />} />{" "}
      </Routes>
    </Router>
  );
};

export default App;
