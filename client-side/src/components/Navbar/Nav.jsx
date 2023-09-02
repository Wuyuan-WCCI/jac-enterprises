import { Link } from "react-router-dom";
import style from "./Nav.module.css";
// import 


const Nav = () => {
  return (
    <header className={style.header}>
      <div>
        <nav>
        {/* <img src="client-side\src\assets\MysteryEducator.svg" width="60px" /> */}
          <ul> 
            Mystery Educator
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/devs">
            <li>Developers</li>
            </Link>
            <Link to="/jac-enterprise">
            <li>JAC Enterprise</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
