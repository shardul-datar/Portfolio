import {FaBars, FaTimes} from "react-icons/fa"
import { useRef } from "react";
import './navbar.css'
import { Link } from "react-router-dom";

function Navbar () {

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <header>
            <nav ref={navRef}>
                
                <Link to ="/home"> Home </Link>
                <Link to ="/projects"> Projects  </Link>
                <Link to ="/experience"> Experience  </Link>

                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );

}

export default Navbar;