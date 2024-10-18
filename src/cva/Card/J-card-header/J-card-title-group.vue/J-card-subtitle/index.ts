import { cva } from 'class-variance-authority'

export const subtitle = cva('h-auto', {
  variants: {
    size: {
      sm: 'text-sm font-semibold h-auto max-w-32 break-words',
      md: 'text-base font-semibold h-auto max-w-56 break-words',
      bg: 'text-lg font-semibold h-auto max-w-72 break-words',
      xl: 'text-xl font-semibold h-auto max-w-96 break-words',
      auto: 'text-base font-semibold break-words'
    }
  },
  defaultVariants: {
    size: 'auto'
  }
})
