import { cva } from 'class-variance-authority'

export const actionsheader = cva('h-auto w-auto col-start-3', {
  variants: {
    position: {
      start: 'justify-self-start',
      center: 'justify-self-center',
      end: 'justify-self-end'
    }
  },
  defaultVariants: {
    position: 'end'
  }
})
