<script setup>
const selectedOption = defineModel();
</script>

<template>
  <div class="quiz__body">
    <div class="quiz__counter">3/5</div>
    <div class="quiz-budget">
      <div class="quiz-budget__question">{{ $t('quiz_question_third') }}</div>
      <div class="quiz-budget__content">
        <label class="custom-radio-button">
          <input type="radio" name="quiz-budget" value="1500" v-model="selectedOption">
          <span class="quiz-budget__text">{{ $t('upon') }} 1 500 $</span>
        </label>
        <label class="custom-radio-button">
          <input type="radio" name="quiz-budget" value="1500_5000" v-model="selectedOption">
          <span class="quiz-budget__text">1 500–5 000 $</span>
        </label>
        <label class="custom-radio-button">
          <input type="radio" name="quiz-budget" value="5000_10000" v-model="selectedOption">
          <span class="quiz-budget__text">5 000–10 000 $</span>
        </label>
        <label class="custom-radio-button">
          <input type="radio" name="quiz-budget" value="10000_50000" v-model="selectedOption">
          <span class="quiz-budget__text">10 000–50 000 $</span>
        </label>
        <label class="custom-radio-button">
          <input type="radio" name="quiz-budget" value="_50000" v-model="selectedOption">
          <span class="quiz-budget__text">{{ $t('over') }} 50 000 $</span>
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

.quiz-budget__question {
  font-size: 14px;
  font-weight: 300;
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

  @media screen and (min-width: 991.98px) {
    &:hover {
      .quiz-budget__text:before {
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

.quiz-budget__text {
  font-size: 12px;
  font-weight: 400;
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
  top: -2px;
  min-width: 18px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #FFF;
  transition: .1s ease;
}

.custom-radio-button input:checked ~ .quiz-budget__text:before {
  border-color: #7470ff;
}

.custom-radio-button .quiz-budget__text:after {
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

.custom-radio-button input:checked ~ .quiz-budget__text:after {
  display: block;
}
</style>
