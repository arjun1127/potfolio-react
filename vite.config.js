import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'potfolio-react';

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
});
