'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import * as Tabs from '@radix-ui/react-tabs'

interface TabItemProps extends Tabs.TabsTriggerProps {
	active?: boolean
}

function TabItem({ children, active, ...props }: TabItemProps) {
	return (
		<Tabs.Trigger
			className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 outline-none hover:text-violet-700 data-[state=active]:text-violet-700"
			{...props}
		>
			<span className="rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-200 group-focus-visible:ring-offset-4">
				{children}
			</span>

			{active && (
				<motion.div
					layoutId="activeTab"
					className="absolute inset-x-0 -bottom-px h-0.5 bg-violet-700"
				/>
			)}
		</Tabs.Trigger>
	)
}

export function SettingsTabs() {
	const [activeTab, setActiveTab] = useState('tab1')
	return (
		<Tabs.Root value={activeTab} onValueChange={setActiveTab}>
			<Tabs.List className="flex w-full items-center gap-4 border-b border-zinc-200">
				<TabItem value="tab1" active={activeTab === 'tab1'}>
					My details
				</TabItem>
				<TabItem value="tab2" active={activeTab === 'tab2'}>
					Profile
				</TabItem>
				<TabItem value="tab3" active={activeTab === 'tab3'}>
					Password
				</TabItem>
				<TabItem value="tab4" active={activeTab === 'tab4'}>
					Team
				</TabItem>
				<TabItem value="tab5" active={activeTab === 'tab5'}>
					Plan
				</TabItem>
				<TabItem value="tab6" active={activeTab === 'tab6'}>
					Billing
				</TabItem>
				<TabItem value="tab7" active={activeTab === 'tab7'}>
					Email
				</TabItem>
				<TabItem value="tab8" active={activeTab === 'tab8'}>
					Notifications
				</TabItem>
				<TabItem value="tab9" active={activeTab === 'tab9'}>
					Integrations
				</TabItem>
				<TabItem value="tab0" active={activeTab === 'tab0'}>
					API
				</TabItem>
			</Tabs.List>
		</Tabs.Root>
	)
}
