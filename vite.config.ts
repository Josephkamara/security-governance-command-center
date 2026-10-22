import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/security-governance-command-center/',
  server: {
    host: '127.0.0.1',
    port: 4521,
    strictPort: true,
  },
  preview: {
    host: '127.0.0.1',
    port: 4521,
    strictPort: true,
  },
})
