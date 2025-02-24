<script setup>
import {ref, onMounted} from 'vue';
import LayoutHeader from '@/components/layout/Header.vue';
import LayoutFooter from '@/components/layout/Footer.vue';
import CustomCursor from '@/UI/Cursor.vue';


const loading = ref(true);
const showPreloader = ref(true);
const isLargeScreen = ref(window.innerWidth > 767.98);

onMounted(() => {
  if (!isLargeScreen.value) {
    loading.value = false;
    showPreloader.value = false;
  } else {
    setTimeout(() => {
      loading.value = false;
      showPreloader.value = false;
    }, 1000);
  }
});
</script>

<template>
  <div v-if="showPreloader" class="preloader">
    <div class="preloader-text">
      ANYC<span class="spinner"></span>DE
    </div>
  </div>

  <CustomCursor>
    <transition
        v-if="isLargeScreen"
        name="fade"
        mode="out-in"
        appear
    >
      <div v-if="!loading" :key="$route.fullPath" class="transition-wrapper">
        <layout-header/>
        <main class="page">
          <router-view :openModal="openModal"/>
        </main>
        <layout-footer/>
      </div>
    </transition>
    <div v-else-if="!loading" :key="$route.fullPath" class="transition-wrapper">
      <layout-header/>
      <main class="page">
        <router-view/>
      </main>
      <layout-footer/>
    </div>

  </CustomCursor>


</template>


<style lang="scss">
@import "styles/reset";
@import "styles/global";

html {
  scrollbar-gutter: stable;

  &.no-scroll {
    overflow: hidden;
  }
}

.page {
  margin-top: 80px;
  @media screen and (min-width: 767.98px) {
    margin-top: 0;
  }
}

.transition-wrapper {
  width: 100%;
  height: 100%;
}

.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #070707;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity .1s ease;
}

.spinner {
  min-width: 30px;
  width: 30px;
  height: 30px;
  border: 8px solid rgba(255, 255, 255, 0.1);
  border-top: 8px solid #FFF;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
}

.preloader-text {
  font-size: 64px;
  font-weight: 700;
  color: #FFF;
  display: flex;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

</style>
