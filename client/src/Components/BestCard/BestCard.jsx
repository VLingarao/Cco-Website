import Cap from '../../assets/icons/graduation.png';
import World from "../../assets/icons/world.png";
import Feasi from '../../assets/icons/feasibility.png';
import './BestCard.css';

function BestCard() {

  const PlaneBackground = "https://res.cloudinary.com/dyxajo4x5/image/upload/v1732517374/plane_bg_toxscx.jpg";

  return (
    <div style={{backgroundImage: `url(${PlaneBackground})`}} className='Bestcard-main-container'>
      <div className='bestcard-items-container'>
        <div className='bestcard-title'>
          <h1 style={{color:"white"}}>
            Best Platform to Learn Everything
          </h1>
        </div>

        <div className='bestcard-card-container'>
          <div className='stylecard card-color01'>
            <img src={Cap} alt="Graduation Cap" className='img-styles' />
            <p className='card-name'>CAREER COUNSELLING</p>
          </div>
          <div className='stylecard card-color02'>
            <img src={World} alt="World Icon" className='img-styles' />
            <p className='card-name'>GLOBAL LEARNING</p>
          </div>
          <div className='stylecard card-color03'>
            <img src={Feasi} alt="Feasibility Icon" className='img-styles' />
            <p className='card-name'>FEASIBILITY STUDIES</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestCard;
