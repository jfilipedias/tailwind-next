import {
	BarChart2,
	CheckSquare,
	Flag,
	Home,
	Layers,
	LifeBuoy,
	Search,
	Settings,
	Users,
} from 'lucide-react'
import * as Input from '@/components/input'
import { Logo } from './logo'
import { NavItem } from './nav-item'
import { Profile } from './profile'
import { UsedSpaceWidget } from './used-space-widget'

export function Sidebar() {
	return (
		<aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
			<Logo />

			<Input.Root className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
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

				<div className="h-px bg-zinc-200" />

				<Profile />
			</div>
		</aside>
	)
}
