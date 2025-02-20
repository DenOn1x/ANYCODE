<script setup>
const selectedOption = defineModel();
</script>

<template>
  <div class="quiz__body">
    <div class="quiz__counter">4/5</div>
    <div class="quiz-start-dev">
      <div class="quiz-start-dev__question">{{ $t('quiz_question_fourth') }}</div>
      <div class="quiz-start-dev__content">
        <label class="custom-radio-button">
          <input type="radio" name="quiz-start-dev" value="the_sooner_the_better" v-model="selectedOption">
          <span class="quiz-start-dev__text">{{ $t('quiz_question_fourth_first') }}</span>
        </label>
        <label class="custom-radio-button">
          <input type="radio" name="quiz-start-dev" value="within_two_months" v-model="selectedOption">
          <span class="quiz-start-dev__text">{{ $t('quiz_question_fourth_second') }}</span>
        </label>
        <label class="custom-radio-button">
          <input type="radio" name="quiz-start-dev" value="within_a_year" v-model="selectedOption">
          <span class="quiz-start-dev__text">{{ $t('quiz_question_fourth_third') }}</span>
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

.quiz-start-dev__question {
  font-size: 14px;
  font-weight: 300;
  line-height: 132%;
  color: #FFF;
  margin-bottom: 40px;
}

.quiz-start-dev__content {
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

  @media screen and (min-width: 991.98px) {
    &:hover {
      .quiz-start-dev__text:before {
        border-color: #7470ff;
      }
    }
  }

}

.custom-radio-button input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.quiz-start-dev__text {
  font-size: 12px;
  font-weight: 400;
  line-height: 132%;
  color: #FFF;
  cursor: pointer;
  @media screen and (min-width: 991.98px) {
    font-size: 14px;
  }
}

.custom-radio-button .quiz-start-dev__text:before {
  content: "";
  position: absolute;
  left: 0;
  top: -2px;
  min-width: 18px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #FFF;
  transition: .1s ease;
}

.custom-radio-button input:checked ~ .quiz-start-dev__text:before {
  border-color: #7470ff;
}

.custom-radio-button .quiz-start-dev__text:after {
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

.custom-radio-button input:checked ~ .quiz-start-dev__text:after {
  display: block;
}
</style>
