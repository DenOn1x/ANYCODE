<script setup>
import OtherProduct from "@/components/Products/OtherProduct.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper/modules";
import Button from "@/UI/Button.vue";
import {onMounted, ref, watch, onUnmounted} from "vue";

const swiperRef = ref(null);
const isSwiperActive = ref(window.innerWidth < 992);

const swiperOptions = {
  loop: true,
  spaceBetween: 20,
  slidesPerView: "auto",
  autoHeight: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  modules: [Pagination],
};

const handleResize = () => {
  isSwiperActive.value = window.innerWidth < 992;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <section class="other-products">
    <div class="container">
      <div class="other-products__top">
        <h2>{{ $t("other_product_text") }}</h2>
        <div class="other-products__desc">{{ $t("other_product_desc") }}</div>
      </div>
    </div>
    <div class="other-products__wrapper">
      <div class="container">
        <div class="other-products__cards">
          <Swiper v-if="isSwiperActive" ref="swiperRef" v-bind="swiperOptions">
            <SwiperSlide>
              <OtherProduct
                  :number="1"
                  :title="$t('ecommerce_title')"
                  :subTitle="$t('ecommerce_sub')"
                  :text="$t('ecommerce_text')"
              />
            </SwiperSlide>
            <SwiperSlide>
              <OtherProduct
                  :number="2"
                  :title="$t('mobile_app_title')"
                  :subTitle="$t('develop')"
                  :text="$t('mobile_app_text')"
              />
            </SwiperSlide>
            <SwiperSlide>
              <OtherProduct
                  :number="3"
                  :title="$t('crm_title')"
                  :subTitle="$t('develop')"
                  :text="$t('crm_text')"
              />
            </SwiperSlide>
            <SwiperSlide>
              <OtherProduct
                  :number="4"
                  :title="$t('api_title')"
                  :subTitle="$t('develop')"
                  :text="$t('api_text')"
              />
            </SwiperSlide>
            <SwiperSlide>
              <OtherProduct
                  :number="5"
                  :title="$t('design_title')"
                  :subTitle="$t('design')"
                  :text="$t('design_text')"
              />
            </SwiperSlide>
            <div class="swiper-pagination"></div>
          </Swiper>
          <div v-else class="other-products__grid">
            <OtherProduct
                :number="1"
                :title="$t('ecommerce_title')"
                :subTitle="$t('ecommerce_sub')"
                :text="$t('ecommerce_text')"
            />
            <OtherProduct
                :number="2"
                :title="$t('mobile_app_title')"
                :subTitle="$t('develop')"
                :text="$t('mobile_app_text')"
            />
            <OtherProduct
                :number="3"
                :title="$t('crm_title')"
                :subTitle="$t('develop')"
                :text="$t('crm_text')"
            />
            <OtherProduct
                :number="4"
                :title="$t('api_title')"
                :subTitle="$t('develop')"
                :text="$t('api_text')"
            />
            <OtherProduct
                :number="5"
                :title="$t('design_title')"
                :subTitle="$t('design')"
                :text="$t('design_text')"
            />
          </div>
        </div>
        <Button :label="$t('request_quote')" color="fill"/>
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
    margin-top: 40px;
    width: 100%;
    @media screen and (min-width: 767.98px) {
      display: flex;
      margin: 40px auto 0;
      width: initial;
    }
    @media screen and (min-width: 991.98px) {
      margin: 48px auto 0;
    }
  }
}

:deep(.swiper-pagination) {
  position: static;
  margin-top: 20px;
}

:deep(.swiper-pagination-bullet) {
  background: none;
  border: 1px solid #7470ff;
  opacity: 1;
  min-width: 16px;
  width: 16px;
  height: 16px;
  margin: 0 5px;
  border-radius: 50%;

  &.swiper-pagination-bullet-active {
    background: #7470ff;
  }

}
</style>