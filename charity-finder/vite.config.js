import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/guide/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tsconfigPaths(),
  ],
});
