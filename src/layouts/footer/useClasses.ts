import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    root: cva('flex items-center justify-center gap-4 pb-3 pt-3.5 bg-white my-5 rounded-2xl'),
    copyright: cva('text-slate-400 text-sm'),
  }
}
