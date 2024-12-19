import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Плагин для работы с React
  build: {
    outDir: 'build', // Директория для сборки
    emptyOutDir: true, // Очистка перед сборкой
    sourcemap: true, // Создавать sourcemap для отладки (опционально)
    minify: 'esbuild', // Оптимизация сборки (esbuild или terser)
  },
  resolve: {
    alias: {
      '@': '/src', // Устанавливает alias для импорта файлов
    },
  },
});
