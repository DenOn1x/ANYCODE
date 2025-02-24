<script setup>
import {ref, computed} from "vue";
import {useI18n} from "vue-i18n";

import Button from "@/UI/Button.vue";
import ConfirmModal from "@/components/Modals/ConfirmModal.vue";

const {t} = useI18n();

const name = ref("");
const email = ref("");
const phone = ref("");
const errors = ref({});
const isModalOpen = ref(false);
const modalMessage = ref("");

const props = defineProps({
  selectedOptions: Object,
});

const clearError = (field) => {
  errors.value[field] = "";
};

const isActive = (value) => value.trim() !== "";

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
      resetForm()
      modalMessage.value = "Сообщение успешно отправлено!";
    } else {
      modalMessage.value = "Упс! Что-то пошло не так.";
    }
    isModalOpen.value = true;

  } catch (error) {
    console.error("Ошибка запроса:", error);
    modalMessage.value = "Упс! Что-то пошло не так.";
    isModalOpen.value = true;
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
            <div class="quiz-end__field" :class="{ active: isActive(name) }">
              <label for="NAME">{{ $t('name') }}</label>
              <input v-model="name" @input="clearError('name')" type="text" name="your-name" id="NAME" placeholder="">
              <span class="quiz-end__error" v-if="errors.name">{{ errors.name }}</span>
            </div>
            <div class="quiz-end__field" :class="{ active: isActive(email) }">
              <label for="MAIL">{{ $t('email') }}</label>
              <input v-model="email" @input="clearError('email')" type="text" name="your-mail" id="MAIL" placeholder="">
              <span class="quiz-end__error" v-if="errors.email">{{ errors.email }}</span>
            </div>
            <div class="quiz-end__field" :class="{ active: isActive(phone) }">
              <label for="NUMBER">{{ $t('phone') }}</label>
              <input v-model="phone" @input="clearError('phone')" type="text" name="your-phone" id="NUMBER"
                     placeholder="">
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

  <ConfirmModal :isOpen="isModalOpen" :message="modalMessage" @close="isModalOpen = false" />

</template>


<style scoped lang="scss">

.quiz-end {
  &__error {
    font-size: 12px;
    color: rgba(255, 0, 0, 0.7);
    position: absolute;
    bottom: -20px;
    left: 0;
  }

  &__body {
    padding: 24px 0;
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
    gap: 40px;
  }

  &__field {
    display: flex;
    flex-direction: column;
    position: relative;

    &.active {
      label {
        top: calc(50% - 20px);

      }
    }

    label {
      font-size: 12px;
      font-weight: 300;
      line-height: 148%;
      color: rgba(255, 255, 255, 0.7);

      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      transition: .3s ease;
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
