import { useCallback, useState } from 'react'

// Todo: Update With Enum
export type Weight = 'kg' | 'lb'
export type Height = 'cm' | 'ft'

export type Units = {
  weight: Weight
  height: Height
}

export const useData = () => {
  const [unitSelected, setUnitSelected] = useState<Units>({
    weight: 'kg',
    height: 'cm',
  })

  const handleUnitSelected = useCallback(<K extends keyof Units>(key: K, value: Units[K]) => {
    setUnitSelected((prev) => ({
      ...prev,
      [key]: value,
    }))
  }, [])

  return { unitSelected, handleUnitSelected }
}
