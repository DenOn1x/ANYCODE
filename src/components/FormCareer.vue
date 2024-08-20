<script setup>

import Button from "@/UI/Button.vue";

import {ref} from 'vue';

const fileName = ref('');

const handleFileChange = (event) => {
  const file = event.target.files[0];
  fileName.value = file ? file.name : '';
};
</script>

<template>
  <form action="#" method="POST">
    <div class="careers-request__fields">
      <div class="careers-request__field">
        <label for="NAME">{{ $t('name') }}</label>
        <input type="text" name="your-name" id="NAME" placeholder="">
        <span class="careers-request__error"></span>
      </div>
      <div class="careers-request__field">
        <label for="SURNAME">Фамилия</label>
        <input type="text" name="your-surname" id="SURNAME" placeholder="">
        <span class="careers-request__error"></span>
      </div>
      <div class="careers-request__field">
        <label for="MAIL">{{ $t('email') }}</label>
        <input type="text" name="your-mail" id="MAIL" placeholder="">
        <span class="careers-request__error"></span>
      </div>
      <div class="careers-request__field">
        <label for="TEXT">Опишите ваши ожидания, для понимания, совпадают ли наши цели</label>
        <textarea name="your-text" id="TEXT"></textarea>
        <span class="careers-request__error"></span>
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
            <div class="upload"><b>Прикрепить CV</b></div>
            <span>.doc.docx.pdf.ppt.pptx - не более 3 MB</span>
          </div>
        </div>
        <div v-if="fileName" class="careers-request__file-names">
          {{ fileName }}
        </div>
      </div>

      <Button :label="$t('submit')"
              color="fill"/>
      <div class="careers-request__privacy">
        <label class="custom-checkbox">
          <input type="checkbox" value="1"/>
          <span class="checkmark"></span>
          Нажимая на кнопку , я выражаю согласие на обработку моих <a href="#">персональных данных</a>
        </label>
      </div>
    </div>
  </form>
</template>

<style scoped lang="scss">
.careers-request {
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