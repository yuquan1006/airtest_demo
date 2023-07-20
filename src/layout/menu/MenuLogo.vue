<template>
  <div class="logo">
    <img src="../../assets/vue.svg" alt="logo" />
    <span class="title">信息管理系统</span>
  </div>
  <div class="kongge"></div>
</template>

<script setup lang="ts"></script>


<style scoped>
.logo {
    background-color: #2b2f3a;
    height: 50px;
    border: none;
    line-height: 50px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    color: #FFF;
}

.logo img {
    width: 32px;
    height: 32px;
    margin-right: 12px;
}

.logo span {
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    vertical-align: middle;
}

.kongge{
    height: 50px;
}
</style>