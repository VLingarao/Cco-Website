import AboutInfo from "../Components/AboutInfo/AboutInfo";
import AboutTwo from "../Components/AboutTwo/AboutTwo";
import Footer from "../Components/Footer/Footer";
import DownFooter from "../Components/DownFooter/DownFooter";
import Faq from "../Components/Faq/Faq";
import Stats from "../Components/Stats/Stats";


function AboutPage(){
    return(
        <div>
            <AboutInfo/>
            <AboutTwo/>
            <Faq/>
            <Stats/>
            <Footer/>
            <DownFooter/>  
        </div>
    )
}

export default AboutPage;