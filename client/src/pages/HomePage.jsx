import Hero from "../Components/Hero/Hero";
import BestCard from "../Components/BestCard/BestCard";
import About from "../Components/About/About";
import GetCon from "../Components/GetCon/GetCon";
import Courses from "../Components/Courses/Courses";
import Stats from "../Components/Stats/Stats";
import Footer from "../Components/Footer/Footer";
import Testimonial from "../Components/Testimonial/Testimonial";
import DownFooter from "../Components/DownFooter/DownFooter";
import Faq from "../Components/Faq/Faq";
import CountryClg from "../Components/CuntryClg/CountryClg";

function Home() {
    return (
        <div>
            <Hero />
            <BestCard/>
            <About/>
            <GetCon/>
            <CountryClg/>        
            <Courses/>
            <Stats/>
            <Faq/>
            <Testimonial/>
            <Footer/>
            <DownFooter/>
        </div>
    )
}

export default Home;