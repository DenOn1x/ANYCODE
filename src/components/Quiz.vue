<script setup>
import {ref, onMounted} from 'vue';
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
  arrows: false,
  pagination: false,
  autoHeight: true,
  updateOnMove: true,
};

const splideRef = ref(null);
const currentSlide = ref(0);
const totalSlides = ref(6);
const progressBarWidth = ref('0%');

const updateProgressBar = () => {
  if (totalSlides.value > 1) {
    progressBarWidth.value = `${(currentSlide.value / (totalSlides.value - 1)) * 100}%`;
  } else {
    progressBarWidth.value = '100%';
  }
};

const goNext = () => {
  if (splideRef.value.splide) {
    splideRef.value.splide.go('>');
  }
};

const goPrev = () => {
  if (splideRef.value.splide) {
    splideRef.value.splide.go('<');
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
</script>

<template>
  <section class="quiz">
    <div class="container">
      <div class="quiz__top">
        <h2>Узнайте стоимость проекта за минуту</h2>
        <div class="quiz__desc">Подберём лучшие технологии под ваш продукт и задачи</div>
      </div>
      <div class="quiz__wrapper">
        <div class="quiz__form">
          <div class="quiz__title">Ответьте на вопросы и получите расчёт стоимости проекта</div>
          <form action="#" method="POST" class="quiz__cards">
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
            <div class="quiz__custom-arrows">
              <button
                  v-if="currentSlide > 0"
                  type="button"
                  class="quiz__custom-prev"
                  @click="goPrev"
              >Назад
              </button>
              <button
                  v-if="currentSlide < totalSlides - 1"
                  type="button"
                  class="quiz__custom-next"
                  @click="goNext"
              >Вперед
              </button>
            </div>
          </form>
        </div>
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
  @media screen and (min-width: 1199.98px) {
    margin-top: 100px;
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
        box-shadow: 0 0 20px rgba(#000, 1), inset 0 0 20px rgba(#FFF, 1);
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
    font-weight: 400;
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
    margin-bottom: 40px;

    h2 {
      font-size: 24px;
      font-weight: 400;
      line-height: 148%;
      color: #FFF;

      br {
        display: none;
      }

      @media screen and (min-width: 767.98px) {
        font-size: 32px;
      }
      @media screen and (min-width: 991.98px) {
        font-size: 38px;
        line-height: 132%;
      }
      @media screen and (min-width: 1199.98px) {
        font-size: 44px;
        br {
          display: block;
        }
      }
    }
  }

  &__desc {
    font-size: 14px;
    font-weight: 300;
    line-height: 148%;
    color: #FFF;
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

  &__form {
    border-radius: 20px;
    padding: 24px;
    box-shadow: rgba(255, 255, 255, 0.55) 0 0 30px;
    @media screen and (min-width: 991.98px) {
      border-radius: 40px;
    }
    @media screen and (min-width: 1199.98px) {
      flex: 1;
    }
  }

  &__title {
    font-size: 16px;
    font-weight: 400;
    line-height: 148%;
    color: #FFF;
    padding: 4px 0 24px 0;
    @media screen and (min-width: 991.98px) {
      font-size: 24px;
    }
  }

  form {
    position: relative;
  }

  .quiz__body {
    padding: 24px 0;
  }

  .quiz-progress {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.7);


    .quiz-progress-bar {
      height: 100%;
      background: #7470ff;
      transition: width 0.3s;
    }
  }
}

.quiz__custom-arrows {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  .quiz__custom-prev, .quiz__custom-next {
    border: none;
    background-color: #7470ff;
    color: #FFF;
    padding: 12px 20px;
    border-radius: 10px;
    font-family: 'Atyp';
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
  }

  .quiz__custom-next {
    margin-left: auto;
  }
}

::v-deep .splide {
  &__slide {
  }

  .splide__track {
    overflow: hidden;
    position: relative;
    z-index: 0;
    transition: height 0.5s ease-in-out;
  }

  .splide__track--fade > .splide__list {
    display: block;
    transition: opacity 0.5s ease-in-out;
  }

  .splide__track--fade > .splide__list > .splide__slide {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  .splide__track--fade > .splide__list > .splide__slide.is-active {
    opacity: 1;
    position: relative;
    z-index: 1;
    transform: translateX(0) !important;
  }
}

@keyframes fadeHeight {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
}

</style>
