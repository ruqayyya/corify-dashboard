// Router
import { Link, NavLink } from "react-router-dom";

// Images
import logo from "../assets/images/alienaNewWeb_185x.png";

// Icons
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <nav className="navBar">
            <ul className="navList">
              <li className="navItem">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/all-cars">All Product</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/create-car">Add new product</NavLink>
              </li>
            </ul>
          </nav>
          <div className="userArea">
            <button className="logOut">
              LOG OUT
              <FaSignOutAlt />
            </button>
            <Link className="login" to="/login">
              <FaUserCircle />
              <span>LOG IN</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
