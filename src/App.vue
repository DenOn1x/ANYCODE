<script setup>
import LayoutHeader from '@/components/layout/Header.vue'
</script>

<template>
<!--  <div class="container">-->
    <layout-header/>
    <div class="content">
      <router-view/>
    </div>
<!--  </div>-->
</template>

<style lang="scss">
@import "styles/reset";
@import "styles/global";

</style>
