import './App.css'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CountryPage from './pages/CountryPage';
import ContactPage from './pages/ContactPage';
import Scroll from './Components/Scroll/Scroll';
import Navbar from "./Components/Navbar/Navbar";
// import Navtop from "./Components/NavTop/Navtop";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Router>
      {/* <Navtop /> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/aboutpage' element={<AboutPage/>}/>
        <Route path='/countrypage' element={<CountryPage/>}/>
        <Route path='/contactpage' element={<ContactPage/>}/>
      </Routes>
      <Scroll/>
    </Router>
    </div>
  )
}

export default App