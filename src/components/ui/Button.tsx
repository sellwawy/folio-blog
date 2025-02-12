import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'

const buttonVariants = cva('flex w-fit items-center justify-center font-medium duration-300', {
   variants: {
      variant: {
         primary:
            'text-quinary bg-primary border-2 border-primary rounded-full hover:bg-tertiary hover:border-tertiary',
         secondary: 'text-primary bg-quinary border-2 border-primary rounded-full hover:bg-quaternary',
         tertiary: 'bg-quinary rounded-lg shadow-custom text-primary',
         fourthiary:
            'bg-quaternary border border-slate-200 text-primary rounded-lg hover:bg-dark-grayish-blue',
      },
      size: {
         small: 'px-spacing-4 py-spacing-1 text-sm',
         medium: 'px-spacing-6 py-spacing-2 text-base',
         large: 'px-spacing-8 py-spacing-3 text-large',
      },
      fullWidth: {
         true: 'w-full',
      },
   },
   defaultVariants: {
      variant: 'primary',
      size: 'large',
   },
})

export interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof buttonVariants> {}

function Button({ variant, size, fullWidth, className, ...props }: ButtonProps) {
   return <button className={cn(buttonVariants({ variant, size, fullWidth, className }))} {...props} />
}

export { Button, buttonVariants }
