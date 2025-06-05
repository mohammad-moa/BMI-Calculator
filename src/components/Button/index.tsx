import { memo } from 'react'
// utils
import { makeClass } from '@utils/styles'
// locals
import { useClasses } from './useClasses'

export type ButtonVariant = 'text' | 'outlined' | 'contained'

export type ButtonColor = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'

export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  color?: ButtonColor
  size?: ButtonSize
  rootClassName?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = memo(
  ({
    children,
    variant = 'contained',
    color = 'primary',
    size = 'medium',
    rootClassName,
    startIcon,
    endIcon,
    ...props
  }) => {
    const className = useClasses()

    const renderStartIcon = () => {
      if (!startIcon) return null
      return startIcon
    }

    const renderEndIcon = () => {
      if (!endIcon) return null
      return endIcon
    }

    return (
      <div className={makeClass(rootClassName)}>
        <button
          className={makeClass(
            className.button({
              variant,
              color,
              size,
            }),
            props.className
          )}
          {...props}
        >
          {renderStartIcon()}
          <span>{children}</span>
          {renderEndIcon()}
        </button>
      </div>
    )
  }
)
