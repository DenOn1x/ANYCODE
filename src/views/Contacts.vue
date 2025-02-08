<script setup>

import contactsImg from "@/assets/images/contacts-i.jpg";

import ic_fb from "@/assets/images/svg/ic_fb.svg?url";
import ic_tg from "@/assets/images/svg/ic_tg.svg?url";
import ic_inst from "@/assets/images/svg/ic_inst.svg?url";
import ic_wp from "@/assets/images/svg/ic_wp.svg?url";

import Button from "@/UI/Button.vue";


// const socialLinks = [
//   {href: "#", src: ic_fb},
//   {href: "#", src: ic_tg},
//   {href: "#", src: ic_inst},
//   {href: "#", src: ic_wp},
// ];


</script>

<template>
  <section class="contacts">
    <div class="container">
      <div class="contacts__wrapper">
        <div class="contacts__heading">
          <h1>Ваши идеи — наш код. <br> <span>Давайте обсудим!</span></h1>
        </div>
        <div class="contacts__cards">
          <div class="contacts__cards-wrapper">
            <div class="contacts__card">
              <a href="tel:" class="contacts__card-link">
                <img :src="ic_wp" alt="ic_wp"/>
                +375 11 111-11-11
              </a>
              <p>Свяжитесь с нами по телефону — обсудим ваш проект и ответим на все вопросы.</p>
              <Button :label="$t('request_quote')" color="fill" @click="showModalForm = true"/>
            </div>
            <div class="contacts__card">
              <p><b>Наш офис</b></p>
              <a href="#" class="contacts__card-link">
                Грузия пример адреса дом примерный
              </a>
            </div>
          </div>
          <div class="contacts__cards-wrapper">
            <div class="contacts__card">
              <a href="mailto:" class="contacts__card-link">
                anycode.software.comФИЗИЧЕСКИЙ
              </a>
              <a href="mailto:" class="contacts__card-link">
                anycode.software.comПОДДЕРЖКА
              </a>
              <p>Пишите нам — ответим в ближайшее время.</p>
            </div>
            <div class="contacts__card">
              <p><b>Мы в социальных сетях</b></p>
              <a href="#" class="contacts__card-link">
                <img :src="ic_tg" alt="ic_tg"/>
                tg
              </a>
              <a href="#" class="contacts__card-link">
                <img :src="ic_fb" alt="ic_fb"/>
                fb
              </a>
              <p>Следите за новостями компании, нашими проектами и событиями.</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

.contacts {
  padding-top: 20px;
  @media screen and (min-width: 767.98px) {
    padding-top: 80px;
  }

  h1 {
    font-size: 32px;
    font-weight: 400;
    line-height: 124%;
    color: #FFF;
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
    0px -5px 35px rgba(255, 255, 255, 0.3);
    @media screen and (min-width: 767.98px) {
      font-size: 32px;
    }
    @media screen and (min-width: 991.98px) {
      font-size: 38px;
    }
    @media screen and (min-width: 1199.98px) {
      font-size: 44px;
    }

    span {
      background-image: linear-gradient(120deg, #101b10 5%, #7470ff 30%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }


  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;

    &-wrapper {
      display: grid;
      gap: 12px;
    }
  }

  &__card {
    padding: 24px;
    background: #202328;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    gap: 12px;

    &-link {
      display: inline-flex;
      align-items: center;
      gap: 10px;

      font-size: 16px;
      font-weight: 300;
      line-height: 148%;
      color: #7470ff;
      text-decoration: none;

      img {

      }
    }

    p {
      font-size: 16px;
      font-weight: 300;
      line-height: 148%;
      color: #FFF;

      b {
        font-size: 14px;
        font-weight: 300;
        line-height: 148%;
        color: rgba(255, 255, 255, 0.7);
      }

    }
  }
}
</style>