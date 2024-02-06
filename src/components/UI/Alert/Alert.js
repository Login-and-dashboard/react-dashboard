import styles from './Alert.module.css'

export const Alert = ({
  variant,
  onClose,
  text,
  button,
  title,
  className = '',
}) => (
  <div className={`${styles.alert} ${styles[variant]} ${className}`}>
    <div className={styles.close} onClick={onClose}></div>
    <div className={styles.title}>{title}</div>
    <div className={styles.text}>{text}</div>
    {button ? <div className={styles.button}>{button}</div> : null}
  </div>
)
