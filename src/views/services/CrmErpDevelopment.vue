<script setup>
import {ref} from "vue";
import Quiz from "@/components/Quiz/Quiz.vue";

import icExpertAM from "@/assets/images/svg/expert/ic_manufacturing.svg?url";
import icExpertAH from "@/assets/images/svg/expert/ic_healthcare.svg?url";
import icExpertAT from "@/assets/images/svg/expert/ic_technology.svg?url";
import icExpertAF from "@/assets/images/svg/expert/ic_finance.svg?url";
import icExpertAR from "@/assets/images/svg/expert/ic_retail.svg?url";
import icExpertAA from "@/assets/images/svg/expert/ic_agriculture.svg?url";
import icExpertAMA from "@/assets/images/svg/expert/ic_media.svg?url";
import icExpertAFS from "@/assets/images/svg/expert/ic_fitness.svg?url";
import icExpertART from "@/assets/images/svg/expert/ic_restaurant.svg?url";


const serviceInfo = ref({
  title: "Разработка и расширение CRM/ERP систем",
  description:
      "Мы создаем и масштабируем CRM/ERP системы, которые автоматизируют бизнес-процессы, повышают эффективность работы и улучшают взаимодействие с клиентами.",
});

const benefits = ref([
  "Автоматизация рутинных процессов и снижение человеческого фактора",
  "Гибкость и адаптация системы под уникальные бизнес-процессы",
  "Интеграция с внешними сервисами, API, платежными системами и 1С",
  "Высокая масштабируемость для работы с увеличенным количеством данных",
  "Оптимизация рабочих процессов и улучшение командной работы",
  "Безопасность и контроль доступа с учетом ролевых политик",
  "Аналитика и отчетность в режиме реального времени",
  "Повышение производительности бизнеса за счет единого рабочего пространства",
  "Модульность системы — возможность добавлять и изменять функционал по мере роста",
  "Снижение затрат на управление и обслуживание бизнес-процессов",
  "Повышение уровня клиентского сервиса благодаря автоматизированному управлению",
  "Облачные и локальные решения в зависимости от ваших потребностей",
  "Обеспечение стабильной работы даже при высокой нагрузке",
  "Поддержка мобильных устройств и удобный доступ из любой точки мира",
  "Интуитивно понятный интерфейс для сотрудников без технических навыков",
]);


const steps = ref([
  {
    step: "Анализ и проектирование",
    description: "Определяем бизнес-требования, разрабатываем архитектуру и техническое задание."
  },
  {step: "Прототипирование", description: "Создаем схему интерфейсов и пользовательских сценариев для согласования."},
  {step: "Разработка", description: "Программируем функционал, подключаем API и настраиваем интеграции."},
  {step: "Тестирование", description: "Проводим нагрузочные и функциональные тесты для выявления ошибок."},
  {
    step: "Внедрение и поддержка",
    description: "Запускаем систему, обучаем персонал и предоставляем техническую поддержку."
  },
]);


const whyUs = ref([
  {title: "Опыт", description: "Разрабатываем CRM/ERP системы для бизнеса разных масштабов уже более 5 лет."},
  {title: "Глубокая кастомизация", description: "Создаем решения, полностью адаптированные под ваш бизнес-процесс."},
  {
    title: "Интеграции",
    description: "Подключаем систему к 1С, API, платежным сервисам, маркетплейсам и другим платформам."
  },
  {title: "Надежность", description: "Обеспечиваем стабильную работу системы и защищаем данные от потерь."},
]);


const tools = ref([
  "Odoo",
  "Python",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "RabbitMQ",
  "Docker",
  "GraphQL",
  "REST API"
]);


const experts = ref([
  {img: icExpertAM, name: "Промышленность"},
  {img: icExpertAH, name: "Здравоохранение"},
  {img: icExpertAT, name: "Информационные технологии"},
  {img: icExpertAF, name: "Финансы"},
  {img: icExpertAR, name: "Торговля"},
  {img: icExpertAA, name: "Сельское хозяйство"},
  {img: icExpertAMA, name: "Медиа"},
  {img: icExpertAFS, name: "Фитнес-индустрия"},
  {img: icExpertART, name: "Ресторанный бизнес "},
]);
</script>

