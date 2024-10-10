<template>
    <div>
        <Loading v-if="!CarNewsList.length"/>
        <NewsList v-else
            :NewsList="CarNewsList"
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
import { getCarNews } from '@/services';
import { onMounted, ref } from 'vue'

const CarNewsList = ref([])

defineProps([
    "BookmarkNews",
    "addBookmark",
    "deleteBookmark",
    "HiddenNews",
    "addHiddenNew"
])

onMounted(async () => {
    const res = await getCarNews();
    CarNewsList.value = res.data;
})
</script>

<style lang="scss" scoped>

</style>