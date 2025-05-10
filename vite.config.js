import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ⚠️ Replace with your repo name
const repoName = 'potfolio-react';

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // 👈 important
});
