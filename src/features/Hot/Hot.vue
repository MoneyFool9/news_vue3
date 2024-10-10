<template>
    <div>
        <Loading v-if="!NewsListData.length"/>
        <NewsList v-else :NewsData="NewsListData"/>
    </div>
</template>

<script setup>
import Loading from '@/components/Loading.vue';
import NewsList from '@/components/NewsList/NewsList.vue';
import { getHotNews } from '@/services';
import { onMounted, ref } from 'vue'

import { useGlobalStore } from '@/store/useGlobal';
import { storeToRefs } from 'pinia';

const { NewsListData } = storeToRefs(useGlobalStore())

onMounted(async () => {
    NewsListData.value = []
    const res = await getHotNews();
    NewsListData.value = res.data;
})

</script>

<style lang="scss" scoped>

</style>