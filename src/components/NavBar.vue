<template>
    <van-nav-bar 
        title="热点新闻"
        :left-text="leftText"
        right-text="刷新"
        @click-right="refresh"
        @click-left="toBookmark"
    />
</template>

<script setup>
import { computed } from 'vue'
import { useBookmarkStore } from '@/store/useBookmark';
import { storeToRefs } from 'pinia';

const { showBookmark } = storeToRefs(useBookmarkStore())
const { toBookmark } = useBookmarkStore()

const leftText = computed(()=>{
    return showBookmark.value ? '返回' : '收藏';
})
const refresh = () => {
    window.location.reload();
}
</script>

<style lang="scss" scoped>

</style>
