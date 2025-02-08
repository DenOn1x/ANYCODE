<script setup>

import contactsImg from "@/assets/images/contacts-i.jpg";
</script>

<template>
  <section class="contacts">
    <div class="contacts__bg">
      <picture>
        <img :src="contactsImg" alt="contactsImg"/>
      </picture>
    </div>
    <div class="container">
      <div class="contacts__content">
        <h1>Контакты</h1>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

.contacts {
  position: relative;
  min-height: 460px;

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;


    picture {
      img {
        max-width: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(.5);
      }
    }
  }

  &__content {
    position: relative;
    z-index: 1;
    padding: 80px 0;

    h1 {
      font-size: 24px;
      font-weight: 400;
      line-height: 148%;
      color: #FFF;
      @media screen and (min-width: 767.98px) {
        font-size: 32px;
      }
      @media screen and (min-width: 991.98px) {
        font-size: 38px;
        line-height: 132%;
      }
      @media screen and (min-width: 1199.98px) {
        font-size: 44px;
      }
    }
  }
}
</style>