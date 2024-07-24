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
  border: .5px solid #ffffff5c;
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Inter';
  color: #FFF;
  font-size: 16px;
  font-weight: 400;
  line-height: 124%;
}

.btn-fill {
  padding: 15px 20px;
  border: .5px solid transparent;
  background: #24ff00;
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Inter';
  color: #070707;
  font-size: 16px;
  font-weight: 400;
  line-height: 124%;
}

</style>