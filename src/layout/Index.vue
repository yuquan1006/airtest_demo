<script setup lang="ts">
import MenuVue from './menu/Menu.vue'
import HeaderVue from './header/Header.vue'
// import { Setting } from "@element-plus/icons-vue";
</script>
<template>
        <el-container class="common-layout">
            <el-aside class="aside" width="auto">
                <MenuVue></MenuVue>
            </el-aside>
            <el-container>
                <el-header class="header">
                    <HeaderVue></HeaderVue>
                </el-header>
                <el-main class="main">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
</template>

<style scoped>
.common-layout {
    height: 100%;
}

.aside {
    background-color:#304156;
}

.header {
    height: 50px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.main {
    background-color: azure;
}
</style>