// Icons
import {
  FaTwitter,
  FaFacebookF,
  FaRss,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <p className="copyright">©Aliantion {new Date().getFullYear()}</p>
          <ul className="socialList">
            <li className="socialItem">Follow us</li>
            <li className="socialItem">
              <FaTwitter />
            </li>
            <li className="socialItem">
              <FaFacebookF />
            </li>
            <li className="socialItem">
              <FaRss />
            </li>
            <li className="socialItem">
              <FaInstagram />
            </li>
            <li className="socialItem">
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
