/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      width: ['group-hover'],
      height: ['group-hover'],
      fontFamily: {
        'code': ['Fira Code', 'Roboto Mono', 'monospace'],
      },
      translate: ['group-hover', 'hover'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
