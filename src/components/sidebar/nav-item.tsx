import { ElementType } from 'react'

interface NavItemProps {
	title: string
	icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
	return (
		<a
			className="group flex items-center gap-3 rounded-md px-3 py-2 hover:bg-violet-50 dark:hover:bg-zinc-800"
			href=""
		>
			<Icon className="dark: h-5 w-5 text-zinc-500 dark:text-zinc-600" />
			<span className="font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300">
				{title}
			</span>
		</a>
	)
}
