'use client'

import {
	BarChart2,
	CheckSquare,
	Flag,
	Home,
	Layers,
	LifeBuoy,
	Menu,
	Search,
	Settings,
	Users,
} from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible'
import * as Input from '@/components/form/input'
import { Button } from '@/components/button'
import { Logo } from './logo'
import { NavItem } from './nav-item'
import { Profile } from './profile'
import { UsedSpaceWidget } from './used-space-widget'

export function Sidebar() {
	return (
		<Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 data-[state=open]:h-screen dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen">
			<div className="flex items-center justify-between">
				<Logo />

				<Collapsible.Trigger className="lg:hidden" asChild>
					<Button variant="ghost">
						<Menu className="h-6 w-6" />
					</Button>
				</Collapsible.Trigger>
			</div>

			<Collapsible.Content
				className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
				forceMount
			>
				<Input.Root>
					<Search className="h-5 w-5 text-zinc-500" />
					<Input.Field type="text" placeholder="Search" />
				</Input.Root>

				<nav className="space-y-0.5">
					<NavItem title="Home" icon={Home} />
					<NavItem title="Dashboard" icon={BarChart2} />
					<NavItem title="Projects" icon={Layers} />
					<NavItem title="Tasks" icon={CheckSquare} />
					<NavItem title="Reporting" icon={Flag} />
					<NavItem title="Users" icon={Users} />
				</nav>

				<div className="mt-auto flex flex-col gap-6">
					<nav className="space-y-0.5">
						<NavItem title="Support" icon={LifeBuoy} />
						<NavItem title="Settings" icon={Settings} />
					</nav>

					<UsedSpaceWidget />

					<div className="h-px bg-zinc-200 dark:bg-zinc-700" />

					<Profile />
				</div>
			</Collapsible.Content>
		</Collapsible.Root>
	)
}
