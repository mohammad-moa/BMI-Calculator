import { memo } from 'react'
// components
import { ColorType, SizeType } from '@components/index.type'
// utils
import { makeClass } from '@utils/styles'
// locals
import { useClasses } from './useClasses'

export type TextFieldVariant = 'outlined' | 'filled' | 'standard'

export type TextFieldProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: React.ReactNode
    isRequired?: boolean
    fullWidth?: boolean
    isError?: boolean
    isMultiline?: boolean
    helperText?: string
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
    isError = false,
    isMultiline = false,
    helperText,
    variant = 'outlined',
    color = 'secondary',
    size = 'medium',
    rootClassName,
    startIcon,
    endIcon,
    rows = 4,
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

    const renderHelperText = () => {
      if (!helperText) return null
      return <p className={className.helperText({ isError })}>{helperText}</p>
    }

    const renderTextField = () => {
      if (!isMultiline) {
        return <input className={makeClass(className.textfield(), props.className)} {...props} />
      }
      return (
        <textarea
          rows={rows}
          className={makeClass(className.textfield(), props.className)}
          {...props}
        />
      )
    }

    return (
      <div>
        {renderLabel()}
        <div
          className={makeClass(
            className.root({ fullWidth, isError, variant, color, size }),
            rootClassName
          )}
        >
          {renderStartIcon()}
          {renderTextField()}
          {renderEndIcon()}
        </div>
        {renderHelperText()}
      </div>
    )
  }
)
