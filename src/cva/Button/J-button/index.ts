import { cva } from 'class-variance-authority'

export const button = cva(
  'grid grid-cols-[auto_auto] gap-1 sbreak-words text-center justify-center ease-in-out duration-300 cursor-pointer text-white',
  {
    variants: {
      size: {
        sm: 'min-w-16 max-w-96 h-fit text-sm font-semibold',
        md: 'min-w-20 max-w-96 h-fit text-base font-semibold',
        lg: 'min-w-24 max-w-96 h-fit text-lg font-semibold',
        xl: 'min-w-28 max-w-96 h-fit text-lg font-semibold'
      },
      border: {
        sm: 'rounded-sm px-2 py-1',
        md: 'rounded-md px-3 py-2',
        lg: 'rounded-lg px-4 py-3',
        xl: 'rounded-xl px-5 py-4'
      },
      color: {
        primary: 'bg-primary_10 hover:bg-primary_9',
        secondary: 'bg-secondary_10 hover:bg-secondary_9'
      }
    },
    defaultVariants: {
      size: 'md',
      border: 'md',
      color: 'primary'
    }
  }
)
