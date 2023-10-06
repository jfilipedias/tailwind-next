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
import { UploadCloud, User } from 'lucide-react'

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
			className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500"
			htmlFor={id}
		>
			<div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
				<UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
			</div>

			<div className="flex flex-col items-center">
				<span className="text-sm">
					<span className="font-semibold text-violet-700">Click to upload</span>{' '}
					or drag and drop
					{children}
				</span>
			</div>
		</label>
	)
}

interface FieldProps extends Omit<ComponentProps<'input'>, 'type'> {}

export function Field({ ...props }: FieldProps) {
	const { id, onFilesChange } = useFileInput()

	function handleFilesChange(event: ChangeEvent<HTMLInputElement>) {
		if (!event.target.files?.length) return

		const files = Array.from(event.target.files)
		onFilesChange(files)
	}

	return (
		<input
			{...props}
			id={id}
			className="sr-only"
			type="file"
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
			<div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
				<User className="h-8 w-8 text-violet-500" />
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