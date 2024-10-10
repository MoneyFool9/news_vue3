<template>
  <NavBar
    class="fixed tp-fixed"
  />
<router-view></router-view>
</template>

<script setup>
import NavBar from './components/NavBar.vue';



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