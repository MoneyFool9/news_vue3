<template>
    <div>
        <van-card
            :thumb="currentNew.imgList[0]"
        >  
            <template #title>
                <p class="card-title">{{ currentNew.title }}</p>
            </template>
            <template #desc>
                <van-text-ellipsis rows="3" :content="currentNew.digest" />
            </template>
            <template #footer>
                <div class="footer">
                    <span class="detail source">来自：{{ currentNew.source }}</span>
                    <span class="detail postTime">{{ currentNew.postTime }}发布</span>
                    <div>
                        <van-button size="mini" type="primary" plain @click="isBookmark(currentNew) ? deleteBookmark(currentNew) : addBookmark(currentNew)">{{ isBookmark(currentNew) ? '取消收藏' : '收藏' }}</van-button>
                        <van-button size="mini" type="danger" plain v-if="!isHiddenNew(currentNew)" @click="addHiddenNew(currentNew)">隐藏</van-button>
                    </div>
                </div>
            </template>
    
        </van-card>

    </div>
</template>

<script setup>
const props = defineProps([
    "currentNew",
    "BookmarkNews",
    "addBookmark",
    "deleteBookmark",
    "isBookmark",
    "addHiddenNew",
    "isHiddenNew"
])

</script>

<style lang="scss" scoped>
.footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.source{
    font-size: 12px;
    font-weight: 600;
}

.card-title{
    font-size: 16px;
    font-weight: 800;
    line-height: 18px;
}
</style>