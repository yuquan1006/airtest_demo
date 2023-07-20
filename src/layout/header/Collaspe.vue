<template>
        <el-icon>
            <component class="icons" :is="Collapse.iscollapse ? Expand:Fold" @click="Collapse.changeCollapse"></component>
        </el-icon>
</template>

<script setup lang="ts">
// 导入图标
import { Fold, Expand } from '@element-plus/icons-vue'

import { useCollapseStore } from '../../store/Collapse'
const Collapse = useCollapseStore()

</script>

<style scoped>
    .el-icon{
        font-size: 22px;
        margin-right: 20px;
    }
</style>