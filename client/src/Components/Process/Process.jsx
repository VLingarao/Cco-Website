import "./Process.css";
import { BiWorld } from "react-icons/bi";
import { FaFilePen } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { MdSupervisorAccount } from "react-icons/md";

function Process() {
    return (
        <div className="process-main-container">
            <div className="process-container">
            <div className="process-step">
                <BiWorld size={60}/>
                <p>CAREER COUNSELING</p>
            </div>
            <div className="process-step">
                <FaFilePen size={60}/>
                <p>APPLICATION PROCESS</p>
            </div>
            <div className="process-step">
                <FaGraduationCap size={60}/>
                <p>COURSE SELECTION</p>
            </div>
            <div className="process-step">
                <MdSupervisorAccount size={60}/>
                <p>SUPERVISOR CONSULTATION</p>
            </div>
        </div>

        </div>
    );
}

export default Process;
