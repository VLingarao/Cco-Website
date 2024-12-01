import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo01 from '../../assets/icons/logo-cco01.png';
import Logo02 from '../../assets/icons/logo-cco02.png';
import NavTop from '../NavTop/Navtop';
import { HiOutlineMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 50) {
      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }
    }
    lastScrollY.current = currentScrollY;
  };

  const lastScrollY = React.useRef(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-main-container ${isVisible ? 'visible' : 'hidden'}`}>
      <NavTop/>
      <div className="navbar-container">
        <div className="logo-container" onClick={() => { navigate('/') }} style={{ cursor: "pointer" }}>
          <img className="img-item" src={Logo01} alt="Company Logo 1" />
          <img className="img-item01" src={Logo02} alt="Company Logo 2" />
        </div>
        <div className={`tab-container ${isMenuOpen ? 'open' : ''}`}>
          <Link className="nav-link" to="/" onClick={toggleMenu}>HOME</Link>
          <Link className="nav-link" to="/aboutpage" onClick={toggleMenu}>ABOUT US</Link>
          <Link className="nav-link" to="/countrypage" onClick={toggleMenu}>COUNTRIES</Link>
          <Link className="nav-link" to="/contactpage" onClick={toggleMenu}>CONTACT</Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <MdClose size={30} /> : <HiOutlineMenu size={30} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

