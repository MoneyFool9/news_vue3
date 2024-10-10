<template>
    <div>
        <NewsList 
            :NewsList="BookmarkNews"
            :BookmarkNews="BookmarkNews"
            :deleteBookmark="deleteBookmark"
            :HiddenNews="HiddenNews"
            :addHiddenNew="addHiddenNew"
        />
    </div>
</template>

<script setup>
import NewsList from '@/components/NewsList/NewsList.vue';

defineProps([
    "BookmarkNews",
    "deleteBookmark",
    "HiddenNews",
    "addHiddenNew"
])



</script>

<style lang="scss" scoped>

</style>