import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      entry: resolve(__dirname, "src/index.js"),
      name:"lv-button",
      fileName: (format)=> `lv-button.${format}.js` 
    },
    rollupOptions:{
      external:["vue"],
      output:{
        globals:{
          vue:"Vue"
        }
      }
    }

  },
  plugins: [vue()]
})
