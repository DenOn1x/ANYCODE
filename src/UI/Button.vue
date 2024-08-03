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
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  font-family: 'Atyp';
  color: #FFF;
  font-size: 14px;
  font-weight: 400;
  line-height: 124%;
}

.btn-fill {
  padding: 15px 20px;
  border: 1px solid transparent;
  background: #7470ff;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  font-family: 'Atyp';
  color: #FFF;
  font-size: 14px;
  font-weight: 400;
  line-height: 124%;
}

</style>