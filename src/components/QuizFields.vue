<script setup>

import Button from "@/UI/Button.vue";
</script>

<template>
  <div class="quiz__body">
    <div class="quiz__counter"></div>
    <div class="quiz-end">
      <div class="quiz-end__question">
        {{$t('quiz_end_title')}}
      </div>
      <div class="quiz-end__content">
        <div class="quiz-end__fields">
          <div class="quiz-end__field">
            <label for="NAME">{{$t('name')}}</label>
            <input type="text" name="your-name" id="NAME" placeholder="">
            <span class="quiz-end__error"></span>
          </div>
          <div class="quiz-end__field">
            <label for="MAIL">{{$t('email')}}</label>
            <input type="text" name="your-mail" id="MAIL" placeholder="">
            <span class="quiz-end__error"></span>
          </div>
          <div class="quiz-end__field">
            <label for="NUMBER">{{$t('phone')}}</label>
            <input type="text" name="your-phone" id="NUMBER" placeholder="">
            <span class="quiz-end__error"></span>
          </div>
          <Button :label="$t('submit')"
                  color="fill"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.quiz-end {
  &__question {
    font-size: 14px;
    font-weight: 300;
    line-height: 132%;
    color: #FFF;
    margin-bottom: 40px;
  }

  &__fields {
    display: grid;
    gap: 30px;
  }

  &__field {
    display: flex;
    flex-direction: column;

    label {
      font-size: 12px;
      font-weight: 300;
      line-height: 148%;
      color: rgba(255, 255, 255, 0.7);
    }

    input {
      width: 100%;
      padding: 12px 16px;
      border: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.7);
      background: none;
      outline: none;
      font-family: 'Atyp';
      font-size: 14px;
      font-weight: 400;
      color: #FFF;
    }
  }
}


</style>
