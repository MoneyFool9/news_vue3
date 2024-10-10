import { createWebHistory, createRouter } from 'vue-router'
import NewsPage from '@/pages/NewsPage/NewsPage.vue'
import Bookmark from '@/pages/Bookmark/Bookmark.vue'

const routes = [
  {
    path: '/',
    component: NewsPage
  },
  {
    path: '/bookmark',
    component: Bookmark
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router