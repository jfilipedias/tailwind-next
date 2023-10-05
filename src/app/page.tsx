import { Mail, User } from 'lucide-react'
import * as FileInput from '@/components/form/file-input'
import * as Input from '@/components/form/input'
import { SettingsTabs } from '@/components/settings-tabs'

export default function Home() {
	return (
		<main className="space-y-6 px-8 pb-12 pt-8">
			<h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

			<SettingsTabs />

			<div className="flex flex-col">
				<div className="flex items-center justify-between border-b border-zinc-200 pb-5">
					<div className="space-y-1">
						<h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
						<span className="text-sm text-zinc-500">
							Update your photo and personal details here
						</span>
					</div>

					<div className="flex items-center gap-2">
						<button
							type="button"
							className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
						>
							Cancel
						</button>
						<button
							type="submit"
							form="settings"
							className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
						>
							Save
						</button>
					</div>
				</div>

				<form
					id="settings"
					className="mt-6 flex w-full flex-col divide-y divide-zinc-200"
				>
					<div className="grid grid-cols-form gap-3 py-5">
						<label
							htmlFor="firstName"
							className="text-sm font-medium text-zinc-700"
						>
							Name
						</label>

						<div className="grid grid-cols-2 gap-6">
							<Input.Root>
								<Input.Field id="firstName" type="text" defaultValue="Filipe" />
							</Input.Root>

							<Input.Root>
								<Input.Field type="text" defaultValue="Dias" />
							</Input.Root>
						</div>
					</div>

					<div className="grid grid-cols-form gap-3 py-5">
						<label
							htmlFor="email"
							className="text-sm font-medium text-zinc-700"
						>
							Email
						</label>

						<Input.Root>
							<Mail className="h-5 w-5 text-zinc-500" />
							<Input.Field
								id="email"
								type="email"
								defaultValue="filipedias@email.com"
							/>
						</Input.Root>
					</div>

					<div className="grid grid-cols-form gap-3 py-5">
						<label
							htmlFor="photo"
							className="text-sm font-medium text-zinc-700"
						>
							Your photo
							<span className="mt-0.5 block text-sm font-normal text-zinc-500">
								This will be displayed on your profile.
							</span>
						</label>

						<div className="flex items-start gap-5">
							<div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
								<User className="h-8 w-8 text-violet-500" />
							</div>

							<FileInput.Root>
								<FileInput.Trigger htmlFor="photo">
									<span className="text-xs">
										SVG, PNG, JPG or GIF(max. 800x400px)
									</span>
								</FileInput.Trigger>
								<FileInput.Field id="photo" accept="" />
							</FileInput.Root>
						</div>
					</div>

					<div className="grid grid-cols-form gap-3 py-5">
						<label htmlFor="role" className="text-sm font-medium text-zinc-700">
							Role
						</label>

						<Input.Root>
							<Input.Field id="role" type="text" defaultValue="CEO" />
						</Input.Root>
					</div>

					<div className="grid grid-cols-form gap-3 py-5">
						<label
							htmlFor="country"
							className="text-sm font-medium text-zinc-700"
						>
							Country
						</label>

						<div></div>
					</div>

					<div className="grid grid-cols-form gap-3 py-5">
						<label
							htmlFor="timezone"
							className="text-sm font-medium text-zinc-700"
						>
							Timezone
						</label>

						<div></div>
					</div>

					<div className="grid grid-cols-form gap-3 py-5">
						<label
							htmlFor="photo"
							className="text-sm font-medium text-zinc-700"
						>
							Bio
							<span className="mt-0.5 block text-sm font-normal text-zinc-500">
								Write a short introduction.
							</span>
						</label>

						<div></div>
					</div>

					<div className="grid grid-cols-form gap-3 py-5">
						<label
							htmlFor="projects"
							className="text-sm font-medium text-zinc-700"
						>
							Portfolio
							<span className="mt-0.5 block text-sm font-normal text-zinc-500">
								Share a few snippets of your work.
							</span>
						</label>

						<div>
							<FileInput.Root>
								<FileInput.Trigger htmlFor="projects">
									<span className="text-xs">
										SVG, PNG, JPG or GIF(max. 800x400px)
									</span>
								</FileInput.Trigger>
								<FileInput.Field id="projects" accept="" multiple />
							</FileInput.Root>
						</div>
					</div>

					<div className="flex items-center justify-end gap-2 pt-5">
						<button
							type="button"
							className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
						>
							Save
						</button>
					</div>
				</form>
			</div>
		</main>
	)
}
