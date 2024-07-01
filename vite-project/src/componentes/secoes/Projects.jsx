
import Componentes from "../elementos/Componentes";

import styles from "./Projects.module.css";
function Projects() {
 
  return (
    <div className={styles.edcard} id='projeto'>
      <h1 className={styles.edcard}>Projetos</h1>
      <div></div>
      <div className={styles.container}>
        <Componentes
          imgsrc={"/portifolio.jpg"}
          title="Projeto 1"
          descricao=" Desenvolvimento de 
          sistema de consumo de API para o lançamento da 
          formação de tecnolodia."
          repo="https://portfolio-gamma-indol-79.vercel.app/"
        />
      </div>
      <div className={styles.container}>
        <Componentes
          imgsrc={"/APICEP.jpg"}
          title="Projeto 2"
          descricao=" Desenvolvimento de sistema de 
            consumo de API de CEP para fixar o conhecimento."
            repo="https://autocomplementoenderoco-main.netlify.app/"
        />
      </div>
      <div className={styles.container}>
        <Componentes
          imgsrc={"/ApiDNC.jpg"}
          title="Projeto 3"
          descricao=" Desenvolvimento de 
          sistema de consumo de API do projeto 2 da escola DNC."
          repo="https://rad-monstera-4888e6.netlify.app/"
        />
      </div>
      <div className={styles.container}>
        <Componentes
          imgsrc={"/desafio.jpg"}
          title="Projeto 4"
          descricao=" Projeto de criação de uma landpage em HTML, CSS e Bootstrap para fixação de conhecimento."
          repo="https://desafio1-six.vercel.app/"
        />
      </div>
    </div>
  );
}
export default Projects;
