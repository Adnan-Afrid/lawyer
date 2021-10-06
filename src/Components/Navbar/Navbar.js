import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
    return ( 
        <div className={style.navbar_wrapper}>
            <div className={style.logo}>
            <Link to="/"><img src={"/images/logo.png"} alt="Logo" /></Link>
            </div>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/"><li>About</li></Link>
                <Link to="/"><li>Login</li></Link>
            </ul>
            <span className={style.phone_icon}><i className="fa fa-phone fa-rotate-90"></i></span>
            <span className={style.phone_no}>+92-346-123456</span>
        </div>
     );
}
 
export default Navbar;