<template>
  <section class="service-section">
    <div class="container">

      <div class="service-section__heading">
        <h1>{{ serviceInfo.title }}</h1>
        <p>{{ serviceInfo.description }}</p>
      </div>

      <div class="content-block content-block--advantages">
        <h2>Преимущества</h2>
        <ul class="list">
          <li v-for="(benefit, index) in benefits" :key="index">
            <span class="list-number">{{ String(index + 1).padStart(2, '0') }}</span>
            {{ benefit }}
          </li>
        </ul>
      </div>

      <div class="content-block">
        <h2>Основные этапы работы</h2>
        <ul class="list">
          <li v-for="(step, index) in steps" :key="index">
            <strong>{{ step.step }}:</strong> {{ step.description }}
          </li>
        </ul>
      </div>

      <div class="content-block">
        <h2>Почему выбирают нас</h2>
        <ul class=" list--grid">
          <li v-for="(item, index) in whyUs" :key="index">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </li>
        </ul>
      </div>

      <div class="content-block">
        <h2>Технологии и инструменты</h2>
        <ul class=" list--tools">
          <li v-for="(tool, index) in tools" :key="index">{{ tool }}</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>Отраслевая экспертиза</h2>
        <div class="expert-block">
          <div class="expert-block__item" v-for="(expert, index) in experts" :key="index">
            <picture>
              <img :src="expert.img" :alt="expert.name"/>
            </picture>
            <div class="name">{{ expert.name }}</div>
          </div>
        </div>
      </div>
    </div>

    <Quiz/>
  </section>
</template>

<style scoped lang="scss">
.service-section {
  padding-top: 20px;
  color: #FFF;
  @media screen and (min-width: 767.98px) {
    padding-top: 80px;
  }


  &__heading {
    margin-bottom: 48px;
    @media screen and (min-width: 767.98px) {
      text-align: center;
    }

    h1 {
      font-size: 24px;
      font-weight: 700;
      line-height: 148%;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 12px;
      @media screen and (min-width: 767.98px) {
        font-size: 32px;
        line-height: 124%;
      }
      @media screen and (min-width: 991.98px) {
        font-size: 38px;
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
      @media screen and (min-width: 991.98px) {
        font-size: 16px;
        max-width: 50%;
        margin: auto;
      }
    }
  }

  .content-block {
    margin-bottom: 48px;
    @media screen and (min-width: 767.98px) {
      margin-bottom: 80px;
    }

    h2 {
      font-size: 24px;
      font-weight: 400;
      line-height: 148%;
      color: #FFF;
      margin-bottom: 24px;
      @media screen and (min-width: 767.98px) {
        font-size: 24px;
        line-height: 124%;
      }
    }

    &.content-block--advantages {
      ul {
        @media screen and (min-width: 767.98px) {
          column-count: 2;
        }

        li {
          display: flex;
          align-items: center;
          break-inside: avoid;
          gap: 24px;
          padding: 0;
          font-size: 16px;

          &:not(:last-child) {
            margin-bottom: 24px;
          }

          @media screen and (min-width: 1199.98px) {
            max-width: 60%;
          }

          span {
            font-size: 28px;
            font-weight: 400;
            line-height: 124%;

            min-width: 64px;
            width: 64px;
            height: 64px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 50%;
            border: 1px solid #FFF;
          }

          &:before, &:after {
            display: none;
          }
        }
      }

    }

  }

  .list {
    li {
      font-size: 14px;
      font-weight: 300;
      line-height: 148%;
      color: #FFF;

      padding-left: 24px;
      position: relative;

      &:not(:last-child) {
        margin-bottom: 12px;
      }

      &:before {
        content: '';
        width: 10px;
        height: 10px;
        background: #7470ff;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 5px;
      }

      &:after {
        content: '';
        width: 14px;
        height: 14px;
        border: 1px solid #7470ff;
        border-radius: 50%;
        position: absolute;
        left: -3px;
        top: 2px;
      }
    }
  }


  .list--grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;

    li {
      border-radius: 20px;
      padding: 24px;
      box-shadow: rgba(255, 255, 255, 0.55) 0 0 10px;
      margin: 0;

      &:before {
        display: none;
      }

      h3 {
        font-size: 18px;
        font-weight: 600;
        line-height: 148%;
        color: #FFF;
        margin-bottom: 12px;
      }

      p {
        font-size: 13px;
        font-weight: 300;
        line-height: 124%;
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }

  .list--tools {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;

    li {
      padding: 12px 24px;
      border-radius: 8px;
      background: #7470ff;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;

      font-size: 13px;
      font-weight: 600;
      line-height: 168%;
      color: #FFF;
      margin: 0;
      @media screen and (min-width: 991.98px) {
        font-size: 16px;
      }

      &:before {
        content: '';
        display: block;
        min-width: 18px;
        width: 18px;
        height: 18px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url(data:image/png;base64,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);
        transition: 0.1s ease;
        position: static;
      }
    }
  }

  .expert-block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    @media screen and (min-width: 767.98px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (min-width: 1199.98px) {
      grid-template-columns: repeat(5, 1fr);
    }

    &__item {
      border-radius: 20px;
      padding: 12px;
      box-shadow: rgba(255, 255, 255, 0.55) 0 0 10px;
      @media screen and (min-width: 767.98px) {
        padding: 24px;
      }

      picture {
        img {
          display: block;
          max-width: 100%;
        }
      }

      .name {
        font-size: 13px;
        font-weight: 300;
        line-height: 148%;
        color: #FFF;
        margin-top: 12px;
      }
    }
  }
}
</style>


