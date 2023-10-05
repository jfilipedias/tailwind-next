import { UploadCloud } from 'lucide-react'
import { Children, ComponentProps } from 'react'

type RootProps = ComponentProps<'div'>

export function Root({ ...props }: RootProps) {
	return <div className="w-full" {...props} />
}

type TriggerProps = ComponentProps<'label'>

export function Trigger({ children, ...props }: TriggerProps) {
	return (
		<label
			className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500"
			{...props}
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
	return <input type="file" className="sr-only" {...props} />
}
