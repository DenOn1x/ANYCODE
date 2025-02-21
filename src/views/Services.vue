<script setup>
import Services from "@/components/Services/Services.vue";
import { useRoute } from "vue-router";
import Button from "@/UI/Button.vue";

import ic_fb from '@/assets/images/svg/ic_fb.svg?url';
import ic_tg from '@/assets/images/svg/ic_tg.svg?url';
import ic_inst from '@/assets/images/svg/ic_inst.svg?url';
import ic_wp from '@/assets/images/svg/ic_wp.svg?url';

import ModalQuote from "@/components/Modals/ModalQuote.vue";
import Modal from "@/components/Modals/Modal.vue";
import { ref } from "vue";

const route = useRoute();
const showModalForm = ref(false);
</script>

<template>
  <template v-if="route.name === 'services'">
    <section class="services-tmp">
      <div class="container">
        <div class="services-tmp__wrapper">
          <div class="services-tmp__content content-services-tmp">
            <div class="content-services-tmp__top">
              <h1 class="content-services-tmp__heading">
                {{ $t("services_page_title") }}
              </h1>
              <div class="content-services-tmp__description">
                {{ $t("services_intro_first") }}
                <span>{{ $t("services_intro_span") }}</span>
                {{ $t("services_intro_text") }}
              </div>
            </div>
            <div class="content-services-tmp__bottom">
              <Button :label="$t('services_request_quote')" color="fill" @click="showModalForm = true"/>
              <ul class="services-tmp__socials">
                <li>
                  <a href="#">
                    <img :src="ic_fb" alt="Facebook"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img :src="ic_tg" alt="Telegram"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img :src="ic_inst" alt="Instagram"/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img :src="ic_wp" alt="WhatsApp"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Services/>

    <Modal v-model="showModalForm" modalClass="modal-quote">
      <ModalQuote/>
    </Modal>
  </template>

  <router-view/>
</template>

<style scoped lang="scss">

.services-tmp {
  position: relative;
  overflow: hidden;
  z-index: 0;
  border-radius: 20px;
  background: #c7ced1;
  max-width: 90%;
  margin: 10px auto 0;
  @media screen and (min-width: 991.98px) {
    border-radius: 40px;
  }

  &__wrapper {
    padding: 40px 0;
  }

  .content-services-tmp {
    display: grid;
    gap: 40px;

    &__top {
      display: grid;
      gap: 10px;
      @media screen and (min-width: 767.98px) {
        gap: 20px;
      }
    }

    &__heading {
      font-size: 32px;
      font-weight: 400;
      line-height: 148%;
      color: #070707;
      text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
      0px -5px 35px rgba(255, 255, 255, 0.3);
      @media screen and (min-width: 767.98px) {
        font-size: 32px;
      }
      @media screen and (min-width: 991.98px) {
        font-size: 46px;
        line-height: 142%;
      }
      @media screen and (min-width: 1199.98px) {
        font-size: 54px;
      }
      @media screen and (min-width: 1639.98px) {
        font-size: 68px;
      }

      span {
        background-image: linear-gradient(120deg, #101b10 5%, #7470ff 30%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    &__description {
      font-size: 18px;
      font-weight: 400;
      line-height: 142%;
      color: #070707;
      @media screen and (min-width: 767.98px) {
        font-size: 16px;
      }
      @media screen and (min-width: 991.98px) {
        max-width: 520px;
      }
      @media screen and (min-width: 1199.98px) {
        font-size: 20px;
        max-width: 620px;
      }

      span {
        color: #FFF;
      }
    }

    &__bottom {
      display: grid;
      gap: 10px;
      @media screen and (min-width: 767.98px) {
        display: flex;
        align-items: center;
      }
      @media screen and (min-width: 991.98px) {
        gap: 20px;
      }
    }
  }

  &__socials {
    display: flex;
    align-items: center;
    width: fit-content;
    border: 1px solid #070707;
    border-radius: 10px;
    padding: 11.5px;
    gap: 20px;
    margin: auto;
    @media screen and (min-width: 767.98px) {
      margin: 0;
    }

    li {
      a {
        img {
          display: block;
          min-width: 24px;
          width: 24px;
          height: 24px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          transition: 0.3s ease;
          filter: grayscale(0) brightness(0);
          cursor: pointer;
        }
      }
    }
  }
}


.services-tmp {
  margin-top: 60px;
  @media screen and (min-width: 767.98px) {
    margin-top: 40px;
  }

  &__wrapper {
  }

  &__top {
    display: grid;
    gap: 5px;

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
        font-size: 48px;
      }
    }
  }

  &__sub-title {
    font-size: 14px;
    font-weight: 300;
    line-height: 148%;
    color: #FFF;
    @media screen and (min-width: 767.98px) {
      font-size: 16px;
    }
    @media screen and (min-width: 991.98px) {
      font-size: 18px;
      max-width: 620px;
    }
    @media screen and (min-width: 1199.98px) {
      max-width: 820px;
    }
  }

  &__img {
    picture {
      img {

      }
    }
  }
}
</style>