import { IoCallOutline } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import footer from "../data/footerContact.json";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import "../styles/footer.css";
import { NavLink } from "react-router";
export const Footer = () => {
  const iconMap = {
    call: <IoCallOutline />,
    mail: <MdMail />,
    location: <GrLocation />,
  };
  return (
    <footer>
      <div className="footer-contact">
        <ul className="contact-list">
          {footer.map((item) => (
            <li key={item.id} className="contact-item">
              <span className="contact-icon">{iconMap[item.icon]}</span>
              <span className="contact-text">{item.content}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-bottom">
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/perisetty-poornima-53019230b/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/poornima0230"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
        </div>
        <hr className="footer-line" />
        <div className="copyright">
          <p>@copyright 2026 Poornima Perisetty</p>
          <p>Built with 🤍 using react.</p>
        </div>
      </div>
    </footer>
  );
};
