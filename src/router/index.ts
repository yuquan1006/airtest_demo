// 导入组件
import { createRouter,createWebHistory,RouteRecordRaw } from "vue-router"
// 导入组件
// import HelloWorld from '../components/HelloWorld.vue'
import Demo from '../components/Demo.vue'
import Layout from '../layout/Index.vue'


// 创建路由匹配的数据集合 -- Array
const routes:Array<RouteRecordRaw> = [
    {
        path:'/demo',
        component:Demo
    },
   // 首页 ———> /dashboard/
    {
        path:'/',
        component:Layout,
        name:'Layout',
        redirect:'/dashboard', //自动跳转
        children:[
            {
                path: '/dashboard',
                component: ()=>import('../views/index/Dashboard.vue'),
                name:'Dashboard',
                meta:{
                    title:'首页'
                },
            }
        ]
    },
    // 数据管理【图纸管理系统、项目管理系统、资料存储系统】
    {
        path:'/datasys',
        component:Layout,
        name:'Datasys',
        meta:{
            title:'数据管理'
        },
        children:[
            {
                path:'/datasys/DrawingManagementSystem',
                component:()=>import('../views/datasys/DrawingMS.vue'),
                name:'DrawingMS',
                meta:{
                    title:'图纸管理系统'
                },
            },
            {
                path:'/datasys/ProjectSystem',
                component:()=>import('../views/datasys/ProjectS.vue'),
                name:'ProjectS',
                meta:{
                    title:'项目管理系统'
                },
            },
            {
                path:'/datasys/FileSystem',
                component:()=>import('../views/datasys/FileS.vue'),
                name:'FileS',
                meta:{
                    title:'资料存储系统'
                },
            },
        ]
    },
    // 用户角色【登录账号、角色信息、菜单管理、权限管理】
    {
        path:'/user',
        component:Layout,
        name:'User',
        meta:{
            title:'用户角色'
        },
        children:[
            {
                path: '/user/account',
                component: ()=>import('../views/user/Account.vue'),
                name:'Account',
                meta:{
                    title:'登陆账号'
                },
            },
            {
                path: '/user/menu',
                component: ()=>import('../views/user/Menu.vue'),
                name:'Menu',
                meta:{
                    title:'角色信息'
                },
            },
            {
                path: '/user/permission',
                component: ()=>import('../views/user/Permission.vue'),
                name:'Permission',
                meta:{
                    title:'菜单管理'
                },
            },
            {
                path: '/user/roles',
                component: ()=>import('../views/user/Roles.vue'),
                name:'Roles',
                meta:{
                    title:'权限管理'
                },
            },
        ]
    },
]


// 创建一个vue-router的对象
const router = createRouter({
    history:createWebHistory(),
    routes,
})
// 暴露
export default router