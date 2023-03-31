// import React ,{ useRef }from 'react'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"
import logo from '../../assets/images/logo.PNG';
import polylogo from '../../assets/images/polylogo.png'
const Navbar = () => {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <header>
    <divc className="head-logo">
    <img id="logo1"  src={polylogo} alt="" />
    <img id="logo2" src={logo} alt="" />
    </divc>
    {/* <h3>LOGO</h3> */}
    <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Annotation </a>
        <a href="/#">AI Services</a>
        <a href="/#">comment</a>
        <a href="/#">contact</a>

        <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
        </button>
    </nav>
    <button
        className="nav-btn"
        onClick={showNavbar}>
        <FaBars />
    </button>
</header>
  )
}

export default Navbar