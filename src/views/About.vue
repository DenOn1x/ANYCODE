<script setup>

import Faq from "@/components/Faq/Faq.vue";

import aboutImg from "@/assets/images/about-i.jpg";
import Rating from "@/assets/images/svg/ic_rating.svg?url";
import Button from "@/UI/Button.vue";

import anycodeImg from "@/assets/images/tt1.png";

</script>

<template>
  <section class="about-main">
    <div class="container">
      <div class="about-main__wrapper">
        <div class="about-main__content">
          <h1><span>AnyCode</span> — <br> <span>лидер</span> в сфере разработки ПО</h1>
          <div class="about-main__content-text">
            <p>Anycode — это более 5 лет опыта в IT-разработке, тестировании и консалтинге. Мы сотрудничаем с ведущими
              клиентами из США и Европы, работаем с обширным стеком технологий и реализуем проекты самых разных
              направлений.</p>
          </div>
          <Button :label="$t('request_quote')" color="fill" @click="showModalForm = true"/>
        </div>
        <div class="about-main__founders">
          <div class="about-main__founders-item">
            <div class="about-main__founders-item-img">
              <picture>
                <img :src="1" alt="founder"/>
              </picture>
            </div>
            <div class="about-main__founders-item-info">
              <div class="about-main__founders-item-info-titles">Попов Даниил</div>
              <p>Технический директор, руководитель бекенд-разработки</p>
              <a href="#" target="_blank" class="about-main__founders-item-link">
                LinkedIn
              </a>
            </div>
          </div>
          <div class="about-main__founders-item">
            <div class="about-main__founders-item-img">
              <picture>
                <img :src="1" alt="founder"/>
              </picture>
            </div>
            <div class="about-main__founders-item-info">
              <div class="about-main__founders-item-info-titles">Онискевич Денис</div>
              <p>Креативный директор, руководитель фронтенд-разработки</p>
              <a href="#" target="_blank" class="about-main__founders-item-link">
                LinkedIn
              </a>
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


  <section class="about">
    <div class="container">
      <div class="about__wrapper">
        <div class="about__heading">
          <div class="about__heading-title">Мы занимаемся разработкой и тестированием приложений</div>
        </div>
        <div class="about__content">
          <div class="about__block">
          <span
              class="about__subtitle">Мы помогаем клиентам решать бизнес-задачи с помощью современных IT-решений</span>
            <div class="about__stats">
              <div class="about__stat">
                <span class="about__stat-value">20+</span>
                <span class="about__stat-text">успешных проектов в различных индустриях</span>
              </div>
              <div class="about__stat">
                <span class="about__stat-value">2.5+</span>
                <span class="about__stat-text">года, в среднем, длится наше сотрудничество с клиентами</span>
              </div>
            </div>
          </div>

          <div class="about__block">
            <span class="about__subtitle">Мы непрерывно улучшаем нашу техническую экспертизу и расширяем географию проектов</span>
            <div class="about__stats">
              <div class="about__stat">
                <span class="about__stat-value">20+</span>
                <span class="about__stat-text">технологий в портфолио</span>
              </div>
              <div class="about__stat">
                <span class="about__stat-value">100+</span>
                <span class="about__stat-text">сотрудников по всему миру</span>
              </div>
            </div>
          </div>

          <div class="about__block">
            <span class="about__subtitle">Мы развиваем внутреннее сообщество экспертов и помогаем расширять свои знания и навыки в различных направлениях</span>
            <div class="about__stats">
              <div class="about__stat">
                <span class="about__stat-value">90%</span>
                <span class="about__stat-text">сотрудников уровня Middle/Senior</span>
              </div>
              <div class="about__stat">
                <span class="about__stat-value">30+</span>
                <span class="about__stat-text">сфер, в которых мы реализуем проекты</span>
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
          <p>Мы регулярно завоевываем признание в рейтингах, демонстрируя высокий уровень профессионализма и
            эффективности в нашей работе.
          </p>
        </div>
        <div class="products-rating__cards">
          <div class="products-rating__card">
            <div class="products-rating__img">
              <img :src="Rating" alt="products-rating"/>
            </div>
            <div class="products-rating__info">
              Прорыв года в области IT-услуг на премии Global Business Tech Awards в
              Лондоне.
            </div>
          </div>
          <div class="products-rating__card">
            <div class="products-rating__img">
              <img :src="Rating" alt="products-rating"/>
            </div>
            <div class="products-rating__info">
              Награда за инновации в области искусственного интеллекта на AI Excellence Awards.
            </div>
          </div>
          <div class="products-rating__card">
            <div class="products-rating__img">
              <img :src="Rating" alt="products-rating"/>
            </div>
            <div class="products-rating__info">Премия за лучшую интеграцию IT и бизнеса" — на IT-Business Integration
              Awards.
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <Faq/>


