<script setup>
import {ref} from "vue";

const selectedOption = ref('');
</script>

<template>
  <div class="quiz__body">
    <div class="quiz__counter">3/5</div>
    <div class="quiz-budget">
      <div class="quiz-budget__question">Какой бюджет выделен на проект?</div>
      <div class="quiz-budget__content">
        <label class="custom-radio-button">
          <input type="radio" name="quiz-budget" value="1" v-model="selectedOption">
          <span class="quiz-budget__text">До 1 000 $</span>
        </label>
        <label class="custom-radio-button">
          <input type="radio" name="quiz-budget" value="2" v-model="selectedOption">
          <span class="quiz-budget__text">1 000–10 000 $</span>
        </label>
        <label class="custom-radio-button">
          <input type="radio" name="quiz-budget" value="3" v-model="selectedOption">
          <span class="quiz-budget__text">10 000–50 000 $</span>
        </label>
        <label class="custom-radio-button">
          <input type="radio" name="quiz-budget" value="4" v-model="selectedOption">
          <span class="quiz-budget__text">50 000–100 000 $</span>
        </label>
        <label class="custom-radio-button">
          <input type="radio" name="quiz-budget" value="5" v-model="selectedOption">
          <span class="quiz-budget__text">Более 100 000 $</span>
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

.quiz-budget__question {
  font-size: 16px;
  font-weight: 700;
  line-height: 132%;
  color: #FFF;
  margin-bottom: 40px;
}

.quiz-budget__content {
  display: flex;
  flex-direction: column;
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

.quiz-budget__text {
  font-size: 12px;
  font-weight: 700;
  line-height: 132%;
  color: #FFF;
  cursor: pointer;
  @media screen and (min-width: 991.98px) {
    font-size: 14px;
  }
}

.custom-radio-button .quiz-budget__text:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  min-width: 18px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #FFF;
}

.custom-radio-button input:checked ~ .quiz-budget__text:before {
  border-color: #24ff00;
}

.custom-radio-button .quiz-budget__text:after {
  content: "";
  display: none;
  min-width: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #24ff00;
  position: absolute;
  left: 6px;
  top: 6px;
}

.custom-radio-button input:checked ~ .quiz-budget__text:after {
  display: block;
}
</style>
