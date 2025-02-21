<script setup>
import Quiz from "@/components/Quiz/Quiz.vue";
import SliderProducts from "@/components/SliderProducts.vue";

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

const sliderProducts = [
  {
    id: "product_1",
    img: ProductC1,
    name: "product_1_name",
    category: "product_1_category",
    description: "product_1_description",
    slides: [ProductC2, ProductC3, ProductC4, ProductC5, ProductC6],
  },
  {
    id: "product_2",
    img: ProductD1,
    name: "product_2_name",
    category: "product_2_category",
    description: "product_2_description",
    slides: [ProductD2, ProductD3, ProductD4, ProductD5],
  },
  {
    id: "product_3",
    img: ProductE1,
    name: "product_3_name",
    category: "product_3_category",
    description: "product_3_description",
    slides: [ProductE2, ProductE3, ProductE4, ProductE5],
  },
  {
    id: "product_4",
    img: ProductA1,
    name: "product_4_name",
    category: "product_4_category",
    description: "product_4_description",
    slides: [ProductA2, ProductA3, ProductA4],
  },
  {
    id: "product_5",
    img: ProductB1,
    name: "product_5_name",
    category: "product_5_category",
    description: "product_5_description",
    slides: [ProductB2, ProductB3, ProductB4],
  },
];
</script>

<template>
  <section class="examples-products">
    <div class="container">
      <h1>{{ $t("products_page_title") }}</h1>
    </div>

    <div class="examples-products__wrapper">
      <div v-for="product in sliderProducts" :key="product.id" class="examples-products__item">
        <div class="container">
          <div class="examples-products__item-heading">
            <h2>{{ $t(product.name) }}</h2>
            <p><b>{{ $t(product.category) }}</b></p>
            <p>{{ $t(product.description) }}</p>
          </div>
        </div>

        <SliderProducts  prevButtonClass="slider-five-prev"
                         nextButtonClass="slider-five-next" :slides="[{ img: product.img }, ...product.slides.map(img => ({ img }))]" />
      </div>
    </div>
  </section>

  <Quiz />
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