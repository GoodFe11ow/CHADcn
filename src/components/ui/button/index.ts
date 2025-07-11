import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        paginationArrows:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border  bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-secondary cursor-pointer rounded-none bg-[#F1F5F9] hover:bg-[#e4eaf1]',
        link: 'text-primary cursor-pointer underline-offset-4 hover:underline',
        campaign: 'border-[#F7FEE7] cursor-pointer bg-[#D9F99D]',
        readmore: 'cursor-pointer underline',
        donate: 'cursor-pointer bg-green ',
        contract: 'cursor-pointer bg-white border w-[91px] h-[40px] text-center text-[#475467]',
        showMore: 'cursor-pointer bg-white border w-[108px] h-[40px] text-center text-[#475467]',
        imageCard: 'w-[42px] h-[42px] gap-2 top-[125px] left-[296px] rounded-[6px] border p-2 bg-white hover:bg-gray-200 cursor-pointer',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
