import styles from './Text.module.css'

export const Text = ({
  variant,
  children,
  className = '',
}) =>
({
  title: <h1 className={`${styles.h1} ${className}`}>{children}</h1>,
  subtitle: <p className={`${styles.subtitle} ${className}`}>{children}</p>,
  header: <h3 className={className}>{children}</h3>,
  paragraph: <p className={className}>{children}</p>,
  'modal-header': <h3 className={`modal-header ${className}`}>{children}</h3>,
  'modal-text': <p className={`modal-text ${className}`}>{children}</p>,
}[variant])
