import { cva } from 'class-variance-authority'

export const container = cva('h-auto w-auto grid ', {
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
      primary_1: 'bg-primary_1',
      primary_2: 'bg-primary_2',
      primary_3: 'bg-primary_3',
      primary_4: 'bg-primary_4',
      primary_5: 'bg-primary_5',
      primary_6: 'bg-primary_6',
      primary_7: 'bg-primary_7',
      primary_8: 'bg-primary_8',
      primary_9: 'bg-primary_9',
      primary_10: 'bg-primary_10',
      secondary_1: 'bg-secondary_1',
      secondary_2: 'bg-secondary_2',
      secondary_3: 'bg-secondary_3',
      secondary_4: 'bg-secondary_4',
      secondary_5: 'bg-secondary_5',
      secondary_6: 'bg-secondary_6',
      secondary_7: 'bg-secondary_7',
      secondary_8: 'bg-secondary_8',
      secondary_9: 'bg-secondary_9',
      secondary_10: 'bg-secondary_10',
      withe: 'bg-white',
      black: 'bg-black',
      danger: 'bg-red-700',
      info: 'bg-blue-700',
      success: 'bg-green-700',
      warning: 'bg-orange-500'
    },
    space: {
      sm: 'gap-2',
      md: 'gap-4',
      bg: 'gap-6',
      xl: 'gap-8'
    }
  },
  defaultVariants: {
    type: 'roundedShadow',
    padding: 'md',
    bgColor: 'withe',
    space: 'md'
  }
})
