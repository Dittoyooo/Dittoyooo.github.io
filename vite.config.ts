import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: This ensures assets are loaded relatively (./) instead of absolutely (/),
  // allowing deployment to subdirectories like https://username.github.io/repo-name/
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  server: {
    port: 3000,
  },
});