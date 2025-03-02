import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'



export default defineConfig({

  plugins: [react()],

  server: {

    host: true,

    allowedHosts: ['pixelstechfest.in', '4d0d-2409-40c0-237-98ac-fbe6-4002-4873-3031.ngrok-free.app']

  },

  preview: {

    allowedHosts: ['pixelstechfest.in', '4d0d-2409-40c0-237-98ac-fbe6-4002-4873-3031.ngrok-free.app']

  }

});