import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    root: cva('flex items-center justify-center gap-4 py-3'),
    copyright: cva('text-gray-400 text-sm'),
  }
}
