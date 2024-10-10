<template>
    <div>
        <Loading v-if="!SportNewsList.length"/>
        <NewsList v-else
            :NewsList="SportNewsList"
            :BookmarkNews="BookmarkNews"
            :addBookmark="addBookmark"
            :deleteBookmark="deleteBookmark"
            :HiddenNews="HiddenNews"
            :addHiddenNew="addHiddenNew"
        />
    </div>
</template>

<script setup>
import Loading from '@/components/Loading/Loading.vue';
import NewsList from '@/components/NewsList/NewsList.vue';
import { getSportNews } from '@/services';
import { onMounted, ref } from 'vue'

const SportNewsList = ref([])

defineProps([
    "BookmarkNews",
    "addBookmark",
    "deleteBookmark",
    "HiddenNews",
    "addHiddenNew"
])

onMounted(async () => {
    const res = await getSportNews();
    SportNewsList.value = res.data;
})
</script>

<style lang="scss" scoped>

</style>