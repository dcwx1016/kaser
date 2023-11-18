<script lang="ts" setup>
import Main from './components/ChatList.vue'

const test: { a: string } = {
  a: ''
}

</script>

<template>
  <Main />
</template>

<style>
#app{
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  overflow: scroll;
  padding: 24px;
  background-color: #eff2f5;
  position: relative;
}
.van-search__field .van-field__left-icon{
  display: none;
}
</style>
