import { createApp } from 'vue' // 导入CreateApp的函数
import App from './App.vue' // 引入App.vue -- 模块的主入口文件！
import ElementPlus from 'element-plus' // 引入ElementPlus
import 'element-plus/dist/index.css' // 引入ElementPlus的CSS
import router from './router' // 导入router文件
import { createPinia } from 'pinia' //
import * as Icons from '@element-plus/icons-vue' // 导入所有的icon的图标


const app = createApp(App)

app.use(ElementPlus)
.use(router)
.use(createPinia())
.mount('#app')

// 遍历所有的icon,把每个icon图标以组件的方式加载到app中
Object.keys(Icons).forEach((key) =>{
    app.component(key, Icons[key as keyof typeof Icons])
})