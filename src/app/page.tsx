import { Bold, Italic, Link, List, Mail, Underline } from 'lucide-react'
import { Button } from '@/components/button'
import * as FileInput from '@/components/form/file-input'
import * as Input from '@/components/form/input'
import * as Select from '@/components/form/select'
import { SettingsTabs } from '@/components/settings-tabs'
import { Textarea } from '@/components/form/text-area'

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
						<Button type="button" variant="outline">
							Cancel
						</Button>
						<Button type="submit" form="settings">
							Save
						</Button>
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

						<FileInput.Root className="flex items-start gap-5">
							<FileInput.ImagePreview />
							<FileInput.Trigger>
								<span className="text-xs">
									SVG, PNG, JPG or GIF(max. 800x400px)
								</span>
							</FileInput.Trigger>
							<FileInput.Field accept="" />
						</FileInput.Root>
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

						<Select.Root id="country" placeholder="Select a country">
							<Select.Item value="br">Brazil</Select.Item>
							<Select.Item value="sp">Spain</Select.Item>
						</Select.Root>
					</div>

					<div className="grid grid-cols-form gap-3 py-5">
						<label
							htmlFor="timezone"
							className="text-sm font-medium text-zinc-700"
						>
							Timezone
						</label>

						<Select.Root id="timezone" placeholder="Select a timezone">
							<Select.Item value="utc3">Brasília Time (UTC-03:00)</Select.Item>
							<Select.Item value="utc8">
								Pacific Standard Time (UTC-08:00)
							</Select.Item>
						</Select.Root>
					</div>

					<div className="grid grid-cols-form gap-3 py-5">
						<label htmlFor="bio" className="text-sm font-medium text-zinc-700">
							Bio
							<span className="mt-0.5 block text-sm font-normal text-zinc-500">
								Write a short introduction.
							</span>
						</label>

						<div className="space-y-3">
							<div className="grid grid-cols-2 gap-3">
								<Select.Root defaultValue="txt">
									<Select.Item value="txt">Normal Text</Select.Item>
									<Select.Item value="html">HTML</Select.Item>
									<Select.Item value="md">Markdown</Select.Item>
								</Select.Root>

								<div className="flex items-center gap-1">
									<Button variant="ghost" type="button">
										<Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</Button>

									<Button variant="ghost" type="button">
										<Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</Button>

									<Button variant="ghost" type="button">
										<Underline
											className="h-4 w-4 text-zinc-500"
											strokeWidth={3}
										/>
									</Button>

									<Button variant="ghost" type="button">
										<Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</Button>

									<Button variant="ghost" type="button">
										<List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</Button>
								</div>
							</div>

							<Textarea
								id="bio"
								defaultValue="I'm a product designer based in Melbourne, Australia. I specialized in UX/UI design, brand strategy, and Webflow development."
							/>
						</div>
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

						<FileInput.Root>
							<FileInput.Trigger>
								<span className="text-xs">
									SVG, PNG, JPG or GIF(max. 800x400px)
								</span>
							</FileInput.Trigger>
							<FileInput.Field accept="" multiple />
							<FileInput.FileList />
						</FileInput.Root>
					</div>

					<div className="flex items-center justify-end gap-2 pt-5">
						<Button type="button" variant="outline">
							Cancel
						</Button>
						<Button type="submit" form="settings">
							Save
						</Button>
					</div>
				</form>
			</div>
		</main>
	)
}
