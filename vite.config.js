import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'build', // измените 'dist' на 'build'
    emptyOutDir: true // очищает папку перед сборкой
  }
});
