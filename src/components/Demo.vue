<script lang="ts" setup>
// 浏览器中的script部分 响应用户的操作
import { ElMessageBox } from 'element-plus';
import { UseCounterStore } from '../store/counter'
const store = UseCounterStore()
const queryStudent = () => {
    ElMessageBox.alert('点击成功！', 'Title', {
        confirmButtonText: 'OK',
    });
};
</script>
​
<template>
    <!-- 相当于html中的标签，用户呈现页面的内容 -->
       <h1>Demo中的标签</h1>
        <el-row class="mb-4">
           <el-button>Default</el-button>
           <el-button type="primary" @click="queryStudent">查询</el-button>
           <el-button type="success">添加</el-button>
           <el-button type="info">Info</el-button>
           <el-button type="warning">Warning</el-button>
           <el-button type="danger" @click="store.increment">{{ store.count }}</el-button>
         </el-row>

    ​
</template>
​
<style scoped>
/* 相当于html中的样式 */
h1 {
    color: blue;
}
</style>
