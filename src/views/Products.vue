<script setup>

import Rating from "@/assets/images/svg/ic_rating.svg?url";
import DigitalA from "@/assets/images/digital-a.png?url";
import DigitalB from "@/assets/images/digital-b.png?url";
import BotA from "@/assets/images/sm-bot-a.png?url";
import BotB from "@/assets/images/sm-bot-b.png?url";
// import Technologies from "@/components/Technologies.vue";
import Quiz from "@/components/Quiz/Quiz.vue";

</script>

<template>
  <section class="products-tmp">

    <div class="container">
      <div class="products-tmp__top">
        <h1>Открываем доступ к технологиям, которые двигают ваш бизнес вперед</h1>
        <div class="products-tmp__sub-title">
          Наши продукты созданы, чтобы ускорить рост и развитие вашего бизнеса в условиях стремительно меняющегося
          цифрового мира. Мы предлагаем решения, которые не только упрощают процессы, но и открывают новые возможности
          для вашего успеха. С нами вы всегда будете на шаг впереди, используя самые современные и надежные
          технологии.
        </div>
      </div>
      <div class="products-tmp__wrapper">
        <div class="products-tmp__cards">
          <div class="products-tmp__card">
            e-commerce проекты
          </div>
          <div class="products-tmp__card">
            кабинеты пользователя / админ панели
          </div>
          <div class="products-tmp__card">
            внешние интеграции
            (1С, RetailCRM, AI...)
          </div>
          <div class="products-tmp__card">
            чат-боты любой сложности
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="products-ex">
    <div class="container">
      <h2>Реализованные проекты</h2>
      <div class="products-ex__wrapper">
        <div class="products-ex__cards">
          <div class="products-ex__card">
            <div class="products-ex__card-info">
              <div class="products-ex__card-info-ttl">
                <p><b>Digital Pay</b></p>
                <p>Облачная платежная система</p>
              </div>
              <ul>
                <li>Защита данных клиентов на высшем уровне.</li>
                <li>Интуитивно понятный интерфейс для пользователей.</li>
                <li>Мгновенные транзакции</li>
                <li>Поддержка различных валют</li>
                <li>Доступ к подробной статистике и отчетам в реальном времени.</li>
              </ul>
            </div>
            <div class="products-ex__card-images">
              <div class="products-ex__card-image">
                <picture>
                  <img :src="DigitalA" alt="products-ex"/>
                </picture>
              </div>
              <div class="products-ex__card-image">
                <picture>
                  <img :src="DigitalB" alt="products-ex"/>
                </picture>
              </div>
            </div>
          </div>
          <div class="products-ex__card">
            <div class="products-ex__card-info">
              <div class="products-ex__card-info-ttl">
                <p><b>Digital Pay</b></p>
                <p>Telegram-bot для управления командами на массовых мероприятиях</p>
              </div>
              <ul>
                <li>Рассылка уведомлений о вакансиях.</li>
                <li>Командные чаты для общения.</li>
                <li>Различные роли (HR, руководитель команды, участник команды, пользователь).</li>
                <li>Управление анкетами пользователей.</li>
                <li>Интеграция с 1С.</li>
              </ul>
            </div>
            <div class="products-ex__card-images">
              <div class="products-ex__card-image">
                <picture>
                  <img :src="BotA" alt="products-ex"/>
                </picture>
              </div>
              <div class="products-ex__card-image">
                <picture>
                  <img :src="BotB" alt="products-ex"/>
                </picture>
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
  <!--  <Technologies />-->
  <Quiz/>

</template>

<style scoped>

</style>