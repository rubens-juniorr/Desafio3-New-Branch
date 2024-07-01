import styles from './ButtonB.module.css'
function ButtonB({text, link}){
    return(

        <div>
            <a href={link}>
            <button className={styles.button}>{text}</button>
            </a>
        </div>
    )
}
export default ButtonB