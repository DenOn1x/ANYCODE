<script setup>

</script>

<template>
  <div class="quiz__body">
    <div class="quiz__counter">2/5</div>
    <div class="quiz-products">
      <div class="quiz-products__question">Выберите нужные продукты:</div>
      <div class="quiz-products__content">
        <label class="custom-checkbox">
          <input type="checkbox" value="1"/>
          <span class="checkmark"></span>
          Интернет-магазин
        </label>
        <label class="custom-checkbox">
          <input type="checkbox" value="2"/>
          <span class="checkmark"></span>
          CRM или ERP-система
        </label>
        <label class="custom-checkbox">
          <input type="checkbox" value="3"/>
          <span class="checkmark"></span>
          Веб-приложение
        </label>
        <label class="custom-checkbox">
          <input type="checkbox" value="4"/>
          <span class="checkmark"></span>
          Личный кабинет
        </label>
        <label class="custom-checkbox">
          <input type="checkbox" value="5"/>
          <span class="checkmark"></span>
          Не знаю, нужна консультация
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

.quiz-products__question {
  font-size: 16px;
  font-weight: 700;
  line-height: 132%;
  color: #FFF;
  margin-bottom: 40px;
}

.quiz-products__content {
  display: flex;
  flex-direction: column;
}

.custom-checkbox {
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
  font-size: 12px;
  font-weight: 700;
  line-height: 132%;
  color: #FFF;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 991.98px) {
    font-size: 14px;
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
  top: 0;
  left: 0;
  min-width: 18px;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 1px solid #FFF;
}


.custom-checkbox input:checked ~ .checkmark {
  background: #24ff00;
  border-color: #24ff00;
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