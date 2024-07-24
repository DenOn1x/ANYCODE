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
                title="Название продукта"
                subTitle="Разработка"
                text="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
            />
          </SplideSlide>
          <SplideSlide>
            <OtherProduct
                number="02"
                title="Название продукта"
                subTitle="Дизайн"
                text="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
            />
          </SplideSlide>
          <SplideSlide>
            <OtherProduct
                number="03"
                title="Название продукта"
                subTitle="Разработка"
                text="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
            />
          </SplideSlide>
          <SplideSlide>
            <OtherProduct
                number="04"
                title="Название продукта"
                subTitle="Разработка"
                text="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
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