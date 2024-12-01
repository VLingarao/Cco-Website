import "./Footer.css";
import Logo01 from "../../assets/icons/logo-cco01.png";
import Logo02 from "../../assets/icons/logo-cco02.png";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

function NewFooter() {
  return (
    <div className="footer-container">
      <div className="footer-column">
        <div className="footer-images">
          <img src={Logo01} alt="Logo 1" className="footer-logo-one" />
          <img src={Logo02} alt="Logo 2" className="footer-logo-two" />
        </div>
        <p className="footer-description">
          Thank you for giving us the opportunity to help you realise your
          dreams of studying abroad. Pursuing your studies abroad is not too
          different from being in India.
        </p>
      </div>

      <div className="footer-column">
        <div className="footer-address">
          <h1 className="footer-heading">Head Office Guntur</h1>
          <p className="footer-text">
          Flat No:B1, Door No:23, Venkatesam Complex, opp. UCO Bank, Brindavan Gardens, Guntur, Andhra Pradesh 522007
          </p>
        </div>
        <div className="footer-social-icons">
          <IoLogoLinkedin className="footer-social-icon" />
          <FaInstagramSquare className="footer-social-icon" />
          <FaTwitterSquare className="footer-social-icon" />
          <FaYoutube className="footer-social-icon" />
        </div>
      </div>

      <div className="footer-column">
        <div className="footer-address">
          <h1 className="footer-heading">Branch 1: Tirupati</h1>
          <p className="footer-text">
            D.No : 19-10-20/A6, AirBypass Road, Opp PLR 
            Convention Center,  1st Floor above Cothas Coffee, Tirupati- 522006
          </p>
        </div>
        <div className="footer-address">
          <h1 className="footer-heading">Branch 2: Hyderabad</h1>
          <p className="footer-text">
          1st Floor, SLN Heights, Pragathi Nagar Rd, opposite NEXA Showroom, Jawaharlal Nehru Technological University, Tulasi Nagar, Chenchu Guda, Kukatpally, Hyderabad, Telangana 500090
          </p>
        </div>
      </div>

      <div className="footer-column">
        <p className="footer-newsletter-heading">Newsletter</p>
        <div className="footer-newsletter-input">
          <input
            type="text"
            placeholder="Enter your email"
            className="footer-input"
          />
          <button className="footer-button">
            <GoArrowRight />
          </button>
        </div>
        <div className="footer-timings">
          <p className="footer-text" style={{color:"#07b2f5"}}>Opening Time</p>
          <p className="footer-text">Sun - Sat : 10:30 AM - 7:45 PM</p>
        </div>
      </div>
    </div>
  );
}

export default NewFooter;
