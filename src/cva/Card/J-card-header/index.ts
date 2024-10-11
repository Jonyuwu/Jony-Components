import { cva } from 'class-variance-authority'

export const header = cva('h-auto w-auto grid grid-cols-[auto_1fr_auto]', {
  variants: {
    space: {
      sm: 'gap-1',
      md: 'gap-2',
      bg: 'gap-3',
      xl: 'gap-4'
    }
  },
  defaultVariants: {
    space: 'md'
  }
})
