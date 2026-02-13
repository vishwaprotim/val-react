import './Button.css'

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) {
  const cls = ['btn', `btn-${variant}`, `btn-${size}`, className].filter(Boolean).join(' ')

  return (
    <button className={cls} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
