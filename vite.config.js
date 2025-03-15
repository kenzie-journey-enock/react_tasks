import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'sass-embedded';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass
      }
    }
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 5000,
  },
  base: '/react_tasks/'
});
