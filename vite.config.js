import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/korea-wh-tracker/',  // ← 改成你的 repo 名稱
})
