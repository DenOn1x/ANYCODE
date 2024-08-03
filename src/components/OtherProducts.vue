<script setup>
import OtherProduct from "@/components/OtherProduct.vue";
import {Splide, SplideSlide} from "@splidejs/vue-splide";
import '@splidejs/vue-splide/css';
import Button from "@/UI/Button.vue";
import {onMounted, ref} from "vue";

const splideOptions = {
  type: 'loop',
  fixedWidth: '80%',
  gap: 20,
  perMove: 1,
  arrows: false,
  pagination: true,
  updateOnMove: true,
  mediaQuery: 'min',
  breakpoints: {
    767.98: {
      fixedWidth: '40%',
    },
    991.98: {
      destroy: true,
    }
  }
};

const splideRef = ref(null);

onMounted(() => {
  const splideInstance = splideRef.value?.splide;

  if (splideInstance) {
    splideInstance.on('mounted', () => {
    });

    splideInstance.on('move', () => {
    });
  }
});
</script>

<template>
  <section class="other-products">
    <div class="container">
      <div class="other-products__top">
        <h2>Продукт уже есть?</h2>
        <div class="other-products__desc">Проведем аудит продукта, составим план изменений и организуем разработку
        </div>
      </div>
    </div>
    <div class="other-products__wrapper">
      <div class="container">
        <div class="other-products__cards">
          <Splide :options="splideOptions" aria-label="">
            <SplideSlide>
              <OtherProduct
                  number="01"
                  title="Электронная коммерция (интернет-магазин)"
                  subTitle="Разработка / Дизайн"
                  text="Сделаем редизайн вашего текущего сайта. Превратим процесс оформления заказов в интуитивное и приятное приключение для ваших клиентов. Внедрим умные алгоритмы для подбора товаров, предлагая подходящие варианты. Обновим навигацию и сортировку для более легкого поиска товаров. Оптимизируем скорость загрузки страниц для получения мгновенного доступа к нужной информации."
              />
            </SplideSlide>
            <SplideSlide>
              <OtherProduct
                  number="02"
                  title="Мобильное приложение"
                  subTitle="Разработка"
                  text="Проведем необходимую оценку удобства интерфейса и пользовательского опыта. Предложим улучшения для упрощения навигации, увеличения скорости работы приложения и добавления новых функций, таких как системы рекомендаций или интеграции с платёжными системами."
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
    </div>
  </section>
</template>

<style lang="scss" scoped>
.other-products {
  margin-top: 60px;
  @media screen and (min-width: 1199.98px) {
    margin-top: 100px;
  }

  &__wrapper {
    border-radius: 20px;
    max-width: 90%;
    margin: auto;
    box-shadow: rgba(255, 255, 255, 0.55) 0 0 30px;
    padding: 40px 0;
    @media screen and (min-width: 991.98px) {
      border-radius: 40px;
      padding: 60px 0;
    }
  }

  &__top {
    display: grid;
    gap: 5px;
    margin-bottom: 40px;

    h2 {
      font-size: 24px;
      font-weight: 400;
      line-height: 148%;
      color: #FFF;

      @media screen and (min-width: 767.98px) {
        font-size: 32px;
      }
      @media screen and (min-width: 991.98px) {
        font-size: 38px;
        line-height: 132%;
      }
      @media screen and (min-width: 1199.98px) {
        font-size: 44px;
      }
    }
  }


  &__desc {
    font-size: 14px;
    font-weight: 300;
    line-height: 148%;
    color: #FFF;
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
      margin: 80px auto 0;
      width: initial;
    }
    @media screen and (min-width: 991.98px) {
      margin: 0 auto 0;
    }
  }
}


::v-deep .splide {
  &__track {
    padding-bottom: 60px;
  }

  &__slide {
    @media screen and (min-width: 991.98px) {
      border-top: 1px solid rgba(255, 255, 255, 0.7);
      border-bottom: 1px solid rgba(255, 255, 255, 0.7);
      margin: -1px 0;
      &:first-child {
        border-top: none;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }

  &__pagination {
    bottom: -40px;
  }

  &__pagination__page {
    background: none;
    border: 1px solid #7470ff;
    opacity: 1;
    min-width: 16px;
    width: 16px;
    height: 16px;
    margin: 0 5px;


    &.is-active {
      transform: initial;
      border: 1px solid #7470ff;
      background: #7470ff;
      border-radius: 50%;
    }
  }
}

</style>