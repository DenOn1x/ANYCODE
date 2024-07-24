<script setup>

import {ref} from 'vue';

import ic_checkProject from "@/assets/images/svg/ic_check.svg?url";
import ic_checkProjectDev from "@/assets/images/svg/ic_check-dep.svg?url";


const selectedOption = ref('');

const selectOption = (option) => {
  selectedOption.value = option;
};

</script>

<template>
  <div class="quiz__body">
    <div class="quiz__counter">1/5</div>
    <div class="quiz-start">
      <div class="quiz-start__question">У вас уже есть продукт?</div>
      <div class="quiz-start__content">
        <label class="custom-radio-button">
          <input type="radio" name="quiz-product" value="1" v-model="selectedOption">
          <span class="custom-radio-button__img">
            <img :src="ic_checkProjectDev" alt="ic_checkProjectDev"/>
          </span>
          <span class="quiz-start__text">Нет, нужна разработка с нуля</span>
        </label>
        <label class="custom-radio-button">
          <input type="radio" name="quiz-product" value="2" v-model="selectedOption">
          <span class="custom-radio-button__img">
            <img :src="ic_checkProject" alt="ic_checkProject"/>
          </span>
          <span class="quiz-start__text">Да, нужна доработка</span>
        </label>
      </div>
    </div>
  </div>
</template>


<style scoped>

.quiz__counter {
  font-size: 16px;
  font-weight: 700;
  line-height: 132%;
  color: #FFF;
  position: absolute;
  right: 0;
  top: 0;
}

.quiz-start__question {
  font-size: 16px;
  font-weight: 700;
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
  font-weight: 700;
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

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: contain;
    border-radius: 10px;
    @media screen and (min-width: 991.98px) {
      &:hover {
        opacity: .1;
      }
    }
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
  background-color: #24ff00;
}

.custom-radio-button input[type="radio"]:checked + .custom-radio-button__img:after {
  display: block;
}


</style>