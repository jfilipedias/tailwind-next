import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'div'>

export function Root({ className, ...props }: InputProps) {
	return (
		<div
			className={twMerge(
				'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm',
				'focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100',
				'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20',
				className,
			)}
			{...props}
		/>
	)
}

type InputFieldProps = ComponentProps<'input'>

export function Field({ ...props }: InputFieldProps) {
	return (
		<input
			className={twMerge(
				'flex-1 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none',
				'dark:text-zinc-100 dark:placeholder-zinc-400',
			)}
			{...props}
		/>
	)
}
