import Process from "../Components/Process/Process";
import CountryInfo from "../Components/CountryInfo/CountryInfo";
import DownFooter from "../Components/DownFooter/DownFooter";
import Testimonial from "../Components/Testimonial/Testimonial";
import Faq from "../Components/Faq/Faq";
import Footer from "../Components/Footer/Footer";

function CountryPage(){
    return(
        <div>
            <Process/>
            <CountryInfo/>
            <Faq/>
            <Testimonial/>
            <Footer/>
            <DownFooter/>
        </div>
    )
}

export default CountryPage;