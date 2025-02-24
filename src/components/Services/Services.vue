<script setup>

import ServicesCard from "@/components/Services/ServicesCard.vue";
</script>

<template>
  <section class="services">
    <div class="container">
      <div class="services__top">
        <h2>{{ $t('services_text') }} <br> {{ $t('services_br') }}</h2>
        <div class="services__desc">
          {{ $t('services_desc') }}
        </div>
      </div>
    </div>
    <div class="services__wrapper">
      <div class="container">
        <div class="services__cards">
          <ServicesCard
              number="01"
              :title="$t('services_technology.services_develop')"
              :text="$t('services_develop_text')"
              link="/services/software-development"
          />
          <ServicesCard
              number="02"
              :title="$t('services_technology.services_product')"
              :text="$t('services_product_text')"
              link="/services/product-development"
          />
          <ServicesCard
              number="03"
              :title="$t('services_technology.services_web')"
              :text="$t('services_web_text')"
              link="/services/web-development"
          />
          <ServicesCard
              number="04"
              :title="$t('services_technology.services_crm')"
              :text="$t('services_crm_text')"
              link="/services/crm-erp-development"
          />
          <ServicesCard
              number="05"
              :title="$t('services_technology.services_mobile')"
              :text="$t('services_mobile_text')"
              link="/services/mobile-app-development"
          />
          <ServicesCard
              number="06"
              :title="$t('services_technology.services_design')"
              :text="$t('services_design_text')"
              link="/services/ux-ui-design"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.services {
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

      br {
        display: none;
      }

      @media screen and (min-width: 767.98px) {
        font-size: 32px;
        br {
          display: block;
        }
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

  &__cards {
    display: grid;
    gap: 40px;
    @media screen and (min-width: 767.98px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 1199.98px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
      margin: 0 -40px;
    }
  }
}
</style>