</template>

<style scoped lang="scss">
.products-rating {
  background: #c7ced1;
  margin-top: 60px;
  @media screen and (min-width: 991.98px) {
    margin-top: 100px;
  }

  &__wrapper {
    padding: 60px 0;
    @media screen and (min-width: 991.98px) {
      padding: 80px 0;

      display: flex;
      gap: 48px;
    }
  }

  &__txt {
    p {
      font-size: 18px;
      font-weight: 300;
      line-height: 148%;
      color: #070707;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  &__card {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__img {
    img {

    }
  }

  &__info {
    font-size: 16px;
    font-weight: 300;
    line-height: 148%;
    color: #070707;
  }
}

::v-deep {
  .faq {
    &__wrapper {
      border-radius: 20px;
      margin: auto;
      box-shadow: rgba(255, 255, 255, 0.55) 0 0 30px;
      padding: 40px;
      @media screen and (min-width: 991.98px) {
        border-radius: 40px;
        padding: 60px;
      }
    }
  }

}

.about-main {
  padding-top: 20px;
  @media screen and (min-width: 767.98px) {
    padding-top: 80px;
  }
  position: relative;

  //padding: 40px 0;
  //@media screen and (min-width: 991.98px) {
  //  padding: 80px 0;
  //}

  &__bg {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: -1;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    @media screen and (min-width: 767.98px) {
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
        padding-bottom: 110%;
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
        font-size: 68px;
      }

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

  &__content {
    //display: flex;
    //flex-direction: column;
    //align-items: flex-start;
    //gap: 80px;


    button {
      //min-width: 220px;
      margin-top: 24px;

      position: relative;

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

    p {
      font-size: 16px;
      font-weight: 300;
      line-height: 168%;
      color: rgba(255, 255, 255, 0.7);

    }
  }

  &__founders {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;

    &-item {
      &-img {
        picture {
          img {
          }
        }
      }

      &-info {
        &-titles {
          color: #fff;

        }

        p {
          color: #fff;
        }

        &-link {
        }
      }
    }
  }
}

.about {
  color: #FFF;
  margin-top: 60px;
  @media screen and (min-width: 991.98px) {
    margin-top: 100px;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
  }

  &__heading {

    position: relative;

    &-title {
      //position: sticky;
      //position: -webkit-sticky;
      //top: 20px;

      font-size: 44px;
      font-weight: 300;
      line-height: 148%;
      color: #FFF;

    }
  }

  &__content {

  }

  &__block {
    &:not(:first-child) {
      padding-top: 80px;
    }
  }

  &__subtitle {
    font-size: 20px;
    font-weight: 400;
    line-height: 148%;
    color: #FFF;
  }

  &__stats {
    padding-top: 24px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  &__stat {
    padding-top: 12px;
    border-top: 1px solid #FFF;
    display: flex;
    flex-direction: column;

    &-value {
      font-size: 64px;
      font-weight: 400;
      line-height: 148%;
      color: #FFF;
    }

    &-text {
      font-size: 16px;
      font-weight: 300;
      line-height: 148%;
      color: #FFF;
    }
  }

}
</style>