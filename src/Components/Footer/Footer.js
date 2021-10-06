import { Link } from "react-router-dom";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={style.footer_wrap}>
      <div className={style.footer_logo}>
        <img src={"/images/logo.png"} alt="Logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim
          pariatur similique debitis
          maiores.
        </p>
      </div>
      <hr/>
      <div className={style.ruler_wrap}>
        <span className={style.phone_icon}><i className="fa fa-phone fa-rotate-90"></i></span>
        <span className={style.phone_no}>+92-346-123456</span>
        <span className={style.email}>abc@gmail.com</span>
        <span className={style.icon}><i className="fab fa-facebook"></i></span>
        <span className={style.icon}><i class="fab fa-twitter"></i></span>
        <span className={style.icon}><i class="fab fa-instagram"></i></span>
        <span className={style.icon}><i class="fab fa-youtube"></i></span>
        <span><Link><button>Make An Appointment</button></Link></span>
      </div>
      <hr/>
      <p>
          2021 All Rights Reserved 
      </p>
    </div>
  );
};

export default Footer;
