<script setup>
import {defineProps, onMounted} from 'vue';
import ic_fb from '@/assets/images/svg/ic_fb.svg?url'
import ic_tg from '@/assets/images/svg/ic_tg.svg?url'
import ic_inst from '@/assets/images/svg/ic_inst.svg?url'
import ic_wp from '@/assets/images/svg/ic_wp.svg?url'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  responsibilities: {
    type: String,
    required: true
  },
  requirements: {
    type: Array,
    required: true
  },
  conditions: {
    type: Array,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  employmentType: {
    type: String,
    required: true
  },
  workSchedule: {
    type: String,
    required: true
  }
});

onMounted(() => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const offset = 100;

  anchorLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const scrollToPosition = targetPosition - offset;

        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

</script>

<template>
  <section class="careers-vcns">
    <div class="container">
      <div class="careers-vcns__top">
        <h1>{{ title }}</h1>
      </div>
      <div class="careers-vcns__wrapper">
        <div class="careers-vcns__info info-vcns">
          <div class="info-vcns__crd">
            <div class="info-vcns__ttl">Чем предстоит заниматься:</div>
            <p>{{ responsibilities }}</p>
          </div>
          <div class="info-vcns__crd">
            <div class="info-vcns__ttl">Требования:</div>
            <ul>
              <li v-for="(req, index) in requirements" :key="index">{{ req }}</li>
            </ul>
          </div>
          <div class="info-vcns__crd">
            <div class="info-vcns__ttl">Условия:</div>
            <ul>
              <li v-for="(cond, index) in conditions" :key="index">{{ cond }}</li>
            </ul>
          </div>
        </div>
        <div class="careers-vcns__add add-vcns">
          <div class="add-vcns__card">
            <div class="add-vcns__ttl">Основное</div>
            <ul class="add-vcns__list">
              <li>
                <span>Локация</span>
                <span><b>{{ location }}</b></span>
              </li>
              <li>
                <span>Уровень</span>
                <span><b>{{ level }}</b></span>
              </li>
              <li>
                <span>Тип занятости</span>
                <span><b>{{ employmentType }}</b></span>
              </li>
              <li>
                <span>График работы</span>
                <span><b>{{ workSchedule }}</b></span>
              </li>
            </ul>
          </div>
          <div class="add-vcns__card">
            <div class="add-vcns__ttl">Связаться с нами</div>
            <ul class="add-vcns__socials">
              <li>
                <a href="#">
                  <img :src="ic_fb" alt="ic_fb"/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img :src="ic_tg" alt="ic_tg"/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img :src="ic_inst" alt="ic_inst"/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img :src="ic_wp" alt="ic_wp"/>
                </a>
              </li>
            </ul>
            <a class="add-vcns__into-job"
               href="#career-job">Откликнуться</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.careers-vcns {
  padding-top: 20px;
  @media screen and (min-width: 767.98px) {
    padding-top: 40px;
  }

  &__top {
    border-radius: 10px;
    padding: 12px 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.55);
    width: fit-content;
    margin-bottom: 24px;

    h1 {
      font-size: 24px;
      font-weight: 400;
      line-height: 148%;
      color: #FFF;
      @media screen and (min-width: 767.98px) {
      }
      @media screen and (min-width: 991.98px) {
        line-height: 132%;
      }
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    @media screen and (min-width: 767.98px) {
      flex-direction: row;
    }
    @media screen and (min-width: 991.98px) {
      gap: 48px;
    }
  }

  .info-vcns {
    display: flex;
    flex-direction: column;
    gap: 24px;

    &__crd {
      border-radius: 10px;
      padding: 24px;
      box-shadow: rgba(255, 255, 255, 0.55) 0 0 10px;


      p {
        font-size: 13px;
        font-weight: 300;
        line-height: 148%;
        color: #FFF;
      }

      ul {
        li {
          font-size: 13px;
          font-weight: 300;
          line-height: 148%;
          color: #FFF;

          position: relative;
          padding-left: 24px;

          &:not(:last-child) {
            margin-bottom: 10px;
          }

          &:before {
            content: '';
            min-width: 4px;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #7470ff;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }

    &__ttl {
      font-size: 20px;
      font-weight: 600;
      line-height: 132%;
      color: #FFF;
      margin-bottom: 20px;
    }
  }

  .add-vcns {
    display: flex;
    flex-direction: column;
    gap: 24px;

    &__card {
      border-radius: 10px;
      padding: 24px;
      height: fit-content;
      box-shadow: rgba(255, 255, 255, 0.55) 0 0 10px;
      @media screen and (min-width: 767.98px) {
        min-width: 220px;
      }
      @media screen and (min-width: 991.98px) {
        min-width: 440px;
        box-shadow: rgba(255, 255, 255, 0.55) 0 0 30px;
      }
    }

    &__ttl {
      font-size: 20px;
      font-weight: 600;
      line-height: 132%;
      color: #FFF;
      margin-bottom: 20px;
    }

    ul {
      display: grid;
      gap: 10px;

      li {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        border-radius: 10px;
        border: 1px solid #202328;
        box-shadow: 2.5px 2.5px 5px #202328, -2.5px -2.5px 5px #202328;
        @media screen and (min-width: 991.98px) {
          flex-direction: row;
          align-items: center;
        }

        span {
          font-size: 13px;
          font-weight: 300;
          line-height: 148%;
          color: rgba(255, 255, 255, 0.7);

          b {
            color: #FFF;
            font-weight: 500;
          }
        }
      }
    }

    &__socials {
      display: flex !important;
      align-items: center;
      margin-bottom: 20px;

      li {
        a {
          display: flex;
          align-items: center;
          @media screen and (min-width: 991.98px) {
            &:hover {
              filter: brightness(0.5);
            }
          }
        }
      }
    }

    &__into-job {
      padding: 15px 20px;
      border: 1px solid transparent;
      background: #7470ff;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
      display: inline-block;
      font-family: 'Atyp';
      color: #FFF;
      font-size: 14px;
      font-weight: 400;
      line-height: 124%;
      text-decoration: none;
      transition: .1s ease;
      @media screen and (min-width: 991.98px) {
        &:hover {
          background: rgba(116, 112, 255, 0.8);
        }
      }
    }

  }

}

</style>