<script setup>
const selectedOptions = defineModel({default: []});

</script>

<template>
  <div class="quiz__body">
    <div class="quiz__counter">2/5</div>
    <div class="quiz-products">
      <div class="quiz-products__question">{{ $t('quiz_question_second') }}</div>
      <div class="quiz-products__content">
        <label class="custom-checkbox">
          <input type="checkbox" value="online_store" v-model="selectedOptions"/>
          <span class="checkmark"></span>
          {{ $t('online_store') }}
        </label>
        <label class="custom-checkbox">
          <input type="checkbox" value="crm_or_erp_system" v-model="selectedOptions"/>
          <span class="checkmark"></span>
          {{ $t('crm_or_erp') }}
        </label>
        <label class="custom-checkbox">
          <input type="checkbox" value="web_application" v-model="selectedOptions"/>
          <span class="checkmark"></span>
          {{ $t('web_application') }}
        </label>
        <label class="custom-checkbox">
          <input type="checkbox" value="personal_account" v-model="selectedOptions"/>
          <span class="checkmark"></span>
          {{ $t('cabinet') }}
        </label>
        <label class="custom-checkbox">
          <input type="checkbox" value="mobile_app" v-model="selectedOptions"/>
          <span class="checkmark"></span>
          {{ $t('mobile_app_title') }}
        </label>
        <label class="custom-checkbox">
          <input type="checkbox" value="design" v-model="selectedOptions"/>
          <span class="checkmark"></span>
          {{ $t('design') }}
        </label>
        <label class="custom-checkbox">
          <input type="checkbox" value="need_consultation" v-model="selectedOptions"/>
          <span class="checkmark"></span>
          {{ $t('not_found_answer') }}
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

.quiz-products__question {
  font-size: 14px;
  font-weight: 300;
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
  font-weight: 400;
  line-height: 132%;
  color: #FFF;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 991.98px) {
    font-size: 14px;
    &:hover {
      .checkmark {
        border-color: #7470ff;
      }
    }
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
  transition: .1s ease;
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