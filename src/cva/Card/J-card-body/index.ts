import { cva } from 'class-variance-authority'

export const body = cva('h-auto', {
  variants: {
    size: {
      sm: 'text-xs max-w-32 break-words',
      md: 'text-sm max-w-56 break-words',
      bg: 'text-base max-w-72 break-words',
      xl: 'text-lg max-w-96 break-words'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})
