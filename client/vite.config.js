import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    // /api로 시작하는 요청은 Express 서버(4000)로 전달
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
})