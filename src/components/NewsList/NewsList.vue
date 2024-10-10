<template>
    <div>
        <NewsItem 
            v-if="filteredNews && filteredNews.length"
            v-for="(item, index) of filteredNews"
            :key="index"
            :currentNew="item"
            class="NewsItem"
            :isBookmark="isBookmark"
            :isHiddenNew="isHiddenNew"
        />
    </div>
</template>

<script setup>
import NewsItem from './Item.vue';
import { computed } from 'vue'
import { storeToRefs } from 'pinia';
import { useBookmarkStore } from '@/store/useBookmark';
import { useHiddenNewsStore } from '@/store/useHiddenNews';

const { BookmarkNews } = storeToRefs(useBookmarkStore())
const { HiddenNews } = storeToRefs(useHiddenNewsStore())
const props = defineProps(["NewsData"])


function isBookmark(currentNew){
    return BookmarkNews.value.some(
        (current)=>current.title === currentNew.title
    )
}
function isHiddenNew(currentNew){
    if(HiddenNews){
        return HiddenNews.value.some(
        (current)=>current.title === currentNew.title
    )
    }
   
}
const filteredNews = computed(()=>{
        return props.NewsData && props.NewsData.filter((current)=> !isHiddenNew(current))
    
})

</script>

<style lang="scss" scoped>
.NewsItem{
    margin-top: 10px;
}
</style>