import style from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={style.hero_wrap}>
      <div className={style.hero_image_wrap}>
        <img src={"/images/lawyer1.jpg"} alt="Loading" />
      </div>
      <div className={style.contents}>
        <h1>Meet all your investigative needs</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim
          pariatur similique debitis vel nisi qui reprehenderit totam? Quod
          maiores.
        </p>
        <div className={style.button_wrap}>
            <button type="button">Make An Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
