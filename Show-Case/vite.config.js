import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/React/',           // ← Important for showcase (root)
  plugins: [react()],
})