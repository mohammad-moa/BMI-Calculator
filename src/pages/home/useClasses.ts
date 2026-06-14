import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    root: cva('flex flex-1 items-center justify-between gap-30'),
    formContainer: cva('flex flex-col gap-15 w-2/5'),
    form: cva('flex flex-col gap-7'),
    title: cva('text-5xl font-black'),
    text: cva('text-md text-gray-500 mt-5'),
    units: cva('flex items-center gap-3 border-l border-l-gray-300 pl-3'),
    unit: cva('cursor-pointer', {
      variants: {
        selected: {
          true: 'text-slate-800',
          false: 'text-slate-300',
        },
      },
    }),
    image: cva('w-3/5'),
  }
}
