import { useState } from 'react'

export const useData = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectValue, setSelectValue] = useState<number | string>('')

  /* -------------------------------- Handlers -------------------------------- */

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleSelectValue = (value: number | string) => {
    setSelectValue(value)
    setIsOpen(false)
  }

  return { isOpen, selectValue, handleToggle, handleSelectValue }
}
