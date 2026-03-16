import { useEffect } from 'react'
// locals
import { DialogProps } from '.'

export const useData = ({ open, onClose }: Pick<DialogProps, 'open' | 'onClose'>) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open, onClose])
}
