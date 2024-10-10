<template>
    <div>
        <Loading v-if="!EntertainmentNewsList.length"/>
        <NewsList v-else
            :NewsList="EntertainmentNewsList"
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
import { getEntertainmentNews } from '@/services';
import { onMounted, ref } from 'vue'

const EntertainmentNewsList = ref([])

defineProps([
    "BookmarkNews",
    "addBookmark",
    "deleteBookmark",
    "HiddenNews",
    "addHiddenNew"
])

onMounted(async () => {
    const res = await getEntertainmentNews();
    EntertainmentNewsList.value = res.data;
})
</script>

<style lang="scss" scoped>

</style>