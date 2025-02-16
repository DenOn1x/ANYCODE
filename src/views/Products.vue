<script setup>

import Quiz from "@/components/Quiz/Quiz.vue";

import ProductA1 from "@/assets/images/products/i-product-a001.png";
import ProductA2 from "@/assets/images/products/i-product-a002.png";
import ProductA3 from "@/assets/images/products/i-product-a003.png";
import ProductA4 from "@/assets/images/products/i-product-a004.png";


import ProductB1 from "@/assets/images/products/i-product-b001.png";
import ProductB2 from "@/assets/images/products/i-product-b002.png";
import ProductB3 from "@/assets/images/products/i-product-b003.png";
import ProductB4 from "@/assets/images/products/i-product-b004.png";

import ProductC1 from "@/assets/images/products/i-product-c001.png";
import ProductC2 from "@/assets/images/products/i-product-c002.png";
import ProductC3 from "@/assets/images/products/i-product-c003.png";
import ProductC4 from "@/assets/images/products/i-product-c004.png";
import ProductC5 from "@/assets/images/products/i-product-c005.png";
import ProductC6 from "@/assets/images/products/i-product-c006.png";

import ProductD1 from "@/assets/images/products/i-product-d001.png";
import ProductD2 from "@/assets/images/products/i-product-d002.png";
import ProductD3 from "@/assets/images/products/i-product-d003.png";
import ProductD4 from "@/assets/images/products/i-product-d004.png";
import ProductD5 from "@/assets/images/products/i-product-d005.png";

import ProductE1 from "@/assets/images/products/i-product-e001.png";
import ProductE2 from "@/assets/images/products/i-product-e002.png";
import ProductE3 from "@/assets/images/products/i-product-e003.png";
import ProductE4 from "@/assets/images/products/i-product-e004.png";
import ProductE5 from "@/assets/images/products/i-product-e005.png";

import SliderProducts from "@/components/SliderProducts.vue";

const sliderProduct3 = [
  {
    id: 1,
    img: ProductC1,
    features: [
      "Доска задач (Kanban, списки, календари)",
      "Управление доступом и ролями в команде",
      "Отслеживание прогресса и приоритетов",
      "Интеграция с популярными сервисами",
      "Поддержка светлой и тёмной темы интерфейса"
    ],
    tools: ["React", "TypeScript", "Redux", "TailwindCSS", "Node.js", "FastAPI"],
  },
  {id: 2, img: ProductC2},
  {id: 3, img: ProductC3},
  {id: 4, img: ProductC4},
  {id: 5, img: ProductC5},
  {id: 6, img: ProductC6},
];

const sliderProduct4 = [
  {
    id: 1,
    img: ProductD1,
    features: [
      "AI-генерация кода и дизайна",
      "Мгновенное редактирование изображений",
      "Интеллектуальный чат-бот для взаимодействия с AI",
      "Гибкие настройки и адаптивность"
    ],
    tools: ["Python", "FastAPI", "Next.js", "TypeScript", "TailwindCSS", "TensorFlow", "OpenAI API"],
  },
  {id: 2, img: ProductD2},
  {id: 3, img: ProductD3},
  {id: 4, img: ProductD4},
  {id: 5, img: ProductD5},
];

const sliderProduct5 = [
  {
    id: 1,
    img: ProductE1,
    features: [
      "Каталог популярных товаров и новых поступлений",
      "Удобная система фильтров по типу кожи и аромату",
      "Блог с полезными статьями по уходу за кожей",
      "Гибкая система скидок и подарочных наборов"
    ],
    tools: ["Vue js", "TypeScript", "TailwindCSS", "Python"],
  },
  {id: 2, img: ProductE2},
  {id: 3, img: ProductE3},
  {id: 4, img: ProductE4},
  {id: 5, img: ProductE5},
];


const sliderProduct1 = [
  {
    id: 1,
    img: ProductA1,
    features: [
      "Автоматизированный анализ финансовых категорий",
      "Отчёты по инвестициям и потерям в трейдинге",
      "Интерактивные графики и детализированные данные",
      "QR-коды для быстрой отправки и получения средств",
    ],
    tools: ["React", "TypeScript", "Next.js", "Chart.js", "Node.js"],
  },
  {id: 2, img: ProductA2},
  {id: 3, img: ProductA3},
  {id: 4, img: ProductA4},
];

