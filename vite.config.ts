import { defineConfig } from 'vite'

export default defineConfig({
    define: {
      __APP_VERSION__: JSON.stringify('v1.0.0'),
      __API_URL__: 'window.__backend_api_url',
    },
    base: '/jp/dist/',
})