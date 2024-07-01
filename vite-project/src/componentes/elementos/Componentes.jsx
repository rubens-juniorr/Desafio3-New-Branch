import ButtonB from "./ButtonB";
import styles from "./Componentes.module.css";

function Componentes({ imgsrc, title, descricao, repo }) {
  return (
    <div className={styles.card}>
      
      <img src={`${imgsrc}`} alt="ERRO" />
      <h3>{title}</h3>
      <p>{descricao}</p>
      
      <ButtonB text='Clique aqui' link={repo}/>
     
    </div>
  );
}
export default Componentes;
