import { useNavigate } from "react-router-dom";
import './GetCon.css';

function GetCon() {

    const navigate = useNavigate()

    return (
        <div className='getcon-main-container'>
            <div className='getcon-container'>

                <div className='getcon-items-one'>

                    <div className='getcon-head'>
                        <h1>Get Consultation</h1>
                        {/* <div className="getcon-line"></div> */}
                    </div>

                    <div className='getcon-head-main'>
                        <h1>STUDY OVERSEAS</h1>
                    </div>

                    <div className='getcon-disc-one'>
                        <p>A wide range of opportunities is openings up for indian
                            students to study abroad. An overseas degree not only 
                            fetches an additional mileage to the education but also gives
                            international exposure.
                        </p>
                    </div>

                    <div className='getcon-disc-one'>
                        <p style={{marginTop:"2px"}}> An additional privilege to the students is the affordability of 
                            fee which is now possible because of the easy availability of 
                            students loans. These trends have given rise to the high
                            demand of educational consultants that can act as guides
                            for students who want to study in countries such as 
                            Australia, UK, USA and Canada.
                        </p>
                    </div>

                    <div className='getcon-disc-one'>
                        <p style={{marginTop:"2px"}}> <strong>Cloud Career Overseas </strong> is formed with an aim of facilitating
                        students by providing them with better quality consultation in
                        regards to higher students.
                        </p>
                    </div>
                    
                    <button className='getcon-button'>Career with Us</button>

                </div>

                <div>
                    <div className="country-card">
                        <img src="https://res.cloudinary.com/dyxajo4x5/image/upload/v1732516727/Untitled-4_aus_tjdfas.jpg" alt="Australia" className="country-card-style" onClick={()=>(navigate('/countrypage'))}/>
                        <img src="https://res.cloudinary.com/dyxajo4x5/image/upload/v1732516862/Untitled-4_UK_ip23xt.jpg" alt="UK" className="country-card-style"/>
                        <img src="https://res.cloudinary.com/dyxajo4x5/image/upload/v1732516899/Untitled-4_USA_bpixzq.jpg" alt="USA" className="country-card-style"/>
                        <img src="https://res.cloudinary.com/dyxajo4x5/image/upload/v1732516821/Untitled-4_canada_mesdtg.jpg" alt="Canada" className="country-card-style"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetCon;