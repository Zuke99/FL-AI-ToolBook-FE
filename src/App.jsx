import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import AddAiToolForm from "./pages/AddAiToolForm"; // Import the new page
import Login from "./pages/Login";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-ai-tool" element={<AddAiToolForm />} />{" "}
        <Route path="/login" element={<Login />} /> {/* New route */}
      </Routes>
    </Router>
  );
};

export default App;
