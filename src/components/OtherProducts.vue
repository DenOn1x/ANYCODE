<script setup>
import OtherProduct from "@/components/OtherProduct.vue";
import {Splide, SplideSlide} from "@splidejs/vue-splide";
import '@splidejs/vue-splide/css';
import Button from "@/UI/Button.vue";

const splideOptions = {
  type: 'loop',
  fixedWidth: '80%',
  gap: 20,
  perMove: 1,
  arrows: false,
  pagination: true,
  mediaQuery: 'min',
  breakpoints: {
    767.98: {
      fixedWidth: '40%',
    },
    991.98: {
      destroy: true
    }
  }
};
</script>

<template>
  <section class="other-products">
    <div class="container">
      <div class="other-products__top">
        <h2>Продукт уже есть?</h2>
        <div class="other-products__desc">Проведем аудит продукта, составим план изменений и организуем разработку</div>
      </div>
      <div class="other-products__cards">
        <Splide :options="splideOptions" aria-label="">
          <SplideSlide>
            <OtherProduct
                number="01"
                title="Электронная коммерция (интернет-магазин)"
                subTitle="Разработка / Дизайн"
                text="Сделаем редизайн вашего текущего сайта. Превратим процесс оформления заказов в интуитивное и приятное приключение для ваших клиентов. Внедрим умные алгоритмы для подбора товаров, чтобы предлагать наиболее подходящие варианты. Обновим навигацию и сортировку, чтобы пользователи легко находили нужные товары. Оптимизируем скорость загрузки страниц, чтобы посетители мгновенно получали доступ к нужной информации."
            />
          </SplideSlide>
          <SplideSlide>
            <OtherProduct
                number="02"
                title="Мобильное приложение"
                subTitle="Разработка"
                text="Мы проведем оценку удобства интерфейса и пользовательского опыта. Предложим улучшения для упрощения навигации, увеличения скорости работы приложения и добавления новых функций, например, системы рекомендаций или интеграции с платёжными системами."
            />
          </SplideSlide>
          <SplideSlide>
            <OtherProduct
                number="03"
                title="CRM-система"
                subTitle="Разработка"
                text="Анализ текущих процессов и пользовательского опыта. Мы поможем оптимизировать функциональность системы, улучшить пользовательский интерфейс, интегрировать дополнительные модули, такие как автоматизация маркетинга или аналитика продаж."
            />
          </SplideSlide>
          <SplideSlide>
            <OtherProduct
                number="04"
                title="Интеграция с внешними сервисами"
                subTitle="Разработка"
                text="Добавим интеграции с популярными внешними сервисами и платформами, такими как платежные системы, социальные сети и аналитические инструменты."
            />
          </SplideSlide>
          <SplideSlide>
            <OtherProduct
                number="05"
                title="Обновление дизайна"
                subTitle="Дизайн"
                text="Освежим визуальный стиль вашего продукта, делая его современным и привлекательным для пользователей."
            />
          </SplideSlide>
        </Splide>
      </div>
      <Button label="Оставить заявку"
              color="fill"/>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.other-products {
  margin-top: 60px;
  margin-bottom: 60px;
  @media screen and (min-width: 991.98px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 1199.98px) {
    margin-top: 80px;
  }

  &__top {
    display: grid;
    gap: 5px;
    margin-bottom: 20px;

    h2 {
      font-size: 24px;
      font-weight: 700;
      line-height: 148%;
      color: #FFF;

      @media screen and (min-width: 767.98px) {
        font-size: 32px;
      }
      @media screen and (min-width: 991.98px) {
        font-size: 44px;
        line-height: 132%;
      }
      @media screen and (min-width: 1199.98px) {
        font-size: 52px;
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

  .btn-fill {
    margin-top: 60px;
    width: 100%;
    @media screen and (min-width: 767.98px) {
      display: flex;
      margin: 40px auto 0;
      width: initial;
    }
  }
}


::v-deep .splide {
  &__pagination {
    bottom: -40px;
  }

  &__pagination__page {
    background: none;
    border: 1px solid #7DFF7A;
    opacity: 1;
    width: 12px;
    height: 12px;
    margin: 0 5px;


    &.is-active {
      transform: initial;
      border: 1px solid #7DFF7A;
      background: #7DFF7A;
      border-radius: 50%;
    }
  }
}

</style>