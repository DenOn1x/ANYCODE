<template>
  <!-- Прелоадер только при первой загрузке -->
  <div v-if="showPreloader" class="preloader">
    <div class="spinner"></div>
  </div>

  <CustomCursor>
    <transition
        name="fade"
        mode="out-in"
        appear
    >
      <div v-if="!loading" :key="$route.fullPath" class="transition-wrapper">
        <layout-header />
        <main class="page">
          <router-view />
        </main>
        <layout-footer />
      </div>
    </transition>
  </CustomCursor>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import LayoutHeader from '@/components/layout/Header.vue';
import LayoutFooter from '@/components/layout/Footer.vue';
import CustomCursor from '@/UI/Cursor.vue';

const loading = ref(true);
const showPreloader = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
    showPreloader.value = false;
  }, 1000); // Имитация загрузки
});
</script>

<style lang="scss">
@import "styles/reset";
@import "styles/global";

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

/* Прелоадер */
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.3s ease;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #000;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Анимация */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>
