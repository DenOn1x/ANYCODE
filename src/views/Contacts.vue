<script setup>

import ic_fb from "@/assets/images/svg/ic_fb.svg?url";
import ic_tg from "@/assets/images/svg/ic_tg.svg?url";
import ic_wp from "@/assets/images/svg/ic_wp.svg?url";

import Button from "@/UI/Button.vue";
import FormCall from "@/components/FormCall.vue";


</script>

<template>
  <section class="contacts">
    <div class="container">
      <div class="contacts__wrapper">
        <div class="contacts__content">
          <div class="contacts__content-heading">
            <h1>Ваши идеи — наш код. <br> <span>Давайте обсудим!</span></h1>
          </div>
          <div class="contacts__content-form">
            <FormCall/>
          </div>
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
    &:before {
      content: "";
      position: absolute;
      top: -75%;
      left: -75%;
      width: 100%;
      height: 100%;
      background: rgba(116, 112, 255, 0.2);
      border-radius: 50%;
      filter: blur(20px);
      z-index: 11;
      pointer-events: none;
    }
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: -50%;
    width: 100%;
    height: 100%;
    background: rgba(116, 112, 255, 0.2);
    border-radius: 50%;
    filter: blur(20px);
    z-index: -1;
    pointer-events: none;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 48px;
    @media screen and (min-width: 991.98px) {
      flex-direction: row;
    }
  }

  &__content {
    @media screen and (min-width: 991.98px) {
      flex: 0 0 440px;
    }
    @media screen and (min-width: 1199.98px) {
      flex: 0 0 520px;
    }

    &-heading {
      h1 {
        font-size: 32px;
        font-weight: 400;
        line-height: 124%;
        color: #FFF;
        text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
        0px -5px 35px rgba(255, 255, 255, 0.3);
        margin-bottom: 24px;

        @media screen and (min-width: 767.98px) {
          font-size: 32px;
          margin-bottom: 48px;
        }
        @media screen and (min-width: 991.98px) {
          font-size: 38px;
        }
        @media screen and (min-width: 1199.98px) {
          font-size: 44px;
        }

        span {
          background-image: linear-gradient(120deg, #FFF 5%, #7470ff 30%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }

    &-form {
      border-radius: 20px;
      padding: 24px;
      box-shadow: rgba(255, 255, 255, 0.55) 0 0 30px;

    }
  }

  &__cards {
    display: grid;
    gap: 12px;
    @media screen and (min-width: 1199.98px) {
      grid-template-columns: repeat(2, 1fr);
    }

    &-wrapper {
      display: grid;
      gap: 12px;
      height: fit-content;
    }
  }

  &__card {
    padding: 24px;
    background: #202328;
    border-radius: 20px;

    display: flex;
    flex-direction: column;

    position: relative;


    @media screen and (min-width: 1199.98px) {
      &:last-child {
        &:after {
          content: "";
          position: absolute;
          top: 25%;
          left: 25%;
          width: 100%;
          height: 100%;
          background: rgba(116, 112, 255, 0.5);
          filter: blur(20px);
          z-index: -1;
        }
      }
    }

    &-link {
      display: inline-flex;
      align-items: center;
      gap: 10px;

      font-size: 14px;
      font-weight: 500;
      line-height: 148%;
      color: #FFF;
      text-decoration: none;
      margin: 4px 0;

      img {

      }
    }

    p {
      font-size: 13px;
      font-weight: 300;
      line-height: 148%;
      color: rgba(255, 255, 255, 0.7);
      margin: 10px 0;

      b {
        font-weight: 400;
        line-height: 148%;
        color: #FFF;
      }

    }

    .btn-fill {
      margin-top: 24px;
    }
  }
}
</style>