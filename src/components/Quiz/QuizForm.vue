<script setup>
import {ref, onMounted, watch} from 'vue';
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

import QuizStart from '@/components/Quiz/QuizStart.vue';
import QuizBudget from '@/components/Quiz/QuizBudget.vue';
import QuizFields from '@/components/Quiz/QuizFields.vue';
import QuizCompany from '@/components/Quiz/QuizCompany.vue';
import QuizStartDevelop from '@/components/Quiz/QuizStartDevelop.vue';
import QuizProducts from '@/components/Quiz/QuizProducts.vue';

const splideRef = ref(null);
const splideInstance = ref(null);
const currentSlide = ref(0);
const totalSlides = ref(6);
const progressBarWidth = ref('0%');
const selectedOptions = ref({});

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
  destroy: false,
  keepAlive: true,
};

const updateProgressBar = () => {
  progressBarWidth.value = totalSlides.value > 1
      ? `${(currentSlide.value / (totalSlides.value - 1)) * 100}%`
      : '100%';
};

const goNext = () => {
  splideInstance.value?.go('>');
};

const goPrev = () => {
  splideInstance.value?.go('<');
};

const isNextDisabled = () => {
  return !selectedOptions.value[currentSlide.value] || selectedOptions.value[currentSlide.value].length === 0;
};

onMounted(() => {
  if (splideRef.value && !splideInstance.value) {
    splideInstance.value = splideRef.value.splide;

    splideInstance.value.on('mounted', () => {
      totalSlides.value = splideInstance.value.Components.Slides.getLength();
      updateProgressBar();
    });

    splideInstance.value.on('move', () => {
      currentSlide.value = splideInstance.value.index;
      updateProgressBar();
    });
  }
});

watch(selectedOptions, () => {
  updateProgressBar();
});
</script>

<template>
  <div class="quiz__form">
    <div class="quiz__title">{{ $t('quiz_title') }}</div>
    <form class="quiz__cards">
      <Splide ref="splideRef" :options="splideOptions">
        <SplideSlide
            v-for="(component, index) in [
            QuizStart,
            QuizProducts,
            QuizBudget,
            QuizStartDevelop,
            QuizCompany,
            QuizFields
        ]"
            :key="index"
            :class="{ 'q-active': currentSlide === index }"
        >
          <component :is="component" v-model="selectedOptions[index]"/>
        </SplideSlide>
      </Splide>

      <div class="quiz-progress">
        <div class="quiz-progress-bar" :style="{ width: progressBarWidth }"></div>
      </div>
      <div class="quiz__custom-arrows">
        <button v-if="currentSlide > 0" type="button" class="quiz__custom-prev" @click="goPrev">
          {{ $t('back') }}
        </button>
        <button
            v-if="currentSlide < totalSlides - 1"
            type="button"
            class="quiz__custom-next"
            :disabled="isNextDisabled()"
            @click="goNext"
        >
          {{ $t('next') }}
        </button>
      </div>
    </form>
  </div>
</template>


<style scoped lang="scss">
.quiz__form {
  border-radius: 20px;
  padding: 24px;
  box-shadow: rgba(255, 255, 255, 0.55) 0 0 30px;
  @media screen and (min-width: 991.98px) {
    border-radius: 40px;
  }
  @media screen and (min-width: 1199.98px) {
    flex: 1;
  }

  form {
    position: relative;
  }
}

.quiz__title {
  font-size: 16px;
  font-weight: 400;
  line-height: 148%;
  color: #FFF;
  padding: 4px 0 24px 0;
  @media screen and (min-width: 991.98px) {
    font-size: 24px;
  }
}

::v-deep .quiz__body {
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
    transition: .1s ease;
    @media screen and (min-width: 991.98px) {
      &:hover {
        background: rgba(116, 112, 255, 0.8);
      }
    }
  }

  .quiz__custom-next {
    margin-left: auto;
  }

  .quiz__custom-next[disabled] {
    background: rgba(255, 255, 255, 0.7);
  }
}


</style>