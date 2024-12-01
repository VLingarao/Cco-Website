import './Hero.css';
import { useNavigate } from 'react-router-dom';

function Hero() {

    const currentBackground = "https://res.cloudinary.com/dyxajo4x5/image/upload/v1732517257/backgroun02_mis63b.jpg";
    const navigate = useNavigate();

    return (
        <div className='hero-main-container-group'>
        <div
            className="hero-main-container"
            style={{ backgroundImage: `url(${currentBackground})` }}>
            <div className="hero-container-items">
                <div className='hero-left-item'>
                    <h1 style={{ color: "white" }}>Study Abroad</h1>
                    <p style={{ color: "white" }}>Todays Competitive world wants a qualification which is being better and different from others.</p>
                    <div className="button-container">
                        <button className='button-one' onClick={()=>(navigate('/contactpage'))}>Apply Now</button>
                        <button className='button-two' onClick={()=>(navigate('/countrypage'))}>Learn More</button>
                    </div>
                </div>

                <div className='contact-card'>
                    <h1 className='contact-head'>Enquiry</h1>
                    <div className='contact-items'>
                        <input type="text" placeholder="Your Name" />
                        <input type="text" placeholder="Your Mobile Number" />
                        <input type="text" placeholder="Your Mail" />
                        <input type="text" placeholder="Select" />
                        {/* <label>Choose</label> */}
                        <button onClick={()=>(navigate('/contactpage'))}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Hero;
