<script setup>
import {ref} from "vue";
import {useI18n} from "vue-i18n";
import Button from "@/UI/Button.vue";

const {t} = useI18n();

const name = ref("");
const surname = ref("");
const email = ref("");
const message = ref("");
const file = ref(null);
const fileName = ref("");
const consent = ref(false);

const errors = ref({
  name: "",
  email: "",
  surname: "",
  message: "",
  consent: ""
});


const handleFileChange = (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    file.value = selectedFile;
    fileName.value = selectedFile.name;
  } else {
    file.value = null;
    fileName.value = "";
  }
};

const validateForm = () => {
  let isValid = true;
  errors.value = {
    name: "",
    email: "",
    surname: "",
    message: "",
    consent: ""
  };

  if (!name.value.trim()) {
    errors.value.name = t("errors.name");
    isValid = false;
  }
  if (!surname.value.trim()) {
    errors.value.surname = t("errors.surname");
    isValid = false;
  }
  if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.value.email = t("errors.email");
    isValid = false;
  }
  if (!message.value.trim()) {
    errors.value.message = t("errors.message");
    isValid = false;
  }
  if (!consent.value) {
    errors.value.consent = t("errors.consent");
    isValid = false;
  }

  return isValid;
};

const submitForm = async () => {
  if (!validateForm()) return;

  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("surname", surname.value);
  formData.append("email", email.value);
  formData.append("message", message.value);
  if (file.value) {
    formData.append("file", file.value);
  }

  try {
    const response = await fetch("https://api.anycodesoftware.com/api/send-vacancy", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      console.error("Success");
      resetForm()
    } else {
      console.error("Fail");
    }
  } catch (error) {
    console.error("Ошибка запроса:", error);
  }
};

const resetForm = () => {
  name.value = "";
  email.value = "";
  surname.value = "";
  message.value = "";
  consent.value = false;
  file.value = null;
  fileName.value = "";
};

</script>


<template>
  <form @submit.prevent="submitForm">
    <div class="careers-request__fields">
      <div class="careers-request__field">
        <label for="NAME">{{ $t('name') }}</label>
        <input v-model="name" type="text" name="your-name" id="NAME" placeholder="">
        <span class="careers-request__error" v-if="errors.name">{{ errors.name }}</span>
      </div>
      <div class="careers-request__field">
        <label for="SURNAME">{{ $t('surname') }}</label>
        <input v-model="surname" type="text" name="your-surname" id="SURNAME" placeholder="">
        <span class="careers-request__error" v-if="errors.surname">{{ errors.surname }}</span>
      </div>
      <div class="careers-request__field">
        <label for="MAIL">{{ $t('email') }}</label>
        <input v-model="email" type="text" name="your-mail" id="MAIL" placeholder="">
        <span class="careers-request__error" v-if="errors.email">{{ errors.email }}</span>
      </div>
      <div class="careers-request__field">
        <label for="TEXT">{{ $t('expectations_text') }}</label>
        <textarea v-model="message" name="your-text" id="TEXT"></textarea>
        <span class="careers-request__error" v-if="errors.message">{{ errors.message }}</span>
      </div>

      <div class="careers-request__field">
        <div class="careers-request__field-documents">
          <input
              type="file"
              name="files[]"
              accept=".doc,.docx,.pdf,.ppt,.pptx"
              @change="handleFileChange"
          >
          <div class="careers-request__field-description">
            <div class="upload"><b>{{ $t('attach_cv') }}</b></div>
            <span>{{ $t('file_formats') }}</span>
          </div>
        </div>
        <div v-if="fileName" class="careers-request__file-names">
          {{ fileName }}
        </div>
      </div>

      <Button :label="$t('submit')"
              type="submit"
              color="fill"/>
      <div class="careers-request__privacy">
        <label class="custom-checkbox">
          <input type="checkbox" v-model="consent"/>
          <span class="checkmark"></span>
          {{ $t('consent_text') }} <a href="#">{{ $t('personal_data') }}</a>
        </label>
        <span class="careers-request__error" v-if="errors.consent">{{ errors.consent }}</span>
      </div>
    </div>
  </form>
</template>

<style scoped lang="scss">
.careers-request {
  &__error {
    color: red;
    font-size: 12px;
    margin-top: 5px;
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
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      background: none;
      outline: none;
      font-family: "Atyp";
      font-size: 14px;
      font-weight: 400;
      color: #FFF;
    }

    textarea {
      width: 100%;
      padding: 12px 0;
      border: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      background: none;
      outline: none;
      resize: none;
      height: 20px;
      font-family: "Atyp";
      font-size: 14px;
      font-weight: 400;
      color: #FFF;
    }
  }

  &__field-documents {
    position: relative;
    overflow: hidden;
    padding-top: 22%;
    border: 1px dashed rgba(255, 255, 255, 0.3);
    @media screen and (min-width: 767.98px) {
      padding-top: 16%;
    }

    input[type="file"] {
      padding: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      outline: 0;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      cursor: pointer;
    }
  }

  &__field-description {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    .upload {
      text-align: center;
      font-size: 12px;
      font-weight: 400;
      line-height: 132%;
      color: #FFF;
    }

    span {
      font-size: 12px;
      font-weight: 300;
      line-height: 148%;
      color: rgba(255, 255, 255, 0.7);
    }
  }

  &__file-names {
    font-size: 12px;
    font-weight: 300;
    line-height: 148%;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 10px;
  }

  &__privacy {
    display: flex;
    align-items: flex-start;
  }

  .custom-checkbox {
    width: fit-content;
    padding-left: 30px;
    position: relative;
    cursor: pointer;
    user-select: none;
    font-size: 12px;
    font-weight: 400;
    line-height: 132%;
    color: #FFF;

    a {
      color: #7470ff;
      text-decoration: none;
    }
  }

  .custom-checkbox input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: -3px;
    left: 0;
    min-width: 18px;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border: 1px solid #FFF;
  }


  .custom-checkbox input:checked ~ .checkmark {
    background: #7470ff;
    border-color: #7470ff;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    top: 4px;
    left: 1px;
    display: none;
  }

  .custom-checkbox input:checked ~ .checkmark:after {
    display: block;
  }

  .custom-checkbox .checkmark:after {
    content: '';
    display: none;
    min-width: 16px;
    width: 16px;
    height: 10px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA3Ni44ODcgNTUuNTUyJz48cGF0aCBmaWxsPScjZmZmZmZmJyBkPSdNMzQuMzczIDQ5LjU0MUw3Ni44ODcgNS44ODkgNzAuNzM5IDAgMjguNDI2IDQzLjQ1OCA2LjA3OCAyMC42MzIgMCAyNi41ODVsMjIuNDg4IDIyLjk3MiA2LjAyOSA1Ljk5NS0uMDkxLS4wODUuMDkxLjA4NSA1Ljg1Ni02LjAxMXonLz48L3N2Zz4=);
  }

}
</style>