import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.jsx";
import Jobs from "./pages/jobs.jsx";
import PostJob from "./pages/postJobs.jsx";
import About from "./pages/about.jsx";
import Login from "./pages/login.jsx";
import Error from "./components/errors.jsx";
import { useState } from "react";
import Header from "./components/header.jsx";

function App() {
  const [isAuth, setIsAuth] = useState("false");
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about Us" element={<About />} />
        <Route path="/postJobs" element={<PostJob />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
