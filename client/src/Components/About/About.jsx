import './About.css';
import { useNavigate } from 'react-router-dom';

function About() {

     const navigate = useNavigate(); 

    return (
        <div className='about-main-container'>
            <div className='about-container'>

                <div className='about-items-one'>

                    <div className='about-head'>
                        <h1>About Us</h1>
                    </div>

                    <div className='about-head-main'>
                        <h1>Welcome to Cloud Carrer  Overseas</h1>
                    </div>

                    <div className='about-disc-one'>
                        <p><strong>Cloud Career Overseas</strong> a name to reckon with is a rapidly growing overseas education
                            company, successfully charting plans for students who intend to study overseas, enabling
                            them to achieve their true potential and live their dreams.
                        </p>
                    </div>

                    <div className='about-disc-one'>
                        <p style={{marginTop:"2px"}}>Our trained professionals undertake multiple roles providing an end to end guidance to every
                            student walking through our door answering you are what? Where? How? And questions beyond,
                            beginning with providing a detailed overview of the courses available. preparing you for exams
                            that need to be taken for admission/visa purposes and the cost of studying in your chosen
                            country to assisting you with getting your admission and visa including preparation and
                            verification of visa documents and following up on visa applications with embassies, till the
                            time you are buckled up in your aeroplanes, and to top it all a best in class post-admission 
                            support.
                        </p>
                    </div>
                    
                    <button className='about-button' onClick={(()=>{navigate('/aboutpage')})}>Explore More</button>

                </div>

                <div>
                    <img src="https://res.cloudinary.com/dyxajo4x5/image/upload/v1732517113/studentwithbook_lcmnfb.png" alt="" className='about-rightimg'/>
                </div>
            </div>
        </div>
    )
}

export default About;