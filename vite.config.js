
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: "/home",
  build: {
    rollupOptions: {
      external: ['react-icons/md'], // Externalize react-icons/md
    },
  },
});
