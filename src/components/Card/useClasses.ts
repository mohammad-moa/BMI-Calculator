import { cva } from 'class-variance-authority'

export const useClasses = () => {
  return {
    card: cva('rounded-xl p-4 bg-white', {
      variants: {
        variant: {
          elevation: 'shadow-lg',
          outlined: 'border-2',
          standard: '',
        },
        color: {
          primary: 'border-orange-500',
          secondary: 'border-zinc-500',
          info: 'border-blue-500',
          success: 'border-green-500',
          warning: 'border-amber-500',
          error: 'border-red-500',
        },
      },
      compoundVariants: [
        {
          variant: 'elevation',
          color: 'primary',
          class: 'shadow-orange-200',
        },
        {
          variant: 'elevation',
          color: 'secondary',
          class: 'shadow-zinc-200',
        },
        {
          variant: 'elevation',
          color: 'info',
          class: 'shadow-blue-200',
        },
        {
          variant: 'elevation',
          color: 'success',
          class: 'shadow-green-200',
        },
        {
          variant: 'elevation',
          color: 'warning',
          class: 'shadow-amber-200',
        },
        {
          variant: 'elevation',
          color: 'error',
          class: 'shadow-red-200',
        },
      ],
      defaultVariants: {
        variant: 'elevation',
        color: 'primary',
      },
    }),
  }
}
