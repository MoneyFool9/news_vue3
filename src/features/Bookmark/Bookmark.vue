<template>
    <div>
        <NewsList :NewsData="BookmarkNews"/>
    </div>
</template>

<script setup>
import NewsList from '@/components/NewsList/NewsList.vue';
import { useBookmarkStore } from '@/store/useBookmark';
import { storeToRefs } from 'pinia';

const { BookmarkNews } = storeToRefs(useBookmarkStore())
</script>

<style lang="scss" scoped>

</style>