import { memo } from 'react'
// components
import { ColorType, SizeType } from '@components/index.type'
// utils
import { makeClass } from '@utils/styles'
// locals
import { useClasses } from './useClasses'

export type ButtonVariant = 'text' | 'outlined' | 'contained'

export type ButtonColor = ColorType

export type ButtonSize = SizeType

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
