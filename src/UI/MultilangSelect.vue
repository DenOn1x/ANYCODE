<script setup>
import {ref, getCurrentInstance, onMounted, onUnmounted, computed, watch} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import icChevron from "@/assets/images/svg/ic_chevron.svg?url";

const options = [
  {value: 'en', label: 'en'},
  {value: 'ru', label: 'ру'}
];

const selectedLanguage = ref(options[0].label);
const isOpen = ref(false);
const route = useRoute();
const router = useRouter();
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
  const {$i18n, $router, $route} = instance.proxy;
  const currentFullPath = $route.fullPath;
  const pathParts = currentFullPath.split('/');
  const [, , ...rest] = pathParts;
  const newPath = `/${locale}${rest.length ? '/' + rest.join('/') : ''}`.replace(/\/+$/, '');
  $i18n.locale = locale;
  $router.push({path: newPath});
};

const handleClickOutside = (event) => {
  if (isOpen.value && !event.target.closest('.custom-select')) {
    isOpen.value = false;
  }
};

watch(
    () => route.path,
    (newPath) => {
      const currentLanguage = newPath.split('/')[1];
      const matchingOption = options.find(option => option.value === currentLanguage);
      if (matchingOption) {
        selectedLanguage.value = matchingOption.label;
      }
    },
    {immediate: true}
);

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

<style scoped lang="scss">
@import "@/styles/common.scss";

.custom-select {
  position: relative;
  display: inline-block;


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
  padding: 10px 0;
  min-width: 60px;

  color: #FFF;
  font-size: 14px;
  font-weight: 400;
  line-height: 124%;
  cursor: pointer;

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

}

.options {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 11;

  .option {
    color: #FFF;
    font-size: 14px;
    font-weight: 400;
    line-height: 124%;

    width: 100%;
    cursor: pointer;
    padding: 8px 12px 8px 12px;
    background: rgb(7 7 7 / 80%);
    box-shadow: rgba(255, 255, 255, 0.55) 0 0 5px;
    border-radius: 8px;
    margin-top: 10px;
    transition: .1s ease;
    @media screen and (min-width: 991.98px) {
      &:hover {
        filter: brightness(.7);
      }
    }
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
