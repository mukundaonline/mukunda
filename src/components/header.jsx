import React from 'react'
import "./App.css";

function Header() {
    return (
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
    )
}

export default Header