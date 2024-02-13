import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 4000// Using parseInt to ensure the port is a number and providing a default value of 3000 if PORT is not set
  }
})
