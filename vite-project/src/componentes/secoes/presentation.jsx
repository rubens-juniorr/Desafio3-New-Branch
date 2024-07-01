import ButtonA from '../elementos/ButtonA'
import styles from './Presentation.module.css'
import {useState , useEffect} from 'react'
function Presentation(){

    const[text, setText] = useState('');
    const toRotate = ['Olá, eu sou Rubens Rodrigues!!', 'E sou Desenvolvedor Front End!!' ];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 150;
    const[delta, setDelta] = useState(100);

    useEffect(() =>{
        let tikt = setInterval(() =>{
            toType()
        }, delta)
        return()=>{clearInterval(tikt)}
    },[text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updateText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)
        
        setText(updateText);
        
        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setIsDeleting(period);
        }else if (isDeleting && updateText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1)
        }
    }

    return(
        <div className={styles.presentation} id='apresentacao'>
            <h1><strong>Bem-vindo ao meu Portfólio</strong></h1>
            <h2>{text}</h2>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras. <br/>
                Como Desenvolvedor, tenho o compromisso de resolver problemas<br/>
                complexos e trazer resultados excepcionais para os negócios.<br/>
            </p>
            <ButtonA link='https://www.linkedin.com/in/rubens-rodrigues-83822b269/' text="Saber mais"/>
        </div>
    ) 
}
export default Presentation