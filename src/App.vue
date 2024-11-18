<template>
  <CustomCursor>
    <layout-header/>
    <main class="page">
      <transition
          :name="transitionKey"
          mode="out-in"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
          @after-enter="afterEnter"
          @after-leave="afterLeave"
      >
        <div :key="$route.fullPath" class="transition-wrapper">
          <router-view/>
        </div>
      </transition>
    </main>
    <layout-footer/>
  </CustomCursor>
</template>

<script setup>
import {ref, onMounted, watch, nextTick} from 'vue';
import {useRoute} from 'vue-router';
import LayoutHeader from '@/components/layout/Header.vue';
import LayoutFooter from '@/components/layout/Footer.vue';
import CustomCursor from "@/UI/Cursor.vue";
import {slideUpIn, slideUpOut} from '@/gsapAnimations';

const route = useRoute();
const transitionKey = ref('initial');

// Обновляем transitionKey на основе данных маршрута
onMounted(() => {
  watch(
      () => route.meta.transitionName,
      (newTransition) => {
        transitionKey.value = newTransition || 'slide-up';
      }
  );
});

// Сбрасываем стили перед анимацией входа
function beforeEnter(el) {
  el.style.opacity = ''; // Убираем любые стили, чтобы они не сохранялись
  el.style.transform = '';
  el.classList.remove('transition-enter-active');
  el.classList.remove('transition-leave-active');
}

// Запуск анимации входа
function enter(el, done) {
  nextTick(() => {
    el.classList.add('transition-enter-active');
    slideUpIn(el, done);
  });
}

// Запуск анимации выхода
function leave(el, done) {
  nextTick(() => {
    el.classList.add('transition-leave-active');
    slideUpOut(el, done);
  });
}

// Убираем стили после завершения анимации входа
function afterEnter(el) {
  el.classList.remove('transition-enter-active');
  el.style.opacity = ''; // Сбросить стили
  el.style.transform = ''; // Сбросить стили
}

// Убираем стили после завершения анимации выхода
function afterLeave(el) {
  el.classList.remove('transition-leave-active');
  el.style.opacity = ''; // Сбросить стили
  el.style.transform = ''; // Сбросить стили
}
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
  /* Дефолтные стили, либо пусто */
}

.slide-up-enter-active, .slide-up-leave-active {
  transition: opacity 1s ease, transform 1s ease;
}

.slide-up-enter, .slide-up-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>
