import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'luep-forms',
      fileName: (format) => `luep-forms.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', '@vue/test-utils', 'vue-router', 'vuex'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
