import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    host:'localhost', // 也可以是192.XX.XXX.X类似的
    port:8080, //随便用哪个都可以
    open:true
  }
})
