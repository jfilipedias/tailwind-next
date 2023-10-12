import { ComponentProps } from 'react'
import { VariantProps, cva } from 'class-variance-authority'

const buttonStyles = cva(
	[
		'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
		'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
		'active:opacity-80',
	],
	{
		variants: {
			variant: {
				primary: 'bg-violet-600 text-white hover:bg-violet-700',
				outline: 'border border-zinc-300 text-zinc-700 hover:bg-zinc-50',
				ghost: 'rounded-md px-2 hover:bg-zinc-50 shadow-none',
			},
		},
		defaultVariants: {
			variant: 'primary',
		},
	},
)

type ButtonStylesProps = VariantProps<typeof buttonStyles>

type ButtonProps = ComponentProps<'button'> & ButtonStylesProps

export function Button({ variant, ...props }: ButtonProps) {
	return <button className={buttonStyles({ variant })} {...props} />
}
