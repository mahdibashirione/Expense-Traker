module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  mode: 'jit',

}
