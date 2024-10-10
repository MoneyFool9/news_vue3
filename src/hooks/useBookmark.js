import { ref } from 'vue'
import { getLocalStorage, setLocalStorage } from '@/utils/localStorageHelper';


const useToggleBookmark = ()=>{
    const showBookmark = ref(false);
    const toggleBookmark = ()=> {
        showBookmark.value = !showBookmark.value;
    }

    return {
        showBookmark,
        toggleBookmark
    }
}

const useBookmark = ()=>{
    const BookmarkNews = ref(getLocalStorage("bookmark") || [])

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
        addBookmark,
        deleteBookmark
    }
}

export {
    useToggleBookmark,
    useBookmark
}