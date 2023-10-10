'use client'

import { Check, ChevronDown } from 'lucide-react'
import * as SelectPrimitive from '@radix-ui/react-select'

export function Select() {
	return (
		<SelectPrimitive.Root>
			<SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
				<SelectPrimitive.Value
					className="text-black"
					placeholder="Select a country"
				/>
				<SelectPrimitive.Icon>
					<ChevronDown className="h-5 w-5 text-zinc-500" />
				</SelectPrimitive.Icon>
			</SelectPrimitive.Trigger>

			<SelectPrimitive.Portal>
				<SelectPrimitive.Content
					className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
					position="popper"
					side="bottom"
					sideOffset={8}
				>
					<SelectPrimitive.Viewport>
						<SelectPrimitive.Item
							className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
							value="br"
						>
							<SelectPrimitive.ItemText className="text-black">
								Brazil
							</SelectPrimitive.ItemText>

							<SelectPrimitive.ItemIndicator>
								<Check className="h-4 w-4 text-violet-500" />
							</SelectPrimitive.ItemIndicator>
						</SelectPrimitive.Item>

						<SelectPrimitive.Item
							className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
							value="ag"
						>
							<SelectPrimitive.ItemText className="text-black">
								Argentina
							</SelectPrimitive.ItemText>

							<SelectPrimitive.ItemIndicator>
								<Check className="h-4 w-4 text-violet-500" />
							</SelectPrimitive.ItemIndicator>
						</SelectPrimitive.Item>
					</SelectPrimitive.Viewport>
				</SelectPrimitive.Content>
			</SelectPrimitive.Portal>
		</SelectPrimitive.Root>
	)
}
