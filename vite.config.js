import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/hsk1-hanzi-learning/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
