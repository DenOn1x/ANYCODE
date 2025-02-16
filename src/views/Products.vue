<script setup>

import Quiz from "@/components/Quiz/Quiz.vue";

import E1 from "@/assets/images/products/e.1.png";
import E2 from "@/assets/images/products/e.2.png";
import E3 from "@/assets/images/products/e.3.png";

import SliderProducts from "@/components/SliderProducts.vue";

const sliderOne = [
  {
    id: 1,
    img: E1,
    benefits: [
      "Повышение эффективности бизнеса",
      "Автоматизация процессов",
      "Интеграция с топовыми сервисами"
    ],
    features: [
      "API-интеграция",
      "Гибкие настройки",
      "Поддержка нескольких валют"
    ],
    tools: "Python/Fast Api/Nuxt/Vue js",
    timeline: "3 месяца"
  },
  {id: 2, img: E2},
  {id: 3, img: E3},
  {id: 4, img: E1},
];

const sliderTwo = [
  {
    id: 5,
    img: E1,
    benefits: [
      "Глубокая аналитика данных",
      "Предсказательная аналитика",
      "Повышение продаж"
    ],
    features: [
      "Алгоритмы машинного обучения",
      "Визуализация данных",
      "Интеграция с CRM"
    ],
    tools: "Python/Fast Api/Nuxt/Vue js",
    timeline: "5 месяцев"
  },
  {id: 6, img: E2},
  {id: 7, img: E3},
  {id: 8, img: E1},
];

</script>

<template>
  <section class="examples-products">
    <div class="container">
      <h1>Открываем доступ к технологиям, которые двигают ваш бизнес вперед</h1>
    </div>

    <div class="examples-products__wrapper">
      <div class="examples-products__item">
        <div class="container">
          <div class="examples-products__item-heading">
            <h2>SmartCommerce</h2>
            <p><b>e-commerce платформы</b></p>
            <p>Решение для автоматической синхронизации данных между популярными сервисами, повышающее эффективность
              бизнеса.</p>
          </div>
        </div>

        <SliderProducts
            :slides="sliderOne"
            prevButtonClass="slider-one-prev"
            nextButtonClass="slider-one-next"
        />
      </div>

      <div class="examples-products__item">
        <div class="container">
          <div class="examples-products__item-heading">
            <h2>AI Retail Analytics</h2>
            <p><b>Аналитика на основе ИИ</b></p>
            <p>Решение для автоматизированного анализа данных в сфере ритейла, повышающее продажи и оптимизирующее
              бизнес-стратегию.</p>
          </div>
        </div>

        <SliderProducts
            :slides="sliderTwo"
            prevButtonClass="slider-two-prev"
            nextButtonClass="slider-two-next"
        />
      </div>
    </div>
  </section>

  <Quiz/>
</template>


<style scoped lang="scss">
.examples-products {
  padding-top: 20px;
  @media screen and (min-width: 767.98px) {
    padding-top: 80px;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 148%;
    color: rgba(255, 255, 255, 0.7);
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
    0px -5px 35px rgba(255, 255, 255, 0.4);
    margin-bottom: 48px;
    @media screen and (min-width: 767.98px) {
      font-size: 32px;
      line-height: 124%;
    }
    @media screen and (min-width: 991.98px) {
      font-size: 38px;
      margin-bottom: 120px;
      max-width: 80%;
    }
    @media screen and (min-width: 1199.98px) {
      font-size: 44px;
    }
  }

  &__wrapper {
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 48px;

    }

    &-heading {
      margin-bottom: 12px;
      @media screen and (min-width: 767.98px) {
        margin-bottom: 24px;
      }
      @media screen and (min-width: 991.98px) {
        max-width: 50%;
      }

      h2 {
        font-size: 24px;
        font-weight: 400;
        line-height: 148%;
        color: #FFF;
        margin-bottom: 12px;
        @media screen and (min-width: 767.98px) {
          font-size: 32px;
          line-height: 124%;
        }
        @media screen and (min-width: 991.98px) {
          font-size: 38px;
          margin-bottom: 24px;
        }
        @media screen and (min-width: 1199.98px) {
          font-size: 44px;
        }
      }


      p {
        font-size: 13px;
        font-weight: 300;
        line-height: 168%;
        color: rgba(255, 255, 255, 0.7);
        margin: 5px 0;
        @media screen and (min-width: 991.98px) {
          font-size: 16px;
        }

        b {
          font-size: 24px;
          font-weight: 400;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>