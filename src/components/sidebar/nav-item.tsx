import { ElementType } from 'react'

interface NavItemProps {
	title: string
	icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
	return (
		<a
			className="group flex items-center gap-3 rounded-md px-3 py-2 hover:bg-violet-50"
			href=""
		>
			<Icon className="h-5 w-5 text-zinc-500" />
			<span className="font-medium text-zinc-700 group-hover:text-violet-500">
				{title}
			</span>
		</a>
	)
}
