<script setup>
import {ref} from "vue";

import Button from "@/UI/Button.vue";
import Faq from "@/components/Faq/Faq.vue";
import Modal from '@/components/Modals/Modal.vue';
import ModalQuote from "@/components/Modals/ModalQuote.vue";

import Rating from "@/assets/images/svg/ic_rating.svg?url";
import Conf from "@/assets/images/i-conf.jpg?url";

import anycodeImg from "@/assets/images/tt1.png";
import personImg from "@/assets/images/person-f-001.jpg";
import personImgD from "@/assets/images/person-f-002.jpg";


const showModalForm = ref(false);

</script>

<template>
  <section class="about-main">
    <div class="container">
      <div class="about-main__wrapper">
        <div class="about-main__content">
          <h1>{{ $t("about_main_title") }}</h1>
          <div class="about-main__content-text">
            <p>{{ $t("about_main_description") }}</p>
          </div>
          <Button :label="$t('request_about_quote')" color="fill" @click="showModalForm = true"/>
        </div>
        <div class="about-main__founders">
          <div class="about-main__founders-item">
            <div class="about-main__founders-item-img">
              <picture>
                <img :src="personImgD" alt="founder"/>
              </picture>
            </div>
            <div class="about-main__founders-item-info">
              <div class="about-main__founders-item-info-titles">{{ $t("founder_2_name") }}</div>
              <p><b>({{ $t("founder_2_role") }})</b></p>
              <p>{{ $t("founder_2_position") }}</p>
            </div>
          </div>
          <div class="about-main__founders-item">
            <div class="about-main__founders-item-img">
              <picture>
                <img :src="personImg" alt="founder"/>
              </picture>
            </div>
            <div class="about-main__founders-item-info">
              <div class="about-main__founders-item-info-titles">{{ $t("founder_1_name") }}</div>
              <p><b>({{ $t("founder_1_role") }})</b></p>
              <p>{{ $t("founder_1_position") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="about-main__bg">
      <picture>
        <img :src="anycodeImg" alt="anycodeMain"/>
      </picture>
    </div>
  </section>

  <section class="about-conference">
    <div class="about-conference__bg">
      <picture>
        <img :src="Conf" alt="conference">
      </picture>
    </div>
    <div class="container">
      <h2>{{ $t("about_conference_title") }}</h2>
      <div class="about-conference__wrapper">
        <div class="about-conference__content">
          <p>{{ $t("about_conference_text_1") }}</p>
        </div>
        <div class="about-conference__content">
          <p>{{ $t("about_conference_text_2") }}</p>
        </div>
        <div class="about-conference__content">
          <p>{{ $t("about_conference_text_3") }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="about">
    <div class="container">
      <div class="about__wrapper">
        <h2>{{ $t("about_company_numbers_title") }}</h2>
        <div class="about__text">
          <p class="about__subtitle">{{ $t("about_company_numbers_text_1") }}</p>
          <p class="about__subtitle">{{ $t("about_company_numbers_text_2") }}</p>
          <p class="about__subtitle">{{ $t("about_company_numbers_text_3") }}</p>
        </div>

        <div class="about__blocks">
          <div class="about__block">
            <div class="about__stats">
              <div class="about__stat">
                <span class="about__stat-value">100+</span>
                <span class="about__stat-text">{{ $t("about_stats_projects") }}</span>
              </div>
              <div class="about__stat">
                <span class="about__stat-value">1.5+</span>
                <span class="about__stat-text">{{ $t("about_stats_client_duration") }}</span>
              </div>
            </div>
          </div>
          <div class="about__block">
            <div class="about__stats">
              <div class="about__stat">
                <span class="about__stat-value">15+</span>
                <span class="about__stat-text">{{ $t("about_stats_technologies") }}</span>
              </div>
              <div class="about__stat">
                <span class="about__stat-value">60+</span>
                <span class="about__stat-text">{{ $t("about_stats_employees") }}</span>
              </div>
            </div>
          </div>
          <div class="about__block">
            <div class="about__stats">

              <div class="about__stat">
                <span class="about__stat-value">90%</span>
                <span class="about__stat-text">{{ $t("about_stats_middle_senior") }}</span>
              </div>
              <div class="about__stat">
                <span class="about__stat-value">10+</span>
                <span class="about__stat-text">{{ $t("about_stats_industries") }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="products-rating">
    <div class="container">
      <div class="products-rating__wrapper">
        <div class="products-rating__txt">
          <p>{{ $t("products_rating_title") }}</p>
        </div>
        <div class="products-rating__cards">
          <div class="products-rating__card">
            <div class="products-rating__img">
              <img :src="Rating" alt="products-rating"/>
            </div>
            <div class="products-rating__info">
              {{ $t("products_rating_award_1") }}
            </div>
          </div>
          <div class="products-rating__card">
            <div class="products-rating__img">
              <img :src="Rating" alt="products-rating"/>
            </div>
            <div class="products-rating__info">
              {{ $t("products_rating_award_2") }}
            </div>
          </div>
          <div class="products-rating__card">
            <div class="products-rating__img">
              <img :src="Rating" alt="products-rating"/>
            </div>
            <div class="products-rating__info">
              {{ $t("products_rating_award_3") }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Faq/>

  <Modal v-model="showModalForm" modalClass="modal-quote">
    <ModalQuote/>
  </Modal>
</template>

<style scoped lang="scss">
.about-main {
  padding-top: 20px;
  @media screen and (min-width: 767.98px) {
    padding-top: 80px;
  }
  position: relative;


  &__bg {
    display: none;
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: -1;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    @media screen and (min-width: 767.98px) {
      display: block;
      max-width: 440px;
    }
    @media screen and (min-width: 991.98px) {
      max-width: 480px;
    }
    @media screen and (min-width: 1199.98px) {
      max-width: 580px;
    }
    @media screen and (min-width: 1639.98px) {
      max-width: 620px;
    }

    picture {
      @media screen and (min-width: 767.98px) {
        position: relative;
        display: block;
        padding-bottom: 100%;
        height: 0;
        overflow: hidden;
      }
      @media screen and (min-width: 991.98px) {
        padding-bottom: 100%;
      }

      img {
        width: 100%;
        height: 100%;
        z-index: 1;
        object-fit: contain;
        @media screen and (min-width: 767.98px) {
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }


  h1 {
    font-size: 24px;
    font-weight: 400;
    line-height: 148%;
    color: #FFF;
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
    0px -5px 35px rgba(255, 255, 255, 0.3);
    margin-bottom: 24px;
    @media screen and (min-width: 767.98px) {
      font-size: 32px;
      line-height: 124%;
    }
    @media screen and (min-width: 991.98px) {
      font-size: 38px;
      margin-bottom: 48px;
    }
    @media screen and (min-width: 1199.98px) {
      font-size: 44px;
    }

    span {
      //color: #7DFF7A;
      &:first-child {
        background-image: none;
        -webkit-background-clip: initial;
        -webkit-text-fill-color: initial;
        font-size: 32px;
        @media screen and (min-width: 991.98px) {
          font-size: 48px;
        }
        @media screen and (min-width: 1199.98px) {
          font-size: 68px;
        }
      }

      background-image: linear-gradient(120deg, #FFF 5%, #7470ff 30%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &__wrapper {
    display: grid;
    gap: 80px;
    @media screen and (min-width: 991.98px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 48px;
    }
  }

  &__content {
    &-text {
      @media screen and (min-width: 991.98px) {
        max-width: 480px;
      }

      p {
        font-size: 13px;
        font-weight: 300;
        line-height: 168%;
        color: rgba(255, 255, 255, 0.7);
        @media screen and (min-width: 991.98px) {
          font-size: 14px;
        }
        @media screen and (min-width: 1199.98px) {
          font-size: 16px;
        }
      }

    }

    button {
      margin-top: 24px;
      position: relative;

      @media screen and (min-width: 991.98px) {
        margin-top: 48px;
      }

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 150%;
        height: 300%;
        background: rgba(116, 112, 255, 0.5);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        filter: blur(20px);
        z-index: -1;
      }
    }
  }

  &__founders {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    @media screen and (min-width: 767.98px) {
      gap: 48px;
    }

    &-item {

      &:last-child {
        margin-top: -40px;
        @media screen and (min-width: 767.98px) {
          margin-top: -80px;
        }
        @media screen and (min-width: 991.98px) {
          margin-top: 80px;
        }
      }

      &-img {
        box-shadow: rgba(255, 255, 255, 0.55) 0 0 20px;
        padding: 12px;
        border-radius: 12px;
        @media screen and (min-width: 991.98px) {
          padding: 24px;
        }

        picture {
          position: relative;
          display: block;
          padding-bottom: 150%;
          height: 0;
          overflow: hidden;

          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            object-fit: cover;
            border-radius: 6px;
          }
        }
      }

      &-info {
        margin-top: 20px;

        &-titles {
          color: #fff;

        }

        p {
          font-size: 12px;
          font-weight: 300;
          line-height: 168%;
          color: rgba(255, 255, 255, 0.7);
          @media screen and (min-width: 991.98px) {
            font-size: 13px;
          }

          b {
            display: block;
            font-weight: 400;
            margin: 5px 0;
          }
        }
      }
    }
  }
}

.about-conference {
  position: relative;
  overflow: hidden;
  padding: 40px 0;
  margin-top: 60px;
  @media screen and (min-width: 991.98px) {
    padding: 80px 0;
    margin-top: 100px;
    //min-height: 440px;
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    picture, img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left;
      filter: brightness(.6);
    }
  }

  h2 {
    font-size: 24px;
    font-weight: 400;
    line-height: 148%;
    color: #FFF;
    margin-bottom: 24px;
    @media screen and (min-width: 767.98px) {
      font-size: 32px;
    }
    @media screen and (min-width: 991.98px) {
      font-size: 38px;
      line-height: 132%;
      margin-bottom: 48px;

    }
    @media screen and (min-width: 1199.98px) {
      font-size: 44px;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__content {
    max-width: 440px;
    padding: 24px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    backdrop-filter: blur(5px);

    @media screen and (min-width: 767.98px) {
      &:nth-of-type(2) {
        margin-left: 80px;
      }

      &:nth-of-type(3) {
        margin-left: 160px;
      }
    }


    p {
      font-size: 13px;
      font-weight: 300;
      line-height: 148%;
      color: #FFF;
      @media screen and (min-width: 991.98px) {
        font-size: 14px;
      }
    }
  }
}

.about {
  margin-top: 60px;
  @media screen and (min-width: 991.98px) {
    margin-top: 100px;
  }

  h2 {
    font-size: 24px;
    font-weight: 400;
    line-height: 148%;
    color: #FFF;
    margin-bottom: 24px;
    @media screen and (min-width: 767.98px) {
      font-size: 32px;
    }
    @media screen and (min-width: 991.98px) {
      font-size: 38px;
      line-height: 132%;
      margin-bottom: 48px;

    }
    @media screen and (min-width: 1199.98px) {
      font-size: 44px;
    }
  }

  &__wrapper {

  }


  &__text {
    display: none;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    @media screen and (min-width: 991.98px) {
      display: grid;
    }
    @media screen and (min-width: 1199.98px) {
      gap: 48px;
    }
  }

  &__blocks {
    display: grid;
    gap: 24px;
    @media screen and (min-width: 767.98px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 991.98px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1199.98px) {
      gap: 48px;
    }
  }

  &__block {
    display: flex;
    flex-direction: column;

    &:nth-of-type(1) {
      .about__stats {
        background: #FFF;
        color: #070707;

        .about__stat {
          &:first-child {
            border-bottom: 2px solid #7470ff;
          }
        }
      }


    }

    &:nth-of-type(2) {
      color: #FFF;

      .about__stats {
        background: #7470ff;

        .about__stat {
          &:first-child {
            border-bottom: 2px solid #c7ced1;
          }
        }
      }
    }

    &:nth-of-type(3) {
      .about__stats {
        background: #c7ced1;
        color: #070707;

        .about__stat {
          &:first-child {
            border-bottom: 2px solid #FFF;
          }
        }
      }
    }
  }

  &__subtitle {
    font-size: 15px;
    font-weight: 300;
    line-height: 148%;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 12px;
    @media screen and (min-width: 991.98px) {
      max-width: 80%;
      padding-left: 24px;
    }
  }

  &__stats {
    display: flex;
    flex-direction: column;

    padding: 24px;
    border-radius: 20px;
    height: 100%;
  }

  &__stat {
    display: flex;
    flex-direction: column;

    &:nth-of-type(1) {
      padding-bottom: 10px;
      @media screen and (min-width: 767.98px) {
        padding-bottom: 20px;
      }
    }

    &:nth-of-type(2) {
      padding-top: 10px;
      @media screen and (min-width: 767.98px) {
        padding-top: 20px;
      }
    }

    &-value {
      font-size: 64px;
      font-weight: 400;
      line-height: 124%;
    }

    &-text {
      font-size: 13px;
      font-weight: 300;
      line-height: 148%;
      @media screen and (min-width: 767.98px) {
        font-size: 16px;
      }
    }
  }

}

.products-rating {
  background: #c7ced1;
  margin-top: 60px;
  @media screen and (min-width: 991.98px) {
    margin-top: 100px;
  }

  &__wrapper {
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media screen and (min-width: 767.98px) {
      padding: 60px 0;
      gap: 48px;

    }
    @media screen and (min-width: 991.98px) {
      padding: 80px 0;
      flex-direction: row;
      gap: 48px;
    }
  }

  &__txt {

    p {
      font-size: 14px;
      font-weight: 300;
      line-height: 148%;
      color: #070707;
      @media screen and (min-width: 991.98px) {
        font-size: 18px;
      }
    }
  }

  &__cards {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (min-width: 767.98px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__img {
    img {
      display: block;
      max-width: 80px;
      height: auto;
      object-fit: cover;
      @media screen and (min-width: 767.98px) {
        max-width: 100%;
      }
    }

  }

  &__info {
    font-size: 13px;
    font-weight: 300;
    line-height: 148%;
    color: #070707;
    @media screen and (min-width: 991.98px) {
      font-size: 14px;
    }
  }
}

::v-deep {
  .accordion {
    margin: auto;
    box-shadow: rgba(255, 255, 255, 0.55) 0 0 30px;
    border-radius: 20px;
    padding: 12px;
    @media screen and (min-width: 767.98px) {
      border-radius: 40px;
      padding: 40px;
    }
  }


}

</style>