import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: "@assets", replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
      { find: "@clients", replacement: fileURLToPath(new URL('./src/clients', import.meta.url)) },
      { find: "@components", replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: "@pages", replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
      { find: "@shared", replacement: fileURLToPath(new URL('./src/shared', import.meta.url)) },
      { find: "@store", replacement: fileURLToPath(new URL('./src/store', import.meta.url)) },
      { find: "@local-types", replacement: fileURLToPath(new URL('./src/types', import.meta.url)) },
      { find: "@widgets", replacement: fileURLToPath(new URL('./src/widgets', import.meta.url)) },
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@assets/scss/font-style.scss";`,
      },
    },
  },
});
