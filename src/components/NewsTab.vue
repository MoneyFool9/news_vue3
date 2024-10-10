<template>
    <div class="fixed md-fixed">
    <van-tabs v-model:active="store.componentName">
      <van-tab title="头条" name="Hot"></van-tab>
      <van-tab title="娱乐" name="Entertainment"></van-tab>
      <van-tab title="汽车" name="Car"></van-tab>
      <van-tab title="运动" name="Sport"></van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { useGlobalStore } from '@/store/useGlobal';

const store = useGlobalStore()


</script>

<style lang="scss" scoped>
.fixed{
  position: fixed;
  left: 0;
  width: 100%;
}
.tp-fixed{
  top: 0;
  z-index: 100;
}
.md-fixed{
  top: 46px;
  z-index: 200;
}
.bt-abs{
  position: absolute;
  left: 0;
  top: 90px;
}
.abs{
  position: absolute;
  left: 0;
  top: 46px;
}
</style>