import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  
  base: "/", 
  
  // *** NOVA SEÇÃO PARA MUDAR O NOME DA PASTA DE SAÍDA ***
  build: {
    outDir: 'out', // Agora o Vite criará a pasta 'out'
  },
  // *******************************************************
})