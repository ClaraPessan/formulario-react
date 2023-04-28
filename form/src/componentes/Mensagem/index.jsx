import styles from './Mensagem.module.scss'

export default function Mensagem() {
    return (
        <div className={styles.mensagem}>
            <h1>Learn to code by watching others</h1>
            <p>
                See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
                but understanding how developers think is invaluable. 
            </p> 
        </div>
    )
}