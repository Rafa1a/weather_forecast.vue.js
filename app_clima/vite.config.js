import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  dase: "/weather_forecast.vue.js",
  plugins: [vue()],
})
