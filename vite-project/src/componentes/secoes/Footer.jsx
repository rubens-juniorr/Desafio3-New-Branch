import { FaGithub, FaLinkedinIn, FaFigma } from "react-icons/fa";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <h3>Meu contato:</h3>
        <p><span>61 99653-7048</span></p>
      </div>
      <div>
        <h3>Email:</h3>
        <p><span>rubensjunior_20@icloud.com</span></p>
      </div>
      <div>
        <ul>
          <li>
            <a href="https://github.com/rubens-juniorr/">
              <FaGithub size={32} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rubens-rodrigues-83822b269/">
              <FaLinkedinIn size={32} />
            </a>
          </li>
          <li>
            <a href="https://www.figma.com/design/O2j7uVVhXUnV6dadZc2MMw/Desafio-03%3A-Desenvolva-um-portf%C3%B3lio-com-React-hooks?node-id=0-1&t=JIeUew7m1ikAILza-0">
              <FaFigma size={32} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
