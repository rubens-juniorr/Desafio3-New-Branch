import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.alinhar}>
        <ul>
          <li><Nav.Link href='#projeto'>Projetos</Nav.Link></li>
          <li><Nav.Link href='#apresentacao'>Tecnologias</Nav.Link></li>
          <li><Nav.Link href='#sobremim'>Sobre mim</Nav.Link></li>
          
        </ul>
      </div>
      <div className={styles.Container}>
        <ul>
          <li>
            <a href="https://github.com/rubens-juniorr/"><FaGithub size={20} /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rubens-rodrigues-83822b269/">
              <FaLinkedinIn size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default NavBar;
