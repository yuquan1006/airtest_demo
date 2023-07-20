<script lang="ts" setup>
// 引入组件
import MenuLogoVue from "./MenuLogo.vue";
import MenuItemVue from "./MenuItem.vue";
// import { computed, ref } from "vue";
import { useCollapseStore } from '../../store/Collapse'
const Collapse = useCollapseStore()


</script>
<template>
    <MenuLogoVue v-if="!Collapse.iscollapse" class="layout-logo"></MenuLogoVue>
    <el-menu active-text-color="#ffd04b" background-color="#30415" default-active="2" class="el-menu-vertical-demo"
        text-color="#fff" :collapse="Collapse.iscollapse" router>
        <MenuItemVue></MenuItemVue>

         
    </el-menu>
</template>


<style scoped>
.el-menu-item {
    display: block;
    text-align: center;
}

​ .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
    min-height: 400px;
}

​ .el-menu {
    border-right: none;
}

​ .el-menu-item {
    color: #f4f4f5 !important;
}

​:deep(.el-sub-menu .el-sub-menu__title) {
    color: #f4f4f5 !important;
}

/* .el-submenu .is-active .el-submenu__title {
  border-bottom-color: #1890ff;
} */
:deep(.el-menu .el-menu-item) {
    color: #bfcbd9;
}

​

/* 菜单点中文字的颜色 */
:deep(.el-menu-item.is-active) {
    color: #409eff !important;
}

/* 当前打开菜单的所有子菜单颜色 */
:deep(.is-opened .el-menu-item) {
    background-color: #1f2d3d !important;
}

/* 鼠标移动菜单的颜色 */
:deep(.el-menu-item:hover) {
    background-color: #001528 !important;
}





​ .layout-logo {
    animation: logoAnimation 1s ease-out;
}
</style>

