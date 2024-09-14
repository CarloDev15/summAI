import { stats } from "../constants/arrays";
import styles from "../style";

const Stats = () => (
    <section id="stats" className={`${styles.flexCenter} flex-row flex-wrap justify-around sm:pb-20 py-6`}>
        {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-center items-center flex-col md:flex-row m-3`} >
            <h4 className="font-poppins font-semibold xs:text-[30.89px] md:text-[38.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.value}
            </h4>
            <p className="font-poppins font-normal xs:text-[12.45px] md:text-[20.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
            </p>
        </div>
        ))}
    </section>
);

export default Stats;