const sliderProduct2 = [
  {
    id: 1,
    img: ProductB1,
    features: [
      "Запуск, пауза и остановка операций с отслеживанием времени",
      "Встроенные инструкции и контроль технических норм",
      "Регистрация серийных номеров изделий",
      "Отчёты о качестве с указанием причин дефектов",
      "Удобная система поиска и фильтрации операций"
    ],
    tools: ["Python", "Odoo", "PostgreSQL", "React", "TypeScript"],
  },
  {id: 2, img: ProductB2},
  {id: 3, img: ProductB3},
  {id: 4, img: ProductB4},
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
            <h2>AnycodeBoard</h2>
            <p><b>TaskManager</b></p>
            <p>Комплексное решение для эффективного управления проектами, командами и задачами. Платформа объединяет в
              себе удобные инструменты для планирования, мониторинга и совместной работы, обеспечивая прозрачность и
              контроль всех процессов.
            </p>
          </div>
        </div>

        <SliderProducts
            :slides="sliderProduct3"
            prevButtonClass="slider-three-prev"
            nextButtonClass="slider-three-next"
        />
      </div>

      <div class="examples-products__item">
        <div class="container">
          <div class="examples-products__item-heading">
            <h2>Anycode AI</h2>
            <p><b>Платформа на основе искусственного интеллекта для генерации кода и мультимедийного контента</b></p>
            <p>Инновационная AI-платформа, которая помогает разработчикам, дизайнерам и командам автоматизировать
              процессы кодирования, редактирования изображений и создания видео. Использует искусственный интеллект для
              ускорения разработки и улучшения качества контента.
            </p>
          </div>
        </div>

        <SliderProducts
            :slides="sliderProduct4"
            prevButtonClass="slider-four-prev"
            nextButtonClass="slider-four-next"
        />
      </div>

      <div class="examples-products__item">
        <div class="container">
          <div class="examples-products__item-heading">
            <h2>Soapy</h2>
            <p><b>Интернет-магазин натурального мыла ручной работы</b></p>
            <p>Интернет-магазин для продажи натурального, экологичного мыла ручной работы, созданного из натуральных
              ингредиентов с заботой о коже. Каждое мыло разработано с уникальной формулой, чтобы обеспечить
              максимальный уход и ароматерапевтический эффект.
            </p>
          </div>
        </div>

        <SliderProducts
            :slides="sliderProduct5"
            prevButtonClass="slider-five-prev"
            nextButtonClass="slider-five-next"
        />
      </div>

      <div class="examples-products__item">
        <div class="container">
          <div class="examples-products__item-heading">
            <h2>Crypto Finance Hub</h2>
            <p><b>Платформа для управления финансами и инвестициями в криптовалюте</b></p>
            <p>Удобное решение для мониторинга финансовых потоков, анализа доходов и расходов, а также отслеживания
              эффективности торговых операций. Платформа позволяет пользователям легко управлять инвестициями и
              оперативно реагировать на изменения рынка.
            </p>
          </div>
        </div>

        <SliderProducts
            :slides="sliderProduct1"
            prevButtonClass="slider-one-prev"
            nextButtonClass="slider-one-next"
        />
      </div>

      <div class="examples-products__item">
        <div class="container">
          <div class="examples-products__item-heading">
            <h2>ManuTrack</h2>
            <p><b>Система управления производственными операциями</b></p>
            <p>Цифровая платформа для оптимизации производственных процессов, контроля качества и учёта выполненных
              операций на производстве. Позволяет рабочим и операторам следить за прогрессом работы, регистрировать
              ошибки и контролировать соответствие стандартам.</p>
          </div>
        </div>

        <SliderProducts
            :slides="sliderProduct2"
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
        margin: 10px 0;
        @media screen and (min-width: 991.98px) {
          font-size: 16px;
        }

        b {
          font-size: 24px;
          font-weight: 400;
          line-height: 148%;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>