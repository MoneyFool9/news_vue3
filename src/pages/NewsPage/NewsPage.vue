<template>
   
  <NewsTab />
  <div class="bt-abs">
      <component 
        :is='tabs[store.componentName]'
      ></component>
  </div>

</template>

<script setup>
import NewsTab from '@/components/NewsTab.vue';
import Car from '@/features/Car/Car.vue';
import Sport from '@/features/Sport/Sport.vue';
import Entertainment from '@/features/Entertainment/Entertainment.vue';
import Hot from '@/features/Hot/Hot.vue';

import { useGlobalStore } from '@/store/useGlobal';


const store = useGlobalStore()
const tabs = { Hot, Entertainment, Car, Sport }


</script>

<style lang="scss" scoped>
.fixed{
  position: fixed;
  left: 0;
  width: 100%;
}
.tp-fixed{
  top: 0;
  z-index: 100;
}
.md-fixed{
  top: 46px;
  z-index: 200;
}
.bt-abs{
  position: absolute;
  left: 0;
  top: 90px;
}
.abs{
  position: absolute;
  left: 0;
  top: 46px;
}
</style>