import { cva } from 'class-variance-authority'

export const footer = cva('h-auto w-auto', {
  variants: {
    position: {
      start: 'justify-self-start',
      center: 'justify-self-center',
      end: 'justify-self-end'
    }
  },
  defaultVariants: {
    position: 'center'
  }
})
