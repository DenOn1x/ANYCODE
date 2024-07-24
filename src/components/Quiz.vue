<script setup>
import {ref, onMounted, watch} from 'vue';
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import QuizStart from "@/components/QuizStart.vue";
import QuizProducts from "@/components/QuizProducts.vue";
import QuizBudget from "@/components/QuizBudget.vue";
import QuizStartDevelop from "@/components/QuizStartDevelop.vue";
import QuizCompany from "@/components/QuizCompany.vue";
import QuizFields from "@/components/QuizFields.vue";

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
const totalSlides = ref(5);
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
        <div class="quiz__desc">Подберём лучшие технологии под ваш продукт и задачи</div>
      </div>
      <div class="quiz__wrapper">
        <form action="#" method="POST" class="quiz__cards">
          <div class="quiz__title">Ответьте на вопросы и получите расчёт стоимости проекта</div>
          <Splide ref="splideRef" :options="splideOptions" data-slider="quiz" aria-label="">
            <SplideSlide>
              <QuizStart/>
            </SplideSlide>
            <SplideSlide>
              <QuizProducts/>
            </SplideSlide>
            <SplideSlide>
              <QuizBudget/>
            </SplideSlide>
            <SplideSlide>
              <QuizStartDevelop/>
            </SplideSlide>
            <SplideSlide>
              <QuizCompany/>
            </SplideSlide>
            <SplideSlide>
              <QuizFields/>
            </SplideSlide>
          </Splide>
          <div class="quiz-progress">
            <div class="quiz-progress-bar" :style="{ width: progressBarWidth }"></div>
          </div>
        </form>
        <div class="quiz__info">
          <div class="quiz__view">
            <div class="quiz__plane plane--main">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
            <div class="anycode-text">ANYCODE</div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.quiz {
  margin-top: 60px;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 991.98px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 1199.98px) {
    margin-top: 80px;
  }


  $side: 444px;
  $l: 444px;
  $num: 10;
  $dur: 10s;
  $angleStep: -320deg;

  @mixin plane($w, $h) {
    width: $w;
    height: $h;
    transform-style: preserve-3d;
  }

  @mixin view($p) {
    position: relative;
    z-index: -1;
    perspective: $p;
    transition: .7s ease;
  }

  @mixin center {
    margin: auto;
  }

  &__view {
    @include view(400);
  }

  &__plane {
    @include plane(300px, 300px);

    @media screen and (min-width: 1439.98px) {
      width: 400px;
      height: 400px;
    }
    @media screen and (min-width: 1639.98px) {
      width: $side;
      height: $side;
    }

    &.plane--main {
      @include center;
      transform: rotateX(60deg) rotateZ(-30deg);
      animation: rotate 20s infinite linear;

      .circle {
        width: 300px;
        height: 300px;
        position: absolute;
        transform-style: preserve-3d;
        border-radius: 100%;
        box-sizing: border-box;
        box-shadow: 0 0 20px rgba(#000, 1), inset 0 0 20px rgba(#24ff00, 1);
        @media screen and (min-width: 1439.98px) {
          width: 400px;
          height: 400px;
        }
        @media screen and (min-width: 1639.98px) {
          width: $side;
          height: $side;
        }


        @for $i from 1 through 5 {
          $angle: $i * $angleStep;
          &:nth-child(#{$i}) {
            transform: rotateZ($angle) rotateX(-85deg);
          }
        }
      }
    }
  }

  .anycode-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #FFF;
    font-size: 44px;
    font-weight: 700;
  }

  @keyframes rotate {
    0% {
      transform: rotateX(0) rotateY(0) rotateZ(0);
    }
    100% {
      transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
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
    color: #ffffff5c;

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
      align-items: center;
      justify-content: space-between;
      gap: 80px;
    }
  }

  &__info {
    display: none;
    @media screen and (min-width: 1199.98px) {
      display: block;
    }
  }

  form {
    position: relative;
    padding: 24px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #24ff00 0%, rgba(255, 255, 255, 0.01) 25%);
    @media screen and (min-width: 1199.98px) {
      padding: 48px;
      width: 60%;
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
    background: #ffffff5c;
    @media screen and (min-width: 767.98px) {
      top: calc(10% + 20px);
    }
    @media screen and (min-width: 991.98px) {
      top: calc(15% + 20px);
    }
    @media screen and (min-width: 1439.98px) {
      top: calc(10% + 60px);
    }

    .quiz-progress-bar {
      height: 100%;
      background: #24ff00;
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
    background: #24ff00;
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
