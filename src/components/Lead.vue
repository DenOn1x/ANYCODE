<script setup>
import Button from "@/UI/Button.vue";
import anycodeImg from "@/assets/images/anycode-ball-1.png";
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

  &__wrapper {
    padding: 20px 0;
    @media screen and (min-width: 767.98px) {
      display: grid;
      grid-template-columns: 65% 30%;
      align-items: flex-start;
      justify-content: space-between;
      padding: 60px 0;
    }
    @media screen and (min-width: 991.98px) {
      grid-template-columns: 70% 25%;
      padding: 80px 0;
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
      font-weight: 700;
      line-height: 148%;
      color: #FFF;
      @media screen and (min-width: 767.98px) {
        font-size: 32px;
      }
      @media screen and (min-width: 991.98px) {
        font-size: 48px;
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
        background-image: linear-gradient(120deg, #101b10 5%, #24ff00 30%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    &__description {
      font-size: 14px;
      font-weight: 400;
      line-height: 142%;
      color: #ffffff5c;
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
        font-weight: 700;
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
      max-width: 540px;
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
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid #ffffff5c;
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

    li {
      font-size: 14px;
      font-weight: 400;
      line-height: 142%;
      color: #ffffff5c;
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
        background: #ffffff5c;
      }
    }
  }

  &__socials {
    display: flex;
    align-items: center;
    width: fit-content;
    border: 1px solid #ffffff5c;
    border-radius: 10px;
    padding: 10px;
    gap: 10px;
    @media screen and (min-width: 1199.98px) {
      gap: 15px;
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
          cursor: pointer;
        }
      }
    }
  }
}


</style>
