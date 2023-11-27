import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.js";
import Jobs from "./pages/jobs.js";
import PostJob from "./pages/postJobs.js";
import About from "./pages/about.js";
import Login from "./pages/login.js";
import Error from "./components/errors.js";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState("false");
  return (
    <Router>
      <header className="headerWrapper">
        <div className="navWrapper">
          <ul className="navLinks">
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="link">
                Explore Jobs
              </Link>
            </li>
            <li>
              <Link to="/postJobs" className="link">
                Post Jobs
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="logoWrapper">
          <h3 className="logo">mukunda.</h3>
        </div>
        <div className="buttonWrapper">
          <button className="logInbtn">
            {!isAuth ? (
              <Link to="/login" className="link">
                log in
              </Link>
            ) : (
              "Tadiwa"
            )}
          </button>
          <button className="signupBtn">
            {!isAuth ? (
              <Link to="/login" className="link">
                Sign up
              </Link>
            ) : (
              <Link to="/logout" className="link">
                Sign out
              </Link>
            )}
          </button>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about Us" element={<About />} />
        <Route path="/postJobs" element={<PostJob />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <footer><code>mukundazw 2023</code></footer> */}
    </Router>
  );
}

export default App;
