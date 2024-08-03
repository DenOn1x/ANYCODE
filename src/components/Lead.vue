<script setup>
import {onMounted} from 'vue';
import Button from "@/UI/Button.vue";
import anycodeImg from "@/assets/images/tt1.png";
import IconChevronHelp from "@/assets/images/svg/ic_chevron_help.svg?url";
import ic_fb from '@/assets/images/svg/ic_fb.svg?url'
import ic_tg from '@/assets/images/svg/ic_tg.svg?url'
import ic_inst from '@/assets/images/svg/ic_inst.svg?url'
import ic_wp from '@/assets/images/svg/ic_wp.svg?url'


</script>

<template>
  <section class="lead">

    <div class="container">
      <div class="lead__wrapper">
        <div class="lead__manual">
          <div class="lead__content content-lead">
            <div class="content-lead__top">
              <h1 class="content-lead__heading">
                Реализуем вашу <span>идею</span> <br>
                в современное IT-решение
              </h1>
              <div class="content-lead__description">
                Создадим <span>продукт с нуля,</span> доработаем действующий и автоматизируем бизнес-процессы в вашей
                компании
              </div>
            </div>
            <div class="content-lead__bottom">
              <Button label="Оставить заявку" color="fill"/>
              <Button label="Рассчитать стоимость" color="stroke"/>
              <div class="content-lead__bottom-clue">
                Ответьте на 5 вопросов и получите расчет стоимости и рекомендации по разработке
              </div>
            </div>
          </div>
        </div>
        <div class="lead__bg">
          <div class="lead__bg-help">
            <img :src="IconChevronHelp" alt=""/>
          </div>
          <picture>
            <img :src="anycodeImg" alt="anycodeMain"/>
          </picture>
        </div>
        <div class="lead__actions">
          <ul class="lead__additions">
            <li>Анализ ваших задач</li>
            <li>Соблюдение сроков</li>
            <li>Поддержка продуктов</li>
            <li>Команда профессионалов</li>
          </ul>
          <ul class="lead__socials">
            <li>
              <a href="#">
                <img :src="ic_fb" alt=""/>
              </a>
            </li>
            <li>
              <a href="#">
                <img :src="ic_tg" alt=""/>
              </a>
            </li>
            <li>
              <a href="#">
                <img :src="ic_inst" alt=""/>
              </a>
            </li>
            <li>
              <a href="#">
                <img :src="ic_wp" alt=""/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>


</template>

<style lang="scss" scoped>

.lead {
  position: relative;
  overflow: hidden;
  z-index: 0;
  border-radius: 20px;
  background: #c7ced1;
  max-width: 90%;
  margin: 10px auto 0;
  @media screen and (min-width: 991.98px){
    border-radius: 40px;
  }

  &__wrapper {
    padding: 40px 0;
    @media screen and (min-width: 767.98px) {
      display: grid;
      grid-template-columns: 65% 30%;
      align-items: flex-start;
      justify-content: space-between;
      padding: 60px 0;
    }
    @media screen and (min-width: 991.98px) {
      grid-template-columns: 75% 25%;
      gap: 10px;
      padding: 100px 0;
    }
    @media screen and (min-width: 1199.98px) {
      padding: 120px 0;
    }
  }

  &__manual {

  }

  .content-lead {
    display: grid;
    gap: 20px;
    @media screen and (min-width: 767.98px) {
      gap: 80px;
    }
    @media screen and (min-width: 991.98px) {
      gap: 100px;
    }
    @media screen and (min-width: 1199.98px) {
      gap: 120px;
    }

    &__top {
      display: grid;
      gap: 10px;
      @media screen and (min-width: 767.98px) {
        gap: 20px;
      }
    }

    &__heading {
      font-size: 26px;
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
        //color: #7DFF7A;
        background-image: linear-gradient(120deg, #101b10 5%, #7470ff 30%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    &__description {
      font-size: 14px;
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

    &__bottom-clue {
      display: none;
      @media screen and (min-width: 991.98px) {
        display: block;
        font-size: 12px;
        font-weight: 400;
        line-height: 142%;
        color: #FFF;
        max-width: 220px;
      }
    }
  }

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

  &__bg-help {
    display: none;
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -40%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid #070707;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 1199.98px) {
      top: calc(60% + 20px);
    }

    img {
      display: block;
      min-width: 24px;
      width: 24px;
      height: 24px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      transform: rotate(45deg);
      transition: 0.3s ease;
      animation: moveArrowDiagonal 2s infinite;
    }

    @media screen and (min-width: 991.98px) {
      display: flex;
    }
  }

  @keyframes moveArrowDiagonal {
    0%, 100% {
      transform: translate(0, 0) rotate(45deg);
    }
    50% {
      transform: translate(5px, -5px) rotate(45deg);
    }
  }

  &__actions {
    display: none;
    @media screen and (min-width: 767.98px) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
      height: 100%;
    }
  }

  &__additions {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 40px;
    @media screen and (min-width: 1199.98px) {
      gap: 60px;
    }

    li {
      font-size: 14px;
      font-weight: 400;
      line-height: 142%;
      color: #070707;
      width: fit-content;
      text-align: center;
      position: relative;
      margin-right: 10px;
      @media screen and (min-width: 991.98px) {
        &:nth-of-type(1) {
          padding-right: 25px;
        }
        &:nth-of-type(2) {
          padding-right: 15px;
        }
        &:nth-of-type(3) {
          padding-right: 15px;
        }
        &:nth-of-type(4) {
          padding-right: 25px;
        }
      }
      @media screen and (min-width: 1199.98px) {
        font-size: 16px;
      }


      &:before {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        width: calc(100% + 20px);
        transform: translate(-50%, 0);
        height: 1px;
        background: #070707;
      }
    }
  }

  &__socials {
    display: flex;
    align-items: center;
    width: fit-content;
    border: 1px solid #070707;
    border-radius: 10px;
    padding: 10px;
    gap: 10px;
    @media screen and (min-width: 1199.98px) {
      gap: 20px;
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


</style>
