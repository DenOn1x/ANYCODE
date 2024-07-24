<script setup>

import Accordion from "@/components/Accordion.vue";



</script>

<template>
  <section class="faq">
    <div class="container">
      <h2>Часто задаваемые вопросы</h2>
      <Accordion/>
    </div>
  </section>
</template>

<style scoped>
.faq {
  margin-top: 60px;
  @media screen and (min-width: 1199.98px) {
    margin-top: 80px;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 148%;
    color: #FFF;
    margin-bottom: 20px;

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
</style>