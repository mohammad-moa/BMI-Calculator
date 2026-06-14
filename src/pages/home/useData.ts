import { useCallback, useState } from 'react'

// Todo: Update With Enum
type UnitSelected = {
  weight: 'kg' | 'lb'
  height: 'cm' | 'ft'
}

export const useData = () => {
  const [unitSelected, setUnitSelected] = useState<UnitSelected>({
    weight: 'kg',
    height: 'cm',
  })

  const handleUnitSelected = useCallback(
    <K extends keyof UnitSelected>(key: K, value: UnitSelected[K]) => {
      setUnitSelected((prev) => ({
        ...prev,
        [key]: value,
      }))
    },
    []
  )

  return { unitSelected, handleUnitSelected }
}
