'use client'

import { ReactNode } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import * as Select from '@radix-ui/react-select'

type SelectItemProps = Select.SelectItemProps

export function Item({ children, ...props }: SelectItemProps) {
	return (
		<Select.Item
			className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
			{...props}
		>
			<Select.ItemText className="text-black">{children}</Select.ItemText>

			<Select.ItemIndicator>
				<Check className="h-4 w-4 text-violet-500" />
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
				className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 data-[placeholder]:text-zinc-600"
			>
				<Select.Value className="text-black" placeholder={placeholder} />
				<Select.Icon>
					<ChevronDown className="h-5 w-5 text-zinc-500" />
				</Select.Icon>
			</Select.Trigger>

			<Select.Portal>
				<Select.Content
					className="animate-slide-down-and-fade z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm"
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
