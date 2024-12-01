import './AboutTwo.css';

function AboutTwo() {
    return (
        <div className='abouttwo-main-container'>
            <div className='abouttwo-container'>
                <div>
                    <img src="https://res.cloudinary.com/dyxajo4x5/image/upload/v1732517880/about03_yqwhqz.png" alt="" className='abouttwo-rightimg' />
                </div>

                <div className='abouttwo-items-one'>
                    <div className='abouttwo-head-main'>
                        <h1 style={{color:"lightskyblue", fontFamily:"'Roboto', sans-serif"}}>10+ Years of Your Trust and Perseverance</h1>
                    </div>

                    <div className='abouttwo-disc-one'>
                        <p><strong>Cloud Career Overseas</strong> a name to reckon with is a rapidly growing overseas education
                            company, successfully charthing plans for students who intend to study overseas, enabling
                            them to achieve their true potential and live their dreams.
                        </p>
                    </div>

                    <div className='abouttwo-disc-one'>
                        <p style={{ marginTop: "2px" }}>Our trained professionals undertake multiple roles providing an end to end guidance to every
                            student walking through our door answering you are what? Where? How? And questions beyond,
                            beginning with providing a detailed overview of the courses available. preparing you for exams
                            that need to be taken for admission/visa purposes and the cost of studying in your chosen
                            country to assisting you with getting your admission and visa including preparation and
                            verification of visa documents and following up on visa applications with embassies, till the
                            time you are buckled up in your aeroplanes, and to top it all a best in class post-admission 
                            support.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTwo;