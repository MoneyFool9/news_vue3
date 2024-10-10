import { defineStore } from "pinia";
import {ref} from 'vue'

export const useHiddenNewsStore = defineStore('useHiddenNews', ()=>{
    const HiddenNews = ref([])

    function addHiddenNew(HiddenNew){
        HiddenNews.value = [...new Set([...HiddenNews.value, HiddenNew])]
    }

    return {
        HiddenNews,
        addHiddenNew
    }
})