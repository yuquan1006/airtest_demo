<script lang="ts" setup>
import { Tree } from 'element-ui';

// 定义树的数据
const treeData = [
    {
        label: 'Level one 1',
        children: [
            {
                label: 'Level two 1-1',
                children: [
                    {
                        label: 'Level three 1-1-1',
                    },
                ],
            },
        ],
    },
    {
        label: 'Level one 2',
        children: [
            {
                label: 'Level two 2-1',
                children: [
                    {
                        label: 'Level three 2-1-1',
                    },
                ],
            },
            {
                label: 'Level two 2-2',
                children: [
                    {
                        label: 'Level three 2-2-1',
                    },
                ],
            },
        ],
    },

];

</script>
​
<template>
    <h1>图纸管理系统页面</h1>
        <div class="container">
            <div class="tree-container">
                <el-tree :data="treeData"></el-tree>
            </div>
            <h1>表格区域</h1>
        </div>
</template>
​
<style scoped>
.container {
    display: flex;
}

​ .tree-container {
    width: 300px;
    padding: 10px;
}

</style>