import { ref } from 'vue'
import { defineStore } from "pinia"
import { setLocalStorage, getLocalStorage } from '@/utils/localStorageHelper'
import { useRouter } from 'vue-router'

export const useBookmarkStore = defineStore('useBookmark', () => {
    const BookmarkNews = ref(getLocalStorage("bookmark") || [])
    const showBookmark = ref(false);
    const router = useRouter()
    
    function toBookmark () {
        if(showBookmark.value){
            router.push('/')
        }else{
            router.push('/bookmark')
        }
        showBookmark.value = !showBookmark.value;
    }

    function addBookmark(addNew){
        BookmarkNews.value = [...new Set([...BookmarkNews.value, addNew])]

        setLocalStorage("bookmark", BookmarkNews.value)
    }

    function deleteBookmark(deleteNew){
        BookmarkNews.value = BookmarkNews.value.filter(
            (CurrentBookmarkNew)=>CurrentBookmarkNew.title !== deleteNew.title)
        
        setLocalStorage("bookmark", BookmarkNews.value)
        console.log('delete');
        
    }

    return {
        BookmarkNews,
        showBookmark,
        toBookmark,
        addBookmark,
        deleteBookmark
    }
  })