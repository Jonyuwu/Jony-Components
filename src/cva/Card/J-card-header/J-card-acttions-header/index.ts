import { cva } from 'class-variance-authority'

export const actionsheader = cva('h-auto w-auto grid grid-flow-col col-start-3 space-x-4', {
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
