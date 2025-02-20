<script setup>

import {ref} from 'vue';

import ic_checkProject from "@/assets/images/svg/ic_check.svg?url";
import ic_checkProjectDev from "@/assets/images/svg/ic_check-dep.svg?url";


const selectedOption = defineModel();

const selectOption = (option) => {
  selectedOption.value = option;
};

</script>

<template>
  <div class="quiz__body">
    <div class="quiz__counter">1/5</div>
    <div class="quiz-start">
      <div class="quiz-start__question">{{ $t('quiz_question_first') }}</div>
      <div class="quiz-start__content">
        <label class="custom-radio-button">
          <input type="radio" name="quiz-product" value="answer_no" v-model="selectedOption">
          <span class="custom-radio-button__img">
            <img :src="ic_checkProjectDev" alt="ic_checkProjectDev"/>
          </span>
          <span class="quiz-start__text">{{ $t('quiz_answer_first') }}</span>
        </label>
        <label class="custom-radio-button">
          <input type="radio" name="quiz-product" value="answer_yes" v-model="selectedOption">
          <span class="custom-radio-button__img">
            <img :src="ic_checkProject" alt="ic_checkProject"/>
          </span>
          <span class="quiz-start__text">{{ $t('quiz_answer_first_variant') }}</span>
        </label>
      </div>
    </div>
  </div>
</template>


<style scoped>

.quiz__counter {
  font-size: 14px;
  font-weight: 300;
  line-height: 132%;
  color: #FFF;
  position: absolute;
  right: 0;
  top: 24px;
}

.quiz-start__question {
  font-size: 14px;
  font-weight: 300;
  line-height: 132%;
  color: #FFF;
  margin-bottom: 40px;
}

.quiz-start__content {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.custom-radio-button {
  display: block;
  width: 100%;
  max-width: 240px;
  cursor: pointer;
}

.quiz-start__text {
  display: block;
  font-size: 12px;
  font-weight: 300;
  line-height: 132%;
  color: #FFF;
  margin-top: 10px;
  @media screen and (min-width: 991.98px) {
    font-size: 14px;
  }
}

.custom-radio-button__img {
  position: relative;
  display: block;
  padding-bottom: 100%;
  height: 0;
  @media screen and (min-width: 991.98px) {
    &:hover {
      img {
        filter: brightness(.7);
      }
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: contain;
    border-radius: 10px;
    transition: .1s ease;
  }

  &:before {
    content: '';
    position: absolute;
    right: 0;
    top: -4px;
    z-index: 2;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    @media screen and (min-width: 991.98px) {
      right: -4px;
    }
  }

  &:after {
    content: '';
    display: none;
    min-width: 16px;
    width: 16px;
    height: 10px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA3Ni44ODcgNTUuNTUyJz48cGF0aCBmaWxsPScjZmZmZmZmJyBkPSdNMzQuMzczIDQ5LjU0MUw3Ni44ODcgNS44ODkgNzAuNzM5IDAgMjguNDI2IDQzLjQ1OCA2LjA3OCAyMC42MzIgMCAyNi41ODVsMjIuNDg4IDIyLjk3MiA2LjAyOSA1Ljk5NS0uMDkxLS4wODUuMDkxLjA4NSA1Ljg1Ni02LjAxMXonLz48L3N2Zz4=);
    position: absolute;
    top: 4px;
    right: 4px;
    z-index: 2;
    @media screen and (min-width: 991.98px) {
      right: 0;
    }
  }

}

.custom-radio-button input[type="radio"] {
  display: none;
}

.custom-radio-button input[type="radio"]:checked + .custom-radio-button__img:before {
  background-color: #7470ff;
}

.custom-radio-button input[type="radio"]:checked + .custom-radio-button__img:after {
  display: block;
}


</style>