import { useState, useEffect } from "react";
import './Testimonial.css'; 
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Testimonial() {
  const testimonials = [
    {
      image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732855850/Screenshot_2024-11-29_101717_edztwz.png',
      name: 'Naga Pravallika B',
      testimonial: 'This product has completely changed my life. I highly recommend it!',
    },
    {
      image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732856007/Screenshot_2024-11-29_100950_kgbwyj.png',
      name: 'Jayaprakash Ch',
      testimonial: 'Fantastic service! The customer support was excellent, and the product works as advertised.',
    },
    {
      image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732856135/Screenshot_2024-11-29_101104_xtze6d.png',
      name: 'Durga Bhavani Y',
      testimonial: 'Fantastic service! The customer support was excellent, and the product works as advertised.',
    },
    {
      image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732856238/Screenshot_2024-11-29_101014_hstkrq.png',
      name: 'Jaswanth S',
      testimonial: 'A must-have for anyone looking to improve their productivity. Worth every penny!',
    },
    {
     image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732856353/Screenshot_2024-11-29_101048_z5ifka.png',
     name: 'Shravani K',
     testimonial: 'This product has completely changed my life. I highly recommend it!',
   },
   {
     image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732856470/Screenshot_2024-11-29_101026_g2bfae.png',
     name: 'Satish Kumar Reddy V',
     testimonial: 'Fantastic service! The customer support was excellent, and the product works as advertised.',
   },
   {
     image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732856730/Screenshot_2024-11-29_101147_aibvva.png',
     name: 'Vaishnavi B',
     testimonial: 'A must-have for anyone looking to improve their productivity. Worth every penny!',
   },
   {
    image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732856981/Screenshot_2024-11-29_103906_iplygc.png',
    name: 'SriKanth M',
    testimonial: 'Fantastic service! The customer support was excellent, and the product works as advertised.',
  },
  {
    image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732856831/Screenshot_2024-11-29_101215_z9vwfz.png',
    name: 'Shameem Taj Sk',
    testimonial: 'A must-have for anyone looking to improve their productivity. Worth every penny!',
  },
  {
    image: 'https://res.cloudinary.com/dyxajo4x5/image/upload/v1732857132/Screenshot_2024-11-29_104140_uffxgj.png',
    name: 'Dushyanth S',
    testimonial: 'A must-have for anyone looking to improve their productivity. Worth every penny!',
  },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next testimonial (right)
  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Move to the previous testimonial (left)
  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate testimonials every 3 seconds
  useEffect(() => {
    const interval = setInterval(goNext, 3500);
    return () => clearInterval(interval); 
  });

  return (
    <div className="testimonial-section">
      <h1>Testimonials</h1>
      <div className="testimonial-slider">
        <div className="testimonial-container">
          <div className="testimonial-card">
            <div className="testimonial-img">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
              />
            </div>
            <div className="testimonial-info">
              <h3 className="testimonial-name">{testimonials[currentIndex].name}</h3>
              <p className="testimonial-text">{testimonials[currentIndex].testimonial}</p>
            </div>
          </div>
        </div>
        <div className="navigation">
          <FaChevronLeft className="nav-icon" onClick={goPrev} />
          <FaChevronRight className="nav-icon" onClick={goNext} />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="pagination">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`pagination-dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
