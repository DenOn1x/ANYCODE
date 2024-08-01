<script setup>

import ServicesCard from "@/components/ServicesCard.vue";
</script>

<template>
  <section class="services">
    <div class="container">
      <div class="services__top">
        <h2>Создадим продукт, который <br> будет работать на вас</h2>
        <div class="services__desc">
          Если есть продукт, то автоматизируем процессы
        </div>
      </div>
      <div class="services__cards">
        <ServicesCard
            number="01"
            title="Разработка ПО"
            text="Полный цикл создания программного обеспечения: от анализа требований и проектирования до программирования, тестирования и развертывания. Мы создаём высококачественные и надёжные решения, обеспечивая их бесперебойную работу и поддержку, чтобы ваш бизнес всегда был на шаг впереди."
        />
        <ServicesCard
            number="02"
            title="Продуктовая разработка"
            text="Создание продуктов охватывает весь процесс их разработки: от концепции и исследований до дизайна, реализации, тестирования и вывода на рынок. Мы превращаем идеи в успешные и востребованные решения, обеспечивая их устойчивое развитие и поддержку для вашего бизнес-успеха."
        />
        <ServicesCard
            number="03"
            title="Веб-разработка"
            text="Разрабатываем веб-решения, которые охватывают весь процесс создания сайтов и онлайн-приложений, начиная с планирования и заканчивая запуском. Мы воплощаем в жизнь конкурентоспособные и надежные веб-продукты, которые привлекают клиентов, удовлетворяют их потребности и увеличивают уровень конверсии."
        />
        <ServicesCard
            number="04"
            title="Разработка и расширение Crm/Erp систем."
            text="Данные системы способны управлять всеми данными о клиентах в одном месте, упрощая персонализированное обслуживание и автоматизацию задач. Они также обеспечивают аналитику и отчётность, что улучшает управление продажами и маркетингом, способствуя более эффективной работе бизнеса и увеличению прибыли."
        />
        <ServicesCard
            number="05"
            title="Мобильная разработка"
            text="Разработка программ для мобильных устройств включает всё необходимое для создания приложений для телефонов и планшетов. Мы предлагаем интуитивно понятные и полезные приложения, которые пользователи будут активно использовать и находить удобными."
        />
        <ServicesCard
            number="06"
            title="UX/UI дизайн"
            text="Дизайн играет важную роль в привлечении потенциальных клиентов и увеличении продаж. Разработаем фирменный и интуитивно понятный дизайн для веб-сайтов и приложений, который побуждает клиента  к нужному действию - покупке, подписке, регистрации."
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.services {
  overflow: hidden;
  margin-top: 60px;
  @media screen and (min-width: 1199.98px) {
    margin-top: 80px;
  }

  &__top {
    display: grid;
    gap: 5px;
    margin-bottom: 20px;
    @media screen and (min-width: 767.98px) {
      margin-bottom: 40px;
    }

    h2 {
      font-size: 24px;
      font-weight: 700;
      line-height: 148%;
      color: #FFF;

      br {
        display: none;
      }

      @media screen and (min-width: 767.98px) {
        font-size: 32px;
      }
      @media screen and (min-width: 991.98px) {
        font-size: 44px;
        line-height: 132%;
      }
      @media screen and (min-width: 1199.98px) {
        font-size: 52px;
        br {
          display: block;
        }
      }
      @media screen and (min-width: 1639.98px) {
        font-size: 58px;
      }
    }
  }

  &__desc {
    font-size: 14px;
    font-weight: 700;
    line-height: 148%;
    color: #ffffff5c;
    @media screen and (min-width: 767.98px) {
      font-size: 16px;
    }
    @media screen and (min-width: 1199.98px) {
      font-size: 20px;
    }
  }

  &__cards {
    display: grid;
    gap: 20px;
    @media screen and (min-width: 767.98px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
    }
    @media screen and (min-width: 1199.98px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
      margin: 0 -40px;
    }
  }
}
</style>