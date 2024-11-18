<script setup>

import CareersComponent from "@/components/Careers/CareersComponent.vue";
import CareersForm from "@/components/Careers/CareersForm.vue";
import {useRoute} from "vue-router";

const route = useRoute();

</script>

<template>
  <template v-if="route.name === 'careers'">
    <CareersComponent/>
    <CareersForm/>
  </template>

  <router-view/>
</template>
<style scoped>

</style>