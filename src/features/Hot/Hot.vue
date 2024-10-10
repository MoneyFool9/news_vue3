<template>
    <div>
        <Loading v-if="!HotNewsList.length"/>
        <NewsList v-else
            :NewsList="HotNewsList"
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
import { getHotNews } from '@/services';
import { onMounted, ref } from 'vue'

const HotNewsList = ref([])

defineProps([
    "BookmarkNews",
    "addBookmark",
    "deleteBookmark",
    "HiddenNews",
    "addHiddenNew"
])

onMounted(async () => {
    const res = await getHotNews();
    HotNewsList.value = res.data;
})

</script>

<style lang="scss" scoped>

</style>