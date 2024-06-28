<script setup>
import {ref, getCurrentInstance, onMounted, onUnmounted} from 'vue';

const options = [
  {value: 'en', label: 'EN'},
  {value: 'ru', label: 'РУ'}
];

const selectedLanguage = ref(options[0].label);
const isOpen = ref(false);
const instance = getCurrentInstance();

const selectOption = (option) => {
  selectedLanguage.value = option.label;
  changeLanguage(option.value);
  isOpen.value = false;
};

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const changeLanguage = (locale) => {
  instance.proxy.$i18n.locale = locale;
  instance.proxy.$router.push({path: `/${locale}`});
};

const handleClickOutside = (event) => {
  if (isOpen.value && !event.target.closest('.custom-select')) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="custom-select">
    <div class="selected-option" @click="toggleDropdown">{{ selectedLanguage }}</div>
    <div v-show="isOpen" class="options">
      <div v-for="option in options" :key="option.value" class="option" @click="selectOption(option)">
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-select {
  position: relative;
  display: inline-block;
  width: 200px;
}

.selected-option {
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: #fff;
}

.options {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #fff;
  z-index: 1;
}

.custom-select:hover .options {
  display: block;
}

.option {
  padding: 10px;
  cursor: pointer;
}

.option:hover {
  background-color: #f0f0f0;
}
</style>
