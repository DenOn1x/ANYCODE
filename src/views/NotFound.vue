<script setup>
</script>

<template>
  <section class="not-found">
    <div class="container">
      <div class="not-found__content">
        <h1>{{ $t("not_found_title") }}</h1>
        <div class="sub-title">{{ $t("not_found_subtitle") }}</div>
        <p>{{ $t("not_found_description") }}</p>
        <p>
          {{ $t("not_found_homepage") }}
          <router-link :to="`/${$i18n.locale}`">{{ $t("not_found_homepage_link") }}</router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.not-found {
  position: relative;
  padding-top: 40px;
  @media screen and (min-width: 1199.98px) {
    padding-top: 80px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;

    h1 {
      font-weight: 700;
      line-height: 100%;
      color: #7470ff;
      text-align: center;
      font-size: 120px;
      @media screen and (min-width: 767.98px) {
        font-size: 224px;
      }
    }

    .sub-title {
      font-size: 24px;
      font-weight: 700;
      line-height: 124%;
      color: #fff;
      text-align: center;
      margin-bottom: 24px;
    }

    p {
      font-size: 14px;
      font-weight: 300;
      line-height: 148%;
      color: #FFF;
      text-align: center;

      a {
        color: #7470ff;
        text-decoration: none;
      }
    }
  }
}
</style>