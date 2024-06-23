<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Button'
  },
  color: {
    type: String,
    default: 'initial'
  }
});
</script>
<template>
  <button :class="['btn',`btn-${color}`]">{{ label }}</button>
</template>

<style scoped>

.btn-stroke {
  padding: 15px 20px;
  background: none;
  border: .5px solid #747474;
  border-radius: 10px;
  color: #FFF;
  font-size: 16px;
}

</style>