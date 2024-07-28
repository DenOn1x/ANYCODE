<script setup>

</script>

<template>
  <section class="statistics">
    <div class="statistics__wrapper">
      <div class="container">
        <h2>Anycode в цифрах</h2>
        <div class="statistics__content">
          <div class="statistics__item">
            <div class="statistics__counter"><span>5</span> лет</div>
            <div class="statistics__text">средний стаж сотрудников</div>
          </div>
          <div class="statistics__item">
            <div class="statistics__counter"><span>1</span>+</div>
            <div class="statistics__text">пользователей наших продуктов</div>
          </div>
          <div class="statistics__item">
            <div class="statistics__counter"><span><500 000</span> $</div>
            <div class="statistics__text">выручка за 2023 год</div>
          </div>
          <div class="statistics__item">
            <div class="statistics__counter"><span>32</span> проекта</div>
            <div class="statistics__text">выполнено за 1 год</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.statistics {
  margin-top: 60px;
  padding: 60px 0;
  box-shadow: 0 0 20px black, inset 0 0 40px #24ff00;
  @media screen and (min-width: 1199.98px) {
    margin-top: 80px;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 148%;
    color: #FFF;
    text-align: center;
    margin-bottom: 40px;

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

  .statistics__content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
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
    color: #FFF;
  }

  .statistics__text {
    font-size: 16px;
    font-weight: 400;
    line-height: 148%;
    color: #FFF;
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
      background: #24ff00;
    }
  }


}

</style>