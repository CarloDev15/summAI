import styles from "../style";
import arrowUp from "../assets/arrow-up.svg";
import { Link } from "react-router-dom";

const GetStarted = () => (
    <Link to="/demo" className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-300 hover:bg-blue-700 duration-500 text-blue-300 hover:text-blue-700 p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="">Get</span>
            </p>
            <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </div>
        
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="">Started</span>
        </p>
        </div>
    </Link>
);

export default GetStarted;