import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Todo App Advanced',
        short_name: 'TodoApp',
        description: 'Aplikasi Todo App dengan PWA',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'web-app-manifest-192x192.png', // Pastikan kamu menambahkan gambar 192x192 di folder public
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'web-app-manifest-512x512.png', // Pastikan kamu menambahkan gambar 512x512 di folder public
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    },
})