import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-jost)'],
        header: ['var(--font-poppins)']
      },
      backgroundImage: {
        'donor-header': 'linear-gradient(132deg, #008080 40.32%, #800080 100%)',
        'adopter-header': 'linear-gradient(132deg, #800080 40.32%, #008080 100%)'
      },
    },
  },
  plugins: [],
}
export default config
