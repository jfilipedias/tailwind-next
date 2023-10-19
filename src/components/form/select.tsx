'use client'

import { ReactNode } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import * as Select from '@radix-ui/react-select'
import { twMerge } from 'tailwind-merge'

type SelectItemProps = Select.SelectItemProps

export function Item({ children, ...props }: SelectItemProps) {
	return (
		<Select.Item
			className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-zinc-700"
			{...props}
		>
			<Select.ItemText asChild>
				<span className="text-zinc-950 dark:text-zinc-100">{children}</span>
			</Select.ItemText>

			<Select.ItemIndicator>
				<Check className="h-4 w-4 text-violet-500 dark:text-violet-300" />
			</Select.ItemIndicator>
		</Select.Item>
	)
}

interface SelectProps extends Select.SelectProps {
	id?: string
	placeholder?: string
}

export function Root({ children, id, placeholder, ...props }: SelectProps) {
	return (
		<Select.Root {...props}>
			<Select.Trigger
				id={id}
				className={twMerge(
					'flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none data-[placeholder]:text-zinc-600',
					'focus:border-violet-300 focus:ring-4 focus:ring-violet-100',
					'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20 dark:data-[placeholder]:text-zinc-400',
				)}
			>
				<Select.Value className="text-black" placeholder={placeholder} />
				<Select.Icon>
					<ChevronDown className="h-5 w-5 text-zinc-500" />
				</Select.Icon>
			</Select.Trigger>

			<Select.Portal>
				<Select.Content
					className={twMerge(
						'z-10 w-[--radix-select-trigger-width] animate-slide-down-and-fade overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm',
						'dark:border-zinc-700 dark:bg-zinc-800',
					)}
					position="popper"
					side="bottom"
					sideOffset={8}
				>
					<Select.Viewport>{children}</Select.Viewport>
				</Select.Content>
			</Select.Portal>
		</Select.Root>
	)
}
