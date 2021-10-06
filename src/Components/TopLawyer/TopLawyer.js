import style from "./TopLawyer.module.css";

const TopLawyer = () => {
  return (

    <div className={style.toplawyer_wrap}>
      <div className={style.image_wrap}>
        <img src={"/images/jeenay.png"} alt="...Loading" />
      </div>
      <div className={style.contents_wrap}>
        <h2>Why You Need the Top Lawyer</h2>
        <h3>
          "Our top lawyer is ready to loot your everything with the passage
          of time."
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim
          pariatur similique debitis vel nisi qui reprehenderit totam? Quod
          maiores consectetur adipisicing elit. Numquam enim
          pariatur similique debitis vel nisi qui reprehenderit totam? Quod
          maiores consectetur adipisicing elit. Numquam enim
          pariatur similique debitasdasda is vel nisi qui reprehenderit totam? Quod
          maiores consectetur adipisicing elit. Numquam enim
          pariatur similique debitis vel nisi qui reprehenderit totam? Quod
          maiores.
        </p>
        <span><strong>Chris Gayle </strong></span> 
        <span> - Advocate Supreme Court</span>
        <div className={style.sign_image}>
        <img src={"images/sign.png"} alt="Sign Loading" />
        </div>
        <div className={style.experience}>
            <span>15</span>
            <p>Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default TopLawyer;
