<template>
  <div class="main">
    <div id="msg-list">
      <van-list>
        <!-- <div class="msg-item" v-for="item in list" :key="item">
          {{ item.role }}
          {{ item.content }}
        </div> -->
        <van-cell class="msg-item" v-for="item in list" :key="item">
          {{ item.content }}
        </van-cell>
      </van-list>
    </div>
    <van-search
      v-model="content"
      show-action
      placeholder="请输入"
      @search="handleSend"
    >
      <template #action>
        <div @click="handleSend">发送</div>
      </template>
    </van-search>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { getTextGeneration } from '../service/index';
  import { nextTick } from 'vue';
  const content = ref('');

  const list = ref([]);

  const onRefresh = () => {
    list.value = [];
  };

  const handleSend = () => {
    if (!content.value) return;
    list.value.push({
      role: 'user',
      content: content.value,
    });
    content.value = '';
    getTextGeneration(list.value.filter((i) => i.role === 'user')).then(
      (res) => {
        if (res.data.finish_reason === 'stop') {
          list.value.push({ role: 'assistant', content: res.data.text });
          nextTick(() => {
            const scrollableDiv = document.getElementById('msg-list');
            scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
          })
        }
      },
    );
  };
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
    padding-top: 40px;
    padding-bottom: 120px;
    box-sizing: border-box;
  }
  .van-search {
    border-radius: 8px;
    position: fixed;
    bottom: 60px;
    left: 0;
    right: 0;
  }
  .msg-item{
    margin-bottom: 24px;
    border-radius: 8px;
  }
  #msg-list{
    flex: 1;
    overflow: scroll;
  }
</style>
