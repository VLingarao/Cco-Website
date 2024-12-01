import "./AboutInfo.css";
import Typing from 'react-typing-effect';


function AboutInfo() {
  return (
    <div className="aboutinfo-main-container">
    <div className="frist-div-container">
      <div className="secnd-div-container">
        <div className="third-heading-div">
          <div className="fourth-div-heading">
            <div className="content-div-heading-2">
              <h1>
                <h1>
                  <span className="name-heading-span">Cloud Career Overseas</span>
                 <h1 style={{fontSize:'25px',fontWeight:'bolder',color:'lightskyblue'}}>
                  <Typing
                      text={['4000K+ International Colleges ', 'Welcome to our site!','2000K+ Global Happy Students']}
                      speed={100}
                      eraseSpeed={50}
                      eraseDelay={1000}
                      typingDelay={500}
                    />
                 </h1>
                </h1>
              </h1>
            </div>
            <div className="content-div-heading-3">
              <p style={{color:"#8d8d8d",fontSize:"1.1rem"}}>
              For more than a decade, we have been in the business of educational 
              consultancy purely through our hard work and the goodwill bestowed upon us. 
              Providing an understandable passage to glory, academically speaking, has been the 
              strong forte of Cloud Career Overseas through study visas and other related stuff.
              </p>
            </div>
          </div>

          <div className="screen-button-div-main">
            <button className="screen-button-div-2">
              <a href="mailto:cloudcareeroverseas@gmail.com" target="_black">Contact Us</a>
            </button>
          </div>
        </div>
      </div>

      <div className="screen-pic-div-main">
        <div className="screen-pic-div-1">
          <div className="screen-scend-pic-div-1">
            <img src="https://res.cloudinary.com/dyxajo4x5/image/upload/v1732517692/about01_upupjm.png" />
          </div>
        </div>
        <div className="screen-scend-pic-div-2">
          <img src="https://res.cloudinary.com/dyxajo4x5/image/upload/v1732517830/about02_ubigjx.png" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default AboutInfo;