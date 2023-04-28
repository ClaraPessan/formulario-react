import styles from  './Input.module.scss'

export default function Input({placeholder, type, name, onChange, className}) {
    return <input placeholder={placeholder} type={type} name={name} onChange={onChange} className={styles.input + ' ' + className} />
}