'use client'

import {
	ChangeEvent,
	ComponentProps,
	createContext,
	useContext,
	useId,
	useMemo,
	useState,
} from 'react'
import { CheckCircle2, Trash2, UploadCloud, User } from 'lucide-react'
import { VariantProps, tv } from 'tailwind-variants'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Button } from '@/components/button'
import { formatBytes } from '@/utils/format-bytes'

interface FileInputContextType {
	id: string
	files: File[]
	onFilesChange: (value: File[]) => void
}

const FileInputContext = createContext({} as FileInputContextType)
const useFileInput = () => useContext(FileInputContext)

type RootProps = ComponentProps<'div'>

export function Root({ ...props }: RootProps) {
	const id = useId()
	const [files, setFiles] = useState<File[]>([])

	return (
		<FileInputContext.Provider value={{ id, files, onFilesChange: setFiles }}>
			<div className="w-full" {...props} />
		</FileInputContext.Provider>
	)
}

type TriggerProps = ComponentProps<'label'>

export function Trigger({ children, ...props }: TriggerProps) {
	const { id } = useFileInput()

	return (
		<label
			{...props}
			className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-violet-300"
			htmlFor={id}
		>
			<div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-700">
				<UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600 dark:text-zinc-500 dark:group-hover:text-violet-300" />
			</div>

			<div className="flex flex-col items-center">
				<span className="text-sm">
					<span className="font-semibold text-violet-700 dark:text-violet-300">
						Click to upload
					</span>{' '}
					or drag and drop
					{children}
				</span>
			</div>
		</label>
	)
}

interface FieldProps extends Omit<ComponentProps<'input'>, 'type'> {}

export function Field({ multiple, ...props }: FieldProps) {
	const { id, files, onFilesChange } = useFileInput()

	function handleFilesChange(event: ChangeEvent<HTMLInputElement>) {
		if (!event.target.files?.length) return

		const filesToAdd = multiple
			? [...files, ...Array.from(event.target.files)]
			: Array.from(event.target.files)

		onFilesChange(filesToAdd)
	}

	return (
		<input
			{...props}
			id={id}
			className="sr-only"
			type="file"
			multiple={multiple}
			onChange={handleFilesChange}
		/>
	)
}

export function ImagePreview() {
	const { files } = useFileInput()

	const previewURL = useMemo(() => {
		if (files.length === 0) return null

		return URL.createObjectURL(files[0])
	}, [files])

	if (previewURL === null) {
		return (
			<div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10">
				<User className="h-8 w-8 text-violet-500 dark:text-violet-300" />
			</div>
		)
	}

	return (
		<img
			src={previewURL}
			alt=""
			className="h-16 w-16 rounded-full object-cover"
		/>
	)
}

const fileItemStyles = tv({
	slots: {
		root: 'group flex items-start gap-4 rounded-lg border p-4',
		icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500',
		deleteButton: 'text-zinc-500',
	},
	variants: {
		state: {
			progress: {
				root: 'border-zinc-200 dark:border-zinc-700',
			},
			complete: {
				root: 'border-violet-500 dark:border-violet-300/40',
			},
			error: {
				root: 'bg-error-25 border-error-300 dark:bg-error-500/5 dark:border-error-500/30',
				icon: 'border-error-50 bg-error-100 text-error-600 dark:bg-error-500/5 dark:border-error-500/30 dark:text-error-400',
				deleteButton:
					'text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300',
			},
		},
	},
	defaultVariants: {
		state: 'progress',
	},
})

interface FileItemProps extends VariantProps<typeof fileItemStyles> {
	name: string
	size: number
}

function FileItem({ name, size, state }: FileItemProps) {
	const { root, icon, deleteButton } = fileItemStyles({ state })

	return (
		<div className={root()}>
			<div className={icon()}>
				<UploadCloud className="h-4 w-4" />
			</div>

			{state === 'error' ? (
				<div className="flex flex-1 flex-col items-start gap-1">
					<div className="flex flex-col">
						<span className="text-sm font-medium text-error-700 dark:text-error-500">
							Upload failed, please try again.
						</span>
						<span className="text-sm text-error-600 dark:text-error-400">
							{name}
						</span>
					</div>

					<button
						type="button"
						className="text-sm font-semibold text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300"
					>
						Try again
					</button>
				</div>
			) : (
				<div className="flex flex-1 flex-col items-start gap-1">
					<div className="flex flex-col">
						<span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
							{name}
						</span>
						<span className="text-sm text-zinc-500 dark:text-zinc-400">
							{formatBytes(size)}
						</span>
					</div>

					<div className="flex w-full items-center gap-3">
						<div className="h-2 flex-1 rounded-full bg-zinc-100 dark:bg-zinc-600">
							<div
								className="h-2 rounded-full bg-violet-600 dark:bg-violet-400"
								style={{ width: state === 'complete' ? '100%' : '80%' }}
							/>
						</div>
						<span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
							{state === 'complete' ? '100%' : '80%'}
						</span>
					</div>
				</div>
			)}

			{state === 'complete' ? (
				<CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
			) : (
				<Button
					variant="ghost"
					type="button"
					title="Remove"
					className={deleteButton()}
				>
					<Trash2 className="h-5 w-5" />
				</Button>
			)}
		</div>
	)
}

export function FileList() {
	const { files } = useFileInput()
	const [parent] = useAutoAnimate()

	return (
		<div ref={parent} className="mt-4 space-y-3">
			{files.map((file) => (
				<FileItem
					key={file.name}
					name={file.name}
					size={file.size}
					state="complete"
				/>
			))}
		</div>
	)
}
