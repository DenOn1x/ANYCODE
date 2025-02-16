<script setup>

</script>

<template>
  <section class="statistics">
    <div class="statistics__wrapper">
      <div class="container">
        <h2>{{ $t('anycode_numbers') }}</h2>
        <div class="statistics__content">
          <div class="statistics__item">
            <div class="statistics__counter"><span>5</span> {{ $t('years') }}</div>
            <div class="statistics__text">{{ $t('average_employee') }}</div>
          </div>
          <div class="statistics__item">
            <div class="statistics__counter"><span>>10</span></div>
            <div class="statistics__text">{{ $t('support_project') }}</div>
          </div>
          <div class="statistics__item">
            <div class="statistics__counter"><span>>100</span></div>
            <div class="statistics__text">{{ $t('revenue') }}</div>
          </div>
          <div class="statistics__item">
            <div class="statistics__counter"><span>22</span> {{ $t('projects') }}</div>
            <div class="statistics__text">{{ $t('completed') }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

.statistics {
  margin-top: 60px;
  background: #c7ced1;
  @media screen and (min-width: 1199.98px) {
    margin-top: 100px;
  }

  &__wrapper {
    padding: 60px 0;
    @media screen and (min-width: 991.98px) {
      padding: 80px 0;
    }
  }

  h2 {
    font-size: 24px;
    font-weight: 400;
    line-height: 148%;
    text-align: center;
    color: #070707;
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2), 0px -5px 35px rgba(255, 255, 255, 0.3);
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

  .statistics__content {
    display: grid;
    justify-content: center;
    gap: 24px;
    @media screen and (min-width: 479.98px) {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }
    @media screen and (min-width: 767.98px) {
      gap: 40px;
    }
    @media screen and (min-width: 991.98px) {
      display: flex;
      flex-direction: row;
    }
    @media screen and (min-width: 1199.98px) {
      gap: 80px;
    }
  }

  .statistics__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

  }

  .statistics__counter {
    font-size: 32px;
    font-weight: 400;
    line-height: 148%;
    color: #070707;
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2), 0px -5px 35px rgba(255, 255, 255, 0.3);
    @media screen and (min-width: 1199.98px) {
      font-size: 38px;
    }
  }

  .statistics__text {
    font-size: 16px;
    font-weight: 300;
    line-height: 148%;
    text-align: center;
    color: #070707;
    position: relative;
    padding-top: 10px;

    &:before {
      content: '';
      width: 110%;
      height: 1px;
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, 0);
      background: #070707;
    }
  }


}

</style>