<script setup>

import Button from "@/UI/Button.vue";
import {useI18n} from "vue-i18n";
import {ref} from "vue";

const {t} = useI18n();

const name = ref("");
const email = ref("");
const phone = ref("");
const errors = ref({});

const props = defineProps({
  selectedOptions: Object,
});

const validateForm = () => {
  let isValid = true;
  errors.value = {name: "", email: "", phone: ""};

  if (!name.value.trim()) {
    errors.value.name = t("errors.name");
    isValid = false;
  }
  if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.value.email = t("errors.email");
    isValid = false;
  }
  if (!phone.value.trim() || !/^\+?\d{7,15}$/.test(phone.value)) {
    errors.value.phone = t("errors.phone");
    isValid = false;
  }

  return isValid;
};

const submitQuiz = async () => {

  if (!validateForm()) return;

  const formData = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    quizResponses: props.selectedOptions,
  };

  try {
    const response = await fetch("https://api.anycodesoftware.com/api/send-lead-quiz", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      console.log("success")
      resetForm()
    } else {
      console.log("fail")
    }
  } catch (error) {
    console.error("Ошибка запроса:", error);
  }
};

const resetForm = () => {
  name.value = "";
  email.value = "";
  phone.value = "";
};

</script>

<template>
  <div class="quiz__body">
    <div class="quiz__counter"></div>
    <div class="quiz-end">
      <div class="quiz-end__question">
        {{ $t('quiz_end_title') }}
      </div>
      <div class="quiz-end__content">
        <form @submit.prevent="submitQuiz" class="quiz-end__fields">
          <div class="quiz-end__fields">
            <div class="quiz-end__field">
              <label for="NAME">{{ $t('name') }}</label>
              <input v-model="name" type="text" name="your-name" id="NAME" placeholder="">
              <span class="quiz-end__error" v-if="errors.name">{{ errors.name }}</span>
            </div>
            <div class="quiz-end__field">
              <label for="MAIL">{{ $t('email') }}</label>
              <input v-model="email" type="text" name="your-mail" id="MAIL" placeholder="">
              <span class="quiz-end__error" v-if="errors.email">{{ errors.email }}</span>
            </div>
            <div class="quiz-end__field">
              <label for="NUMBER">{{ $t('phone') }}</label>
              <input v-model="phone" type="text" name="your-phone" id="NUMBER" placeholder="">
              <span class="quiz-end__error" v-if="errors.phone">{{ errors.phone }}</span>
            </div>
            <Button :label="$t('submit')"
                    type="submit"
                    color="fill"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.quiz-end {

  &__error {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }

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
      padding: 12px 0;
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
