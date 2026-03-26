import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    root: cva('flex w-full h-full absolute top-0 left-0'),
    backdrop: cva('bg-gray-700/60 w-full h-full absolute top-0 left-0'),
    dialog: cva('p-4 fixed flex flex-col bg-white transition-transform', {
      variants: {
        position: {
          top: 'rounded-b-xl top-0 w-full',
          right: 'rounded-l-xl right-0 w-1/3 h-full',
          bottom: 'rounded-t-xl bottom-0 w-full',
          left: 'rounded-r-xl left-0 w-1/3 h-full',
        },
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
