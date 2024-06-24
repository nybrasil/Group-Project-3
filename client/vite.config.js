// Use dotenv or similar to load environment variables if needed
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Default to 3000 if the PORT environment variable is not set
const port = process.env.PORT || 3000;

export default defineConfig({
  plugins: [react()],
  server: {
    port: port,
  },
});
