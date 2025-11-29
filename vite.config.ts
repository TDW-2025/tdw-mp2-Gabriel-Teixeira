import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  
  base: "/tdw-mp2-Gabriel-Teixeira/", 
})