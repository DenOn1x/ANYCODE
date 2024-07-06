<script setup>
import LayoutHeader from '@/components/layout/Header.vue'
import LayoutFooter from '@/components/layout/Footer.vue'
</script>

<template>
  <layout-header/>
  <main class="page">
    <router-view/>
  </main>
  <layout-footer/>

</template>

<style lang="scss">
@import "styles/reset";
@import "styles/global";

.page {
  margin-top: 80px;
  @media screen and (min-width: 767.98px) {
    margin-top: 0;
  }
}

</style>
