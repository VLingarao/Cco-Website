import './DownFooter.css';
import { Link } from "react-router-dom";

function DownFooter() {
  return (
    <div className="footer-end" style={{ backgroundColor: '#2eb6ea' }}>
      <div className="footer-content">
        <p className="footer-text">
          Copyright © 2024 by Cloud Career Overseas.
        </p>

        <Link to='/policy'>
          <p className='footer-policy'>Privacy Policy</p>
        </Link>
      </div>
    </div>
  );
}

export default DownFooter;