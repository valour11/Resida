
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   // base: "/home",
//   build: {
//     rollupOptions: {
//       external: ['react-icons/md'], // Externalize react-icons/md
//     },
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: '/src/main.jsx', // Make sure your main entry point is correct
      },
      onwarn(warning, warn) {
        // Suppress certain warnings to get to the root cause
        if (warning.code === 'UNRESOLVED_IMPORT') {
          console.error('Unresolved import:', warning.source);
        } else {
          warn(warning);
        }
      },
    },
  },
});
