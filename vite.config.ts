import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

let proxy;
switch (process.env.TARGET) {
  case 'dev':
    proxy = { '/api': `http://localhost:3001` };
    break;
  case 'my':
    proxy = { '/api': `http://oulianakotik.com` };
    break;
  case 'render':
    proxy = {
      '/api': `https://serge-govorun.onrender.com:${process.env.PORT}`,
    };
    break;
  default:
    proxy = { '/api': `http://localhost:3001` };
    break;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy,
    // proxy: { '/api': `http://oulianakotik.com` },
  },
});
