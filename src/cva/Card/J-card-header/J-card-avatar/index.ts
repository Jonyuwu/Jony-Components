import { cva } from 'class-variance-authority'

export const avatar = cva(
  'h-10 w-10 rounded-full overflow-hidden bg-gray-500 self-center justify-self-center justify-center content-center ',
  {
    variants: {
      position: {
        left: 'col-start-1',
        raight: 'col-start-3',
        center: 'col-start-2 place-items-center'
      }
    },
    defaultVariants: {
      position: 'left'
    }
  }
)
