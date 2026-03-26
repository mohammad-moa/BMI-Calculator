import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    root: cva('flex items-center justify-center w-full h-full absolute top-0 left-0'),
    backdrop: cva('bg-gray-700/60 w-full h-full absolute top-0 left-0'),
    dialog: cva('rounded-xl p-4 relative flex flex-col', {
      variants: {
        size: {
          small: 'w-1/4',
          medium: 'w-1/3',
          large: 'w-1/2',
        },
      },
    }),
    header: cva('font-semibold text-2xl'),
    subHeader: cva('text-gray-400'),
    content: cva('mt-4 flex-1'),
    actions: cva('mt-9 flex items-center gap-3'),
  }
}
