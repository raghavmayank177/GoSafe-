import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The browser talks only to :5173; Vite forwards /api to the backend, so cookies are same-origin.
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, proxy: { '/api': 'http://localhost:4000' } },
});
