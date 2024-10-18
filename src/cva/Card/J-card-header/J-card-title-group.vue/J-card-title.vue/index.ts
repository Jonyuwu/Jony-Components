import { cva } from 'class-variance-authority'

export const title = cva('h-auto', {
  variants: {
    size: {
      sm: 'text-base font-bold h-auto max-w-32 break-words',
      md: 'text-lg font-bold h-auto max-w-56 break-words',
      bg: 'text-xl font-bold h-auto max-w-72 break-words',
      xl: 'text-2xl font-bold h-auto max-w-96 break-words',
      auto: 'text-lg font-bold break-words'
    }
  },
  defaultVariants: {
    size: 'auto'
  }
})
