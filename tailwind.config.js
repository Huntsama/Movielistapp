/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  "/node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
        opacity: [
            "disabled"
        ],
        backgroundColor: [
            "disabled"
        ],
        cursor: [
            "disabled"
        ]
    }
},
  plugins: [
    require('flowbite/plugin')
]
}
