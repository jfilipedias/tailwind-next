import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			animation: {
				'slide-down-and-fade':
					'slide-down-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-up-and-fade':
					'slide-up-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
			},
			borderWidth: {
				6: '6px',
			},
			colors: {
				violet: {
					25: '#fcfaff',
				},
			},
			gridTemplateColumns: {
				app: 'minmax(18rem, 20rem) 1fr',
				form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
			},
			keyframes: {
				'slide-down-and-fade': {
					from: { opacity: '0', transform: 'translateY(-2px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-up-and-fade': {
					from: { opacity: '1', transform: 'translateY(0)' },
					to: { opacity: '0', transform: 'translateY(-2px)' },
				},
			},
		},
	},
}
export default config
