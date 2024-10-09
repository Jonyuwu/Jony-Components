import { cva } from 'class-variance-authority'

export const container = cva('h-auto w-auto ', {
  variants: {
    type: {
      rounded: 'rounded-md',
      roundedShadow: 'rounded-md shadow-md',
      roundedMd: 'rounded-lg',
      roundedMdShadow: 'rounded-lg shadow-md',
      roundedLg: 'rounded-lg',
      roundedLgShadow: 'rounded-lg shadow-md',
      shadow: 'shadow-md'
    },
    padding: {
      sm: 'p-2',
      md: 'p-4',
      bg: 'p-6'
    },
    bgColor: {
      withe: 'bg-white',
      black: 'bg-black',
      danger: 'bg-red-700',
      info: 'bg-blue-700',
      success: 'bg-green-700',
      warning: 'bg-orange-500'
    }
  },
  defaultVariants: {
    type: 'roundedShadow',
    padding: 'md',
    bgColor: 'withe'
  }
})
