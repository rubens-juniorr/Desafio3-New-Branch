import TimeCard from "../elementos/TimeCard";
import styles from "../elementos/TimeCard.module.css";

 function Sobremim() {
  return (
    <section className={styles.sobremim} id='sobremim'>
      <h1>Sobre mim</h1>
      
      <div>
        <TimeCard
          ano = '2021'
          lineLeft = {false}
          ball = {true}
          lineRight = {true}
          texto = 'Iniciei o cruso Técnico de Informática no segundo grau com 17 anos. Entre as minhas matérias favoritas estavam programação e Hardware.'
        />

        <TimeCard
          ano = '2022'
          lineLeft = {true}
          ball = {true}
          lineRight = {true}
          texto = 'Conclui meu curso de Técnico de Informática com 18 anos e, Dei início a minha faculdade de análise e Desenvolvimento Software, na universidade Católica de Brasília.'
        />

        <TimeCard
          ano = '2023'
          lineLeft = {true}
          ball = {true}
          lineRight = {true}
          texto = 'Dei início ao curso de programação FullStack na Escola DNC e conclui curso de C# .NET na Udemy.'
        />

        <TimeCard
          ano = '2024'
          lineLeft = {true}
          ball = {true}
          lineRight = {false}
          texto = 'Concluí a faculdade de ADS e ainda estou cursando o curso de desenvolvedor FullStack.'
        />
      </div>
    </section>
  )
}
export default Sobremim