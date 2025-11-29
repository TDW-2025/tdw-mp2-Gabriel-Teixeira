/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // Adicione esta linha para escanear todos os seus componentes React/TypeScript
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}