<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const iconComponent = ref(null);

watchEffect(() => {
  import(`@/assets/images/svg/${props.name}.svg`)
      .then(module => {
        iconComponent.value = module.default;
      })
      .catch(() => {
        console.error(`Icon ${props.name} not found`);
      });
});

</script>
<template>
  <component :is="iconComponent" />
</template>

<style scoped>


</style>