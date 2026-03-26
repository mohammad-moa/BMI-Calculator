import { useEffect } from 'react'
// locals
import { DrawerProps } from '.'

export const useData = ({ open, onClose }: Pick<DrawerProps, 'open' | 'onClose'>) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open, onClose])
}
