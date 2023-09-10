import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'background': '#f4f1e8',
      'content': '#9b4819',
      'text-black': '#000001',
      'text-grey': '#f4f1e8',
      'border': '#bd8f53'
    },
    fontFamily: {
      'header': 'Radley',
      'body': 'Carlito'
    },
  },
  plugins: [],
}
export default config
