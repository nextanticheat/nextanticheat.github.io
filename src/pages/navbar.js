import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md"
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css"

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

  return (
    <>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <MdFingerprint className="navbar-icon" />
                    Next Anti-Cheat
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
    )
}

export default Navbar;