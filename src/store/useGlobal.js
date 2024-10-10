import {ref} from 'vue'
import { defineStore } from "pinia";



export const useGlobalStore = defineStore('useGlobal', ()=>{
    const componentName = ref('Hot')
    const NewsListData = ref([])

    return{
        componentName,
        NewsListData
    }
})