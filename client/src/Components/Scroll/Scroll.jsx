import { useState, useEffect } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import "./Scroll.css";

function Scroll() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <div className="scroll-button">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="button-tag">
          <IoIosArrowRoundUp size={25} />
        </button>
      </div>
    )
  );
}

export default Scroll;