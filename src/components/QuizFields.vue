<script setup>

</script>

<template>
  <div class="quiz__body">
    <div class="quiz__counter"></div>
    <div class="quiz-end">
      <div class="quiz-end__question">
        Осталось заполнить форму, и мы перезвоним вам в течение 15 минут в рабочее время,
        чтобы проконсультировать и отправить расчёт стоимости
      </div>
      <div class="quiz-end__content">
        <div class="quiz-end__fields">
          <div class="quiz-end__field">
            <label for="NAME">Имя</label>
            <input type="text" name="your-name" id="NAME" placeholder="">
            <span class="quiz-end__error"></span>
          </div>
          <div class="quiz-end__field">
            <label for="MAIL">Почта</label>
            <input type="text" name="your-mail" id="MAIL" placeholder="">
            <span class="quiz-end__error"></span>
          </div>
          <div class="quiz-end__field">
            <label for="NUMBER">Телефон</label>
            <input type="text" name="your-phone" id="NUMBER" placeholder="">
            <span class="quiz-end__error"></span>
          </div>
        </div>
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

.quiz-end__question {
  font-size: 16px;
  font-weight: 700;
  line-height: 132%;
  color: #FFF;
  margin-bottom: 40px;
}

.quiz-end__fields {
  display: grid;
  gap: 30px;
}

.quiz-end__field {
  display: flex;
  flex-direction: column;

}

.quiz-end__field label {
  font-size: 12px;
  font-weight: 700;
  line-height: 148%;
  color: #ffffff5c;
}

.quiz-end__field input {
  width: 100%;
  max-width: 480px;
  padding: 12px 16px;
//border-radius: 10px; outline: none;
  background: none;
  border: none;
  border-bottom: .5px solid #ffffff5c;
  transition: .1s ease;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  color: #FFF;
}

</style>
