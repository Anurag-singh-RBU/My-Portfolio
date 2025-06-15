/* eslint-disable no-unused-vars */
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    include: ['react-vertical-timeline-component']
  }
});

