import style from "./Practice.module.css";

const Practice = () => {
  return (
    <div className={style.practice_wrap}>
      <h2>Our Practice Area</h2>
      <div className={style.services}>
        <div className={style.familylaw}>
          <span><i className="fas fa-user"></i></span>
          <h3>Family Law</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            enim pariatur similique debitis vel nisi qui reprehenderit totam?
            Quod maiores.
          </p>
        </div>
        <div className={style.familylaw}>
        <span><i className="fas fa-suitcase"></i></span>
          <h3>Family Law</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            enim pariatur similique debitis vel nisi qui reprehenderit totam?
            Quod maiores.
          </p>
        </div>
        <div className={style.familylaw}>
        <span><i className="fas fa-car"></i></span>
          <h3>Family Law</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            enim pariatur similique debitis vel nisi qui reprehenderit totam?
            Quod maiores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Practice;
