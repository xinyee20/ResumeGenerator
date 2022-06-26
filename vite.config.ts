import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// // https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // vite config
    server: {
      proxy: {
        '/api': {
          target: `${env.VITE_API_SERVER_URI}`,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
      cors: false,
    },
    build: {
      chunkSizeWarningLimit: 1600,
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@/': path.join(__dirname, 'src/'),
      },
    },
  }
})
