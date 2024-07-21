<script setup>
import {ref, onMounted, watch} from 'vue';
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import QuizStart from "@/components/QuizStart.vue";

const splideOptions = {
  type: 'fade',
  fixedWidth: '100%',
  gap: 0,
  drag: false,
  perMove: 1,
  arrows: true,
  pagination: false,
  mediaQuery: 'min',
  breakpoints: {}
};

const splideRef = ref(null);
const currentSlide = ref(0);
const totalSlides = ref(4);
const progressBarWidth = ref('0%');

const updateProgressBar = () => {
  if (totalSlides.value > 1) {
    progressBarWidth.value = `${(currentSlide.value / (totalSlides.value - 1)) * 100}%`;
  } else {
    progressBarWidth.value = '100%';
  }
};

onMounted(() => {
  const splideInstance = splideRef.value?.splide;

  if (splideInstance) {
    splideInstance.on('mounted', () => {
      totalSlides.value = splideInstance.Components.Slides.getLength();
      updateProgressBar();
    });

    splideInstance.on('move', () => {
      currentSlide.value = splideInstance.index;
      updateProgressBar();
    });
  }
});

watch(splideRef, (newVal) => {
  if (newVal?.splide) {
    totalSlides.value = newVal.splide.Components.Slides.getLength();
    updateProgressBar();
  }
});
</script>

<template>
  <section class="quiz">
    <div class="container">
      <div class="quiz__top">
        <h2>Квиз</h2>
        <div class="quiz__desc">Описание</div>
      </div>
      <div class="quiz__wrapper">
        <div class="quiz__info"></div>
        <form action="#" method="POST" class="quiz__cards">
          <div class="quiz__title">Ответьте на вопросы и получите расчёт стоимости проекта</div>
          <Splide ref="splideRef" :options="splideOptions" data-slider="quiz" aria-label="">
            <SplideSlide>
              <QuizStart/>
            </SplideSlide>
            <SplideSlide>
              <QuizSlide/>
            </SplideSlide>
            <SplideSlide>
              <QuizSlide/>
            </SplideSlide>
            <SplideSlide>
              <QuizSlide/>
            </SplideSlide>
          </Splide>
          <div class="quiz-progress">
            <div class="quiz-progress-bar" :style="{ width: progressBarWidth }"></div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.quiz {
  margin-top: 60px;
  @media screen and (min-width: 991.98px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 1199.98px) {
    margin-top: 80px;
  }

  &__top {
    display: grid;
    gap: 5px;
    margin-bottom: 20px;

    h2 {
      font-size: 24px;
      font-weight: 700;
      line-height: 148%;
      color: #FFF;

      @media screen and (min-width: 767.98px) {
        font-size: 32px;
      }
      @media screen and (min-width: 991.98px) {
        font-size: 44px;
        line-height: 132%;
      }
      @media screen and (min-width: 1199.98px) {
        font-size: 52px;
      }
      @media screen and (min-width: 1639.98px) {
        font-size: 58px;
      }
    }
  }

  &__desc {
    font-size: 14px;
    font-weight: 700;
    line-height: 148%;
    color: #747474;

    @media screen and (min-width: 767.98px) {
      font-size: 16px;
    }
    @media screen and (min-width: 1199.98px) {
      font-size: 20px;
    }
  }

  &__wrapper {
    @media screen and (min-width: 991.98px) {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 80px;
    }
  }


  form {
    position: relative;
    padding: 24px;
    border-radius: 10px;
    background: linear-gradient(-45deg, rgb(125, 255, 112) 0%, rgba(255, 255, 255, 0.01) 25%);
    box-shadow: rgba(255, 255, 255, 0.1) 0 5px 10px;
    @media screen and (min-width: 991.98px) {
      padding: 48px;
      flex: 0 0 60%;
    }

    .quiz__title {
      font-size: 16px;
      font-weight: 700;
      line-height: 148%;
      color: #FFF;
      @media screen and (min-width: 991.98px) {
        font-size: 24px;
      }
    }
  }

  .quiz-progress {
    position: absolute;
    top: calc(10% + 40px);
    left: 0;
    width: 100%;
    height: 2px;
    background: #747474;
    @media screen and (min-width: 767.98px) {
      top: calc(10% + 20px);
    }
    @media screen and (min-width: 991.98px) {
      top: calc(20% + 20px);
    }
    @media screen and (min-width: 1439.98px) {
      top: calc(10% + 60px);
    }

    .quiz-progress-bar {
      height: 100%;
      background: #7DFF7A;
      transition: width 0.3s;
    }
  }
}

::v-deep .splide {
  padding: 60px 0 80px;
  @media screen and (min-width: 1439.98px) {
    padding: 80px 0;
  }

  &__pagination {
  }

  &__pagination__page {
    &.is-active {
    }
  }

  &__arrow {
    top: initial;
    bottom: 0;
    border-radius: 10px;
    width: initial;
    height: initial;
    transform: initial;
    padding: 15px 20px;
    background: #7DFF7A;
    opacity: 1;

    &:disabled {
      opacity: .1;
    }

    svg {
      display: none;
    }
  }

  &__arrow--prev {
    left: 0;

    &:before {
      content: 'Назад';
      font-family: 'Inter';
      color: #070707;
      font-size: 16px;
      font-weight: 400;
      line-height: 124%;
    }
  }

  &__arrow--next {
    right: 0;

    &:before {
      content: 'Вперед';
      font-family: 'Inter';
      color: #070707;
      font-size: 16px;
      font-weight: 400;
      line-height: 124%;
    }
  }
}
</style>
