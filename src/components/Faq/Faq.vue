<script setup>

import Accordion from "@/components/Faq/Accordion.vue";


</script>

<template>
  <section class="faq">
    <div class="container">
      <div class="faq__wrapper">


        <h2>{{ $t('faq_title') }}</h2>
        <Accordion/>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.faq {
  margin-top: 60px;
  @media screen and (min-width: 1199.98px) {
    margin-top: 100px;
  }

  h2 {
    font-size: 24px;
    font-weight: 400;
    line-height: 148%;
    color: #FFF;
    margin-bottom: 40px;

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
</style>