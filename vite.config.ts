import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: { '/api': `http://localhost:3001` },
    // proxy: { '/api': `https://serge-govorun.onrender.com:${process.env.PORT}` },
  },
});
