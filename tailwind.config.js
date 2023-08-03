/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            keyframes: {
                growDown: {
                    '0%': {transform: ' scaleY(0)'},
                    '80%': {transform: 'scaleY(1.1)'},
                    '100%': {transform: 'scaleY(1)'},
                },
            }
        }
    },

    plugins: [plugin(function ({addUtilities, addComponents}) {
        addUtilities({
            '.shadow1': {
                'text-color': 'rgba(var(--color-primary), 0.2)',
            },
            '.shadow2': {
                'text-color': 'rgba(var(--color-primary), 0.24)',
            }
        })
        addComponents({
            '.screenheight': {
                '@media (max-height: 720px)': {
                    marginTop: '40rem',
                }
            }
        })
    })],
}