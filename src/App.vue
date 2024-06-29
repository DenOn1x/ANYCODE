<script setup>
import LayoutHeader from '@/components/layout/Header.vue'
</script>

<template>
  <layout-header/>
  <main class="page">
    <router-view/>
  </main>
</template>

<style lang="scss">
@import "styles/reset";
@import "styles/global";

</style>
