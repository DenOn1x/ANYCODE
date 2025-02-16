<script setup>

import Button from "@/UI/Button.vue";
</script>

<template>
  <form action="#" method="POST">
    <div class="call__fields">
      <div class="call__field">
        <label for="NAME">{{ $t('name') }}</label>
        <input type="text" name="your-name" id="NAME" placeholder="">
        <span class="call__error"></span>
      </div>
      <div class="call__field">
        <label for="MAIL">{{ $t('email') }}</label>
        <input type="text" name="your-mail" id="MAIL" placeholder="">
        <span class="call__error"></span>
      </div>
      <div class="call__field">
        <label for="NUMBER">{{ $t('phone') }}</label>
        <input type="text" name="your-phone" id="NUMBER" placeholder="">
        <span class="call__error"></span>
      </div>
      <Button :label="$t('submit')"
              color="fill"/>
      <div class="call-privacy">
        <label class="custom-checkbox">
          <input type="checkbox" value="1"/>
          <span class="checkmark"></span>
          Нажимая на кнопку , я выражаю согласие на обработку моих <a href="#">персональных данных</a>
        </label>
      </div>
    </div>
  </form>
</template>

<style scoped>
.call__fields {
  display: grid;
  gap: 30px;
}

.call__field {
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
    font-family: "Atyp";
    font-size: 14px;
    font-weight: 400;
    color: #FFF;
  }

  textarea {
    width: 100%;
    padding: 12px 0;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
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

.call-privacy {
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

</style>