<script setup>
import Button from "@/UI/Button.vue";

defineProps({
  number: Number,
  title: String,
  text: String,
  link: String,
});
</script>

<template>
  <div class="services__card card-services">
    <div class="card-services__content">
      <div class="card-services__num">{{ number }}</div>
      <div class="card-services__title">
        {{ title }}
      </div>
      <div class="card-services__text">
        {{ text }}
      </div>
    </div>
    <router-link :to="link" class="card-services__link">
      <Button :label="$t('learn_more')"
              color="fill"/>
    </router-link>

  </div>
</template>

<style lang="scss" scoped>
.card-services {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  @media screen and (min-width: 1199.98px) {
    padding: 20px 40px;
  }
  @media screen and (min-width: 1199.98px) {
    &:before {
      content: '';
      width: .5px;
      height: 100%;
      background: #7470ff;
      position: absolute;
      left: 0;
      top: 0;
    }
    &:nth-of-type(1) {
      &:before {
        display: none;
      }
    }
    &:nth-of-type(4) {
      &:before {
        display: none;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__num {
    font-size: 84px;
    font-weight: 700;
    line-height: 100%;
    //color: #7DFF7A;

    background-image: linear-gradient(120deg, #101b10 5%, #7470ff 30%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__title {
    font-size: 20px;
    font-weight: 600;
    line-height: 132%;
    color: #FFF;
    margin-bottom: 10px;
  }

  &__text {
    font-size: 14px;
    font-weight: 300;
    line-height: 148%;
    color: rgba(255, 255, 255, 0.7);
    position: relative;
    padding-left: 25px;
    @media screen and (min-width: 991.98px) {
      font-size: 13px;
    }

    &:before {
      content: '';
      width: 10px;
      height: 10px;
      background: #7470ff;
      border-radius: 50%;
      position: absolute;
      left: 0;
      top: 5px;
    }

    &:after {
      content: '';
      width: 14px;
      height: 14px;
      border: 1px solid #7470ff;
      border-radius: 50%;
      position: absolute;
      left: -3px;
      top: 2px;
    }
  }

  &__link {
    display: block;
    text-decoration: none;

    .btn {
      width: 100%;
    }
  }
}
</style>