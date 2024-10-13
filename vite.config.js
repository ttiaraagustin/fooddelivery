import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Agar dapat diakses dari luar kontainer
    port: 5173,        // Ganti port ke 3000
  },
});
