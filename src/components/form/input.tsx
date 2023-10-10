import { ComponentProps } from 'react'

type InputProps = ComponentProps<'div'>

export function Root({ ...props }: InputProps) {
	return (
		<div
			className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
			{...props}
		/>
	)
}

type InputFieldProps = ComponentProps<'input'>

export function Field({ ...props }: InputFieldProps) {
	return (
		<input
			className="flex-1 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
			{...props}
		/>
	)
}
