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
  updateOnMove: false,
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
  <!--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.7/dist/css/splide.min.css">-->

  <section class="other-products">
    <div class="container">
      <div class="other-products__top">
        <h2>{{$t('other_product_text')}}</h2>
        <div class="other-products__desc">{{$t('other_product_desc')}}</div>
      </div>
    </div>
    <div class="other-products__wrapper">
      <div class="container">
        <div class="other-products__cards">
          <Splide :options="splideOptions" aria-label="">
            <SplideSlide>
              <OtherProduct
                  number="01"
                  :title="$t('ecommerce_title')"
                  :subTitle="$t('ecommerce_sub')"
                  :text="$t('ecommerce_text')"
              />
            </SplideSlide>
            <SplideSlide>
              <OtherProduct
                  number="02"
                  :title="$t('mobile_app_title')"
                  :subTitle="$t('develop')"
                  :text="$t('mobile_app_text')"
              />
            </SplideSlide>
            <SplideSlide>
              <OtherProduct
                  number="03"
                  :title="$t('crm_title')"
                  :subTitle="$t('develop')"
                  :text="$t('crm_text')"
              />
            </SplideSlide>
            <SplideSlide>
              <OtherProduct
                  number="04"
                  :title="$t('api_title')"
                  :subTitle="$t('develop')"
                  :text="$t('api_text')"
              />
            </SplideSlide>
            <SplideSlide>
              <OtherProduct
                  number="05"
                  :title="$t('design_title')"
                  :subTitle="$t('design')"
                  :text="$t('design_text')"
              />
            </SplideSlide>
          </Splide>
        </div>
        <Button :label="$t('request_quote')"
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