<script setup>

import anycodeRc from "@/assets/images/team/anycode-rc-ld.png";

import FormCareer from "@/components/FormCareer.vue";

</script>

<template>
  <section class="careers-request" id="career-job">
    <div class="container">
      <div class="careers-request__top">
        <h2>{{ $t('careers_request_title') }}</h2>
        <div class="careers-request__sub-title">
          {{ $t('careers_request_subtitle') }}
        </div>
      </div>

      <div class="careers-request__wrapper">
        <div class="careers-request__form">
          <FormCareer/>
        </div>
        <div class="careers-request__welcome">
          <div class="careers-request__welcome-person">
            <div class="careers-request__welcome-person-avatar">
              <picture>
                <img :src="anycodeRc" alt="Recruitment Lead"/>
              </picture>
            </div>
            <div class="careers-request__welcome-person-content">
              <div class="careers-request__welcome-person-content-top">
                {{ $t('careers_request_recruiter_name') }}
              </div>
              <div class="careers-request__welcome-person-content-bottom">
                {{ $t('careers_request_recruiter_position') }}
              </div>
            </div>
          </div>
          <div class="careers-request__welcome-person-desc">
            <p>{{ $t('careers_request_recruiter_desc_1') }}</p>
            <p>{{ $t('careers_request_recruiter_desc_2') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.careers-request {
  margin-top: 60px;
  @media screen and (min-width: 1199.98px) {
    margin-top: 100px;
  }

  &__top {
    display: grid;
    gap: 5px;
    margin-bottom: 40px;
    @media screen and (min-width: 991.98px) {
      margin-bottom: 80px;
    }

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

  &__sub-title {
    font-size: 14px;
    font-weight: 300;
    line-height: 148%;
    color: #FFF;
    @media screen and (min-width: 767.98px) {
      font-size: 16px;
    }
    @media screen and (min-width: 991.98px) {
      font-size: 18px;
    }
  }

  &__wrapper {
    @media screen and (min-width: 991.98px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 80px;
    }
  }

  &__form {
    padding: 24px;
    border-radius: 20px;
    box-shadow: rgba(255, 255, 255, 0.55) 0 0 30px;
    @media screen and (min-width: 991.98px) {
      padding: 48px;
      border-radius: 40px;
    }
  }


  &__welcome {
    display: none;
    @media screen and (min-width: 991.98px) {
      display: block;
    }
  }

  &__welcome-person {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;

  }

  &__welcome-person-avatar {
    width: 80px;
    max-width: 80px;
    height: 80px;

    picture {
      position: relative;
      display: block;
      padding-bottom: 100%;
      height: 0;
      overflow: hidden;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        object-fit: cover;
        pointer-events: none;
      }
    }
  }

  &__welcome-person-content {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__welcome-person-content-top {
    font-size: 18px;
    font-weight: 300;
    line-height: 148%;
    color: #FFF;
  }

  &__welcome-person-content-bottom {
    font-size: 16px;
    font-weight: 300;
    line-height: 148%;
    color: #FFF;
  }

  &__welcome-person-desc {
    p {
      font-size: 16px;
      font-weight: 300;
      line-height: 148%;
      color: rgba(255, 255, 255, 0.7);

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
}

</style>