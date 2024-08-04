<script setup>
import {ref} from "vue";


const selectedOption = ref('');

</script>

<template>
  <div class="quiz__body">
    <div class="quiz__counter">5/5</div>
    <div class="quiz-company">
      <div class="quiz-company__question">И последний вопрос — какую компанию вы представляете?</div>
      <div class="quiz-company__content">
        <label class="custom-radio-button">
          <input type="radio" name="quiz-company" value="1" v-model="selectedOption">
          <span class="quiz-company__text">Недвижимость</span>
        </label>
        <label class="custom-radio-button">
          <input type="radio" name="quiz-company" value="2" v-model="selectedOption">
          <span class="quiz-company__text">Банк и финансы</span>
        </label>
        <label class="custom-radio-button">
          <input type="radio" name="quiz-company" value="3" v-model="selectedOption">
          <span class="quiz-company__text">Туризм</span>
        </label>

        <label class="custom-radio-button">
          <input type="radio" name="quiz-company" value="3" v-model="selectedOption">
          <span class="quiz-company__text">Ритейл</span>
        </label>
        <label class="custom-radio-button">
          <input type="radio" name="quiz-company" value="3" v-model="selectedOption">
          <span class="quiz-company__text">Медицина</span>
        </label>
        <label class="custom-radio-button">
          <input type="radio" name="quiz-company" value="3" v-model="selectedOption">
          <span class="quiz-company__text">Образование</span>
        </label>
        <label class="custom-radio-button">
          <input type="radio" name="quiz-company" value="3" v-model="selectedOption">
          <span class="quiz-company__text">Стартап</span>
        </label>
        <label class="custom-radio-button">
          <input type="radio" name="quiz-company" value="3" v-model="selectedOption">
          <span class="quiz-company__text">Медиа и развлечения</span>
        </label>
        <label class="custom-radio-button">
          <input type="radio" name="quiz-company" value="3" v-model="selectedOption">
          <span class="quiz-company__text">Гостинично-ресторанный бизнес</span>
        </label>
        <label class="custom-radio-button">
          <input type="radio" name="quiz-company" value="3" v-model="selectedOption">
          <span class="quiz-company__text">Я частное лицо</span>
        </label>
        <label class="custom-radio-button">
          <input type="radio" name="quiz-company" value="3" v-model="selectedOption">
          <span class="quiz-company__text">Другое</span>
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.quiz__counter {
  font-size: 14px;
  font-weight: 300;
  line-height: 132%;
  color: #FFF;
  position: absolute;
  right: 0;
  top: 24px;
}

.quiz-company {
  &__question {
    font-size: 14px;
    font-weight: 300;
    line-height: 132%;
    color: #FFF;
    margin-bottom: 40px;
  }

  &__content {
    display: flex;
    flex-direction: column;
  }
}

.custom-radio-button {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding-left: 30px;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
}

.custom-radio-button input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.quiz-company__text {
  font-size: 12px;
  font-weight: 400;
  line-height: 132%;
  color: #FFF;
  cursor: pointer;
  @media screen and (min-width: 991.98px) {
    font-size: 14px;
  }
}

.custom-radio-button .quiz-company__text:before {
  content: "";
  position: absolute;
  left: 0;
  top: -2px;
  min-width: 18px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #FFF;
}

.custom-radio-button input:checked ~ .quiz-company__text:before {
  border-color: #7470ff;
}

.custom-radio-button .quiz-company__text:after {
  content: "";
  display: none;
  min-width: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #7470ff;
  position: absolute;
  left: 6px;
  top: 4px;
}

.custom-radio-button input:checked ~ .quiz-company__text:after {
  display: block;
}
</style>
