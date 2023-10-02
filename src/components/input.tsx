import { ComponentProps } from 'react'

type InputRootProps = ComponentProps<'div'>

export function InputRoot({ ...props }: InputRootProps) {
	return (
		<div
			className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
			{...props}
		/>
	)
}

type InputFieldProps = ComponentProps<'input'>

export function InputField({ ...props }: InputFieldProps) {
	return (
		<input
			className="flex-1 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
		/>
	)
}
