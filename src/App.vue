<template>
  <Main />
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Main from './components/ChatList.vue'

const test: { a: string } = {
  a: ''
}

const active = ref(0);

const windowHeight = window.innerHeight;
// 获取要设置高度的元素
const myElement = document.getElementById("app");
// 设置元素的高度为窗口的可视高度
myElement.style.height = windowHeight + "px";
</script>
<style>
body{
  overflow: hidden;
  /* max-height: -webkit-fill-available; */
  flex-direction: column;
}
#app{
  width: 100%;
  box-sizing: border-box;
  position: relative;
  background: #fff;
  /* margin-top: 40px;
  margin-bottom: 100px; */
  margin: 0;
  padding: 0;
  /* height: -webkit-fill-available; */
  /* height: 300px; */
}
.van-search__field .van-field__left-icon{
  display: none;
}
</style>

<style scoped>

</style>
