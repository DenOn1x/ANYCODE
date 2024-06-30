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
            text="Lorem ipsum dolor sit amet"
        />
        <ServicesCard
            number="02"
            title="Продуктовая разработка"
            text="Lorem ipsum dolor sit amet"
        />
        <ServicesCard
            number="03"
            title="Веб-разработка"
            text="Lorem ipsum dolor sit amet"
        />
        <ServicesCard
            number="04"
            title="Разработка и расширение Crm/Erp систем."
            text="Lorem ipsum dolor sit amet."
        />
        <ServicesCard
            number="05"
            title="Мобильная разработка"
            text="Lorem ipsum dolor sit amet."
        />
        <ServicesCard
            number="06"
            title="UX/UI дизайн"
            text="Lorem ipsum dolor sit amet."
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
    color: #747474;
    @media screen and (min-width: 767.98px) {
      font-size: 16px;
    }
    @media screen and (min-width: 991.98px) {

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