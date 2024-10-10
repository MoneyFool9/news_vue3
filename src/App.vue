<template>
  <NavBar
    class="fixed tp-fixed"
    :toggleBookmark="toggleBookmark"
    :showBookmark="showBookmark" 
  />
<div v-show="!showBookmark">
  <div class="fixed md-fixed">
    <van-tabs v-model:active="componentName">
      <van-tab title="头条" name="Hot"></van-tab>
      <van-tab title="娱乐" name="Entertainment"></van-tab>
      <van-tab title="汽车" name="Car"></van-tab>
      <van-tab title="运动" name="Sport"></van-tab>
    </van-tabs>
  </div>
  <div class="bt-abs">
    <keep-alive>
      <component 
        :is='tabs[componentName]'
        :BookmarkNews="BookmarkNews"
        :addBookmark="addBookmark"
        :deleteBookmark="deleteBookmark"
        :HiddenNews="HiddenNews"
        :addHiddenNew="addHiddenNew"
      ></component>
    </keep-alive>
  </div>
</div>
<div class="abs">
<Bookmark 
  v-show="showBookmark"
  :BookmarkNews="BookmarkNews"
  :deleteBookmark="deleteBookmark"
  :HiddenNews="HiddenNews"
  :addHiddenNew="addHiddenNew"
/>
</div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Car from './features/Car/Car.vue';
import Sport from './features/Sport/Sport.vue';
import Entertainment from './features/Entertainment/Entertainment.vue';
import Hot from './features/Hot/Hot.vue';
import Bookmark from './features/Bookmark/Bookmark.vue';

import { ref } from 'vue'

import { useToggleBookmark, useBookmark } from '@/hooks/useBookmark';
import useHiddenNews from './hooks/useHiddenNews';


const componentName = ref('Hot');
const tabs = { Hot, Entertainment, Car, Sport }

const { showBookmark, toggleBookmark } = useToggleBookmark();
const { BookmarkNews, addBookmark, deleteBookmark } = useBookmark()
const { HiddenNews, addHiddenNew } = useHiddenNews()

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