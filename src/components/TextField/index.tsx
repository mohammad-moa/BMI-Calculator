import { memo } from 'react'
// components
import { ColorType, SizeType } from '@components/index.type'
// utils
import { makeClass } from '@utils/styles'
// locals
import { useClasses } from './useClasses'

export type TextFieldVariant = 'outlined' | 'filled' | 'standard'

export type TextFieldProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  label?: React.ReactNode
  isRequired?: boolean
  fullWidth?: boolean
  variant?: TextFieldVariant
  color?: ColorType
  size?: SizeType
  rootClassName?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export const TextField: React.FC<TextFieldProps> = memo(
  ({
    label,
    isRequired = false,
    fullWidth = false,
    variant = 'outlined',
    color = 'secondary',
    size = 'medium',
    rootClassName,
    startIcon,
    endIcon,
    ...props
  }) => {
    const className = useClasses()

    const renderLabel = () => {
      if (!label) return null
      return isRequired ? `${label} *` : label
    }

    const renderStartIcon = () => {
      if (!startIcon) return null
      return startIcon
    }

    const renderEndIcon = () => {
      if (!endIcon) return null
      return endIcon
    }

    return (
      <div>
        {renderLabel()}
        <div
          className={makeClass(className.root({ variant, color, size, fullWidth }), rootClassName)}
        >
          {renderStartIcon()}
          <input className={makeClass(className.textfield(), props.className)} {...props} />
          {renderEndIcon()}
        </div>
      </div>
    )
  }
)
