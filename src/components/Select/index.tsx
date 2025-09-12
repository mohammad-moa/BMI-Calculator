import { memo, useId } from 'react'
// components
import { ColorType, SizeType } from '@components/index.type'
// utils
import { makeClass } from '@utils/styles'
// locals
import { useClasses } from './useClasses'
import { useData } from './useData'

export type SelectVariant = 'outlined' | 'filled' | 'standard'

type OptionType = {
  label: string
  value: number | string
}

export type SelectProps = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'size' | 'onChange'
> & {
  options: OptionType[]
  label?: React.ReactNode
  isRequired?: boolean
  fullWidth?: boolean
  isError?: boolean
  helperText?: string
  onChange?: (value: number | string) => void
  variant?: SelectVariant
  color?: ColorType
  size?: SizeType
  rootClassName?: string
  contentClassName?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export const Select: React.FC<SelectProps> = memo(
  ({
    options,
    label,
    isRequired = false,
    fullWidth = false,
    isError = false,
    helperText,
    value,
    onChange,
    variant = 'outlined',
    color = 'secondary',
    size = 'medium',
    rootClassName,
    contentClassName,
    startIcon,
    endIcon,
    ...props
  }) => {
    const id = useId()
    const data = useData()
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

    const renderDropDown = () => {
      return (
        <div
          id={id}
          className={makeClass(className.dropDown(), props.className)}
          onClick={data.handleToggle}
        >
          <span className={className.selected()}>
            {value && !data.selectValue
              ? options.find((option) => option.value === value.toString())?.label
              : options.find((option) => option.value === data.selectValue.toString())?.label}
          </span>
          <span>^</span>
        </div>
      )
    }

    const renderMenuList = () => {
      if (!data.isOpen) return null
      return (
        <div className={makeClass(className.content(), className.menuList())}>
          {options.map((option) => (
            <p
              key={option.value}
              className={className.menuItem()}
              onClick={() => {
                data.handleSelectValue(option.value)
                onChange && onChange(option.value)
              }}
            >
              {option.label}
            </p>
          ))}
        </div>
      )
    }

    return (
      <div className={makeClass(className.root({ fullWidth }), rootClassName)}>
        {renderLabel()}
        <div
          className={makeClass(
            className.content({ isError, variant, color, size }),
            contentClassName
          )}
        >
          {renderStartIcon()}
          {renderDropDown()}
          {renderEndIcon()}
        </div>
        {renderMenuList()}
        {renderHelperText()}
      </div>
    )
  }
)
