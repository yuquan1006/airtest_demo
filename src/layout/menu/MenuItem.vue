<template>
    <template v-for="menu in menuList">
    <!-- 如果有children并且children不为空，表示是二级菜单数据，先新建el-sub-menu -->
        <el-sub-menu v-if="menu.children && menu.children.length">
            <template #title style="padding-left: 30px;">
                <el-icon>
                    <component :is="menu.meta.icon" class="icons"></component>
                </el-icon>
                <span>{{menu.meta.title}}</span>
            </template>

                 <!-- 展示二级菜单的第二层 -->
                <template v-for="child in menu.children">
                    <el-menu-item :index="child.path">
                        <el-icon>
                            <component class="icons" :is="child.meta.icon"></component>
                        </el-icon>
                        <span>{{ child.meta.title }}</span>
                    </el-menu-item>
                </template>
            </el-sub-menu>

        <!-- 否则是一级菜单，直接新建el-menu-item -->
        <el-menu-item v-else :index="menu.path">
            <el-icon>
                <component class="icons" :is="menu.meta.icon"></component>
            </el-icon>
            <span>{{ menu.meta.title }}</span>
        </el-menu-item>

    <!-- </template>
    <el-sub-menu index="1">
        <template #title>
            <el-icon>
                <location />
            </el-icon>
            <span>Navigator One</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
        <el-menu-item index="1-3">item three</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="2">
        <template #title>
            <el-icon>
                <location />
            </el-icon>
            <span>Navigator TWO</span>
        </template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
    </el-sub-menu> -->
    </template>
</template>


<script setup lang="ts">
    import { reactive } from 'vue';

        const menuList = reactive([
        {
            path: "/",
            meta: {
                title: "首页",
                icon: "UserFilled",
            },
        },
        {
            path: "/datasys",
            meta: {
                title: "数据管理",
                icon: "HomeFilled",
            },
            children: [
                {
                    path: "/datasys/DrawingManagementSystem",
                    meta: {
                        title: "图纸信息",
                        icon: "VideoCameraFilled",
                    },
                },
                {
                    path: "/datasys/ProjectSystem",
                    meta: {
                        title: "项目管理",
                        icon: "OfficeBuilding",
                    },
                },
                {
                    path: "/datasys/FileSystem",
                    meta: {
                        title: "资料存储",
                        icon: "TakeawayBox",
                    },
                },
            ],
        },
        {
            path: "/user",
            meta: {
                title: "用户角色",
                icon: "Ticket",
            },
            children: [
                {
                    path: "/user/account",
                    meta: {
                        title: "登录账号",
                        icon: "Coordinate",
                    },
                },
                {
                    path: "/user/roles",
                    meta: {
                        title: "角色信息",
                        icon: "CreditCard",
                    },
                },
                {
                    path: "/user/menu",
                    meta: {
                        title: "菜单管理",
                        icon: "DeleteLocation",
                    },
                },
                {
                    path: "/user/permission",
                    meta: {
                        title: "权限管理",
                        icon: "Goods",
                    },
                },
            ],
        },
    ])
</script>

<style scoped>
.el-menu-item {
    display: block;
    text-align: center;
    padding-right: 80px;

}</style>