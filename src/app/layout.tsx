import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/sidebar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Tailwind Next',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="antialiased">
			<body className={inter.className}>
				<div className="grid min-h-screen grid-cols-app">
					<Sidebar />
					{children}
				</div>
			</body>
		</html>
	)
}
