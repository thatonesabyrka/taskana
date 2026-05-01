import styles from './button.module.css'

export function Button({ children, className = '', variant = 'primary', imageSrc, type = 'button', to, ...props }) {
  const variantClass = styles[`button--${variant}`]
  const Tag = to ? 'a' : 'button'

  return (
    <Tag
      className={`${styles.button} ${variantClass} ${className}`}
      {...(to ? { href: to } : { type })}
      {...props}
    >
      {imageSrc && <img src={imageSrc} alt="" width={24} height={24} />}
      {children}
    </Tag>
  )
}