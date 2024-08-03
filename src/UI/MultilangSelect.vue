<script setup>
import {ref, getCurrentInstance, onMounted, onUnmounted, computed} from 'vue';
import icChevron from "@/assets/images/svg/ic_chevron.svg?url";

const options = [
  {value: 'en', label: 'en'},
  {value: 'ru', label: 'ру'}
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

const filteredOptions = computed(() => {
  return options.filter(option => option.label !== selectedLanguage.value);
});
</script>

<template>
  <div class="custom-select" :class="{ open: isOpen }">
    <div class="selected-option" @click="toggleDropdown">
      {{ selectedLanguage }}
      <img class="arrow"
           :src="icChevron" alt=""
           :class="{ 'arrow-up': isOpen, 'arrow-down': !isOpen }"
      />
    </div>
    <div class="options">
      <div v-for="option in filteredOptions" :key="option.value" class="option" @click="selectOption(option)">
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/styles/common.scss";

.custom-select {
  position: relative;
  display: inline-block;
  padding: 10px 0;
  width: 62px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 10px;

  @media screen and (min-width: 767.98px) {
    padding: 12px 0;
    width: 64px;
  }

  &.open {
    .options {
      display: flex;
      animation: dropdown-animation .5s cubic-bezier(0.6, -0.55, 0.3, 2) forwards;
    }
  }
}

.selected-option {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #FFF;
  font-size: 14px;
  font-weight: 400;
  line-height: 124%;
  cursor: pointer;

}

.options {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: calc(100% + 1px);
  z-index: 11;

  .option {
    color: #FFF;
    font-size: 14px;
    font-weight: 400;
    line-height: 124%;
    cursor: pointer;
    padding: 10px;
    border: .5px solid #ffffff5c;
    border-top: none;
    border-bottom: none;
    border-radius: 10px;
    margin-top: 5px;
    @media screen and (min-width: 767.98px) {
      font-size: 16px;
      padding: calc(15px);
    }
    @media screen and (min-width: 991.98px) {
      &:hover {
        opacity: .7;
      }
    }
  }
}


.arrow {
  display: block;
  min-width: 10px;
  width: 10px;
  height: 8px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.3s ease;
  cursor: pointer;

  &.arrow-up {
    transform: rotate(180deg);
  }
}

@keyframes dropdown-animation {
  0% {
    transform: scaleY(0);
  }
  50% {
    transform: scaleY(1.01);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
