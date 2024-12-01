import './Navtop.css';
import { TbMailFilled } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BiLogoTwitter } from "react-icons/bi";
import { PiYoutubeLogoFill } from "react-icons/pi";

function Navtop() {

    return (
        <div className="Navtop-main-container">
            <div className="Navtop-contact-info">
                <div className="contact-item">
                    <TbMailFilled size={18} />
                    <a href="mailto:cloudcareeroverseas@gmail.com"  style={{color:"white"}}>cloudcareeroverseas@gmail.com</a>
                </div>
                <div className="contact-item">
                    <FaPhone size={18} />
                    <a href='tel:+919000056466' style={{color:"white"}}>+91 9000056466</a>
                </div>
            </div>

            <div className="Navtop-social-media">
                <p>Follow Us:</p>
                <div className="social-icons">
                    <FaFacebookSquare size={18}/>
                    <RiInstagramFill size={18} />
                    <BiLogoTwitter size={18} />
                    <PiYoutubeLogoFill size={18} />
                </div>
            </div>
        </div>
    );
}

export default Navtop;
