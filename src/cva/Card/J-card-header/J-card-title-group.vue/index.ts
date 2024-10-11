import { cva } from 'class-variance-authority'

export const titlegroup = cva('h-auto w-auto grid grid-rows', {
  variants: {
    variant: {
      default: 'h-auto w-auto grid grid-rows'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})
