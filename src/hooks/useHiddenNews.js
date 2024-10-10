import { ref } from 'vue'

const useHiddenNews = ()=>{
    const HiddenNews = ref([])

    function addHiddenNew(HiddenNew){
        HiddenNews.value = [...new Set([...HiddenNews.value, HiddenNew])]
    }

    return {
        HiddenNews,
        addHiddenNew
    }
}
export default useHiddenNews