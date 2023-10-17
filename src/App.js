import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Jobs from "./pages/jobs";
import About from "./pages/about";
import Error from "./pages/errors";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = { <About/> } />
        <Route path = "/jobs" element = { <Jobs/> } />
        <Route path = "*" element = { <Error/> } />
        </Routes>
    </Router>
  );
}

export default App;
