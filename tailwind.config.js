/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				GolosText: ['Golos Text', 'cursive'],
			},
			screens: {
				small: { min: '320px', max: '350px' },
			},
		},
	},
	plugins: [],
}
