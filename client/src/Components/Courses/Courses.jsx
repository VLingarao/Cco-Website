import "./Courses.css";
import DS from "../../assets/courses/data-science.png";
import ML from "../../assets/courses/brain.png";
import AI from "../../assets/courses/artificial-intelligence.png";
import CS from "../../assets/courses/computer-science.png";
import CY from "../../assets/courses/hacker.png";
import MBA from "../../assets/courses/mba.png";
import PS from "../../assets/courses/pharmaceutical-science.png";
import HM from "../../assets/courses/hotel.png";
import DOC from "../../assets/courses/medicine.png";


function Courses() {
    const Data = [
        {
            id: 1,
            img: DS,
            name: "Data Science",
        },
        {
            id: 2,
            img: ML,
            name: "Machine Learning",
        },
        {
            id: 3,
            img: AI,
            name: "Artificial Intelligence",
        },
        {
            id: 4,
            img: CS,
            name: "Computer Science"
        },
        {
            id: 5,
            img: CY,
            name: "Cyber Security"
        },
        {
            id: 6,
            img: MBA,
            name: "MBA"
        },
        {
            id: 7,
            img: PS,
            name: "Pharmaceutical"
        },
        {
            id: 8,
            img: HM,
            name: "Hotel Management"
        },
        {
            id: 9,
            img: DOC,
            name: "Medicine Course"
        },
    ];

    return (
        <div className="Courses-main-container">
            <div className="main-head">
                <h1>Courses</h1>
            </div>
            <div className="course-list">
                {Data.map((item) => (
                    <div key={item.id} className="course-item">
                        <img src={item.img} alt={item.name} className="course-img" />
                        <p className="course-name">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;
