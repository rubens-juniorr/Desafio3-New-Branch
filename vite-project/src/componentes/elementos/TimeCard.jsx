import styles from "../elementos/TimeCard.module.css";
function TimeCard({ano, texto, lineLeft, ball,  lineRight}) {
  return (
    <div>
      <h3>{ano}</h3>

      <div className={styles.time}>
        <div className={lineLeft ? styles.line :  styles.lineNone}></div>
        <div className={ball ? styles.ball : styles.ballNone}></div>
        <div className={lineRight ? styles.line : styles.lineNone}></div>
      </div>

      <p>{texto}</p>
    </div>
  )
}
export default TimeCard