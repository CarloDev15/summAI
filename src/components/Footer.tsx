import styles from "../style";
import logo from "../assets/logo3.png";
import { footerLinks, socialMedia } from "../constants/arrays";

const Footer = () => (
  <section
    className={`bg-primary ${styles.boxWidth} ${styles.flexCenter} ${styles.paddingY} flex-col mx-auto`}
  >
    <div
      className={`${styles.flexCenter} md:flex-row flex-col mb-8 px-10 w-full`}
    >
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img src={logo} alt="summAI" className="w-[266px] object-contain" />
        <p
          className={`${styles.paragraph} mt-4 max-w-[312px] text-center md:text-left`}
        >
          The AI future is now.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-white duration-300 cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                  onClick={() => window.open(link.link)}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-8 px-10 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2024. Developed by{" "}
        <span className="font-bold">Carlo Caruso</span>
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
