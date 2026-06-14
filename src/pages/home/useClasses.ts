import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    root: cva('flex flex-1 items-center gap-15'),
    form: cva('flex flex-col gap-8'),
    title: cva('text-5xl font-black'),
    units: cva('flex items-center gap-3 border-l border-l-gray-300 pl-3'),
    unit: cva('cursor-pointer text-blue-500'),
    image: cva('w-3/5'),
  }
}
