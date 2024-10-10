<template>
    <div>
        <NewsItem 
            v-if="filteredNews.length"
            v-for="(item, index) of filteredNews"
            :key="index"
            :currentNew="item"
            class="NewsItem"
            :NewsList="NewsList"
            :BookmarkNews="BookmarkNews"
            :addBookmark="addBookmark"
            :deleteBookmark="deleteBookmark"
            :isBookmark="isBookmark"
            :addHiddenNew="addHiddenNew"
            :isHiddenNew="isHiddenNew"
        />
    </div>
</template>

<script setup>
import NewsItem from './Item.vue';
import { computed } from 'vue'

const props = defineProps([
    "NewsList",
    "BookmarkNews",
    "addBookmark",
    "deleteBookmark",
    "HiddenNews",
    "addHiddenNew"
])

function isBookmark(currentNew){
    return props.BookmarkNews.some(
        (current)=>current.title === currentNew.title
    )
}
function isHiddenNew(currentNew){
    if(props.HiddenNews){
        return props.HiddenNews.some(
        (current)=>current.title === currentNew.title
    )
    }
   
}
const filteredNews = computed(()=>{
    return props.NewsList.filter((current)=> !isHiddenNew(current))
})

</script>

<style lang="scss" scoped>
.NewsItem{
    margin-top: 10px;
}
</style>