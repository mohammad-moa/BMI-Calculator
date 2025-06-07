import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    root: cva('flex gap-2.5 text-gray-900 rounded-lg', {
      variants: {
        fullWidth: {
          true: 'w-full',
          false: 'w-1/2',
        },
        variant: {
          outlined: 'border-2',
          filled: 'bg-zinc-300',
          standard: 'border-b-2 rounded-none',
        },
        color: {
          primary: 'border-orange-500',
          secondary: 'border-zinc-500',
          info: 'border-blue-500',
          success: 'border-green-500',
          warning: 'border-amber-500',
          error: 'border-red-500',
        },
        size: {
          small: 'py-2 px-3 text-sm',
          medium: 'py-2.5 px-4 text-base',
          large: 'py-3 px-5 text-lg',
        },
      },
    }),
    textfield: cva('w-full'),
  }
}
