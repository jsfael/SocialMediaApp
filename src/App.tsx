import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main-page/main";
import { Login } from "./pages/login";
import { Navbar } from "./components/navbar";
import { CreatePost } from "./pages/create-post/create-post";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </Router>
      <a
        href="https://github.com/jsfael/SocialMediaApp.git"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-git-button"
      >
        <img src="/git-logo.png" alt="GitHub" />
      </a>
    </div>
  );
}

export default App;
