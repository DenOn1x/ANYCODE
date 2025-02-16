<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation, EffectCoverflow} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import {ref, onMounted, nextTick} from "vue";

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  prevButtonClass: {
    type: String,
    required: true,
  },
  nextButtonClass: {
    type: String,
    required: true,
  },
});

const swiperInstance = ref(null);
const swiperOptions = ref({
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  coverflowEffect: {
    rotate: 70,
    stretch: 10,
    depth: 5,
    modifier: 0.5,
  },
  navigation: {
    nextEl: null,
    prevEl: null,
  },
  breakpoints: {
    0: {slidesPerView: 1, spaceBetween: 32},
    767.98: {slidesPerView: 1.5, spaceBetween: 32},
    991.98: {slidesPerView: 1.5, spaceBetween: 64},
    1639.98: {slidesPerView: 1.5, spaceBetween: 128},
  },
});

const onSwiperInit = (swiper) => {
  swiperInstance.value = swiper;
};

onMounted(async () => {
  await nextTick();
  swiperOptions.value.navigation.nextEl = `.${props.nextButtonClass}`;
  swiperOptions.value.navigation.prevEl = `.${props.prevButtonClass}`;

  if (swiperInstance.value) {
    swiperInstance.value.update();
  }
});
</script>

<template>
  <div class="container">
    <div class="swiper-container">
      <swiper
          v-bind="swiperOptions"
          :modules="[Navigation, EffectCoverflow]"
          class="swiper-product"
          @swiper="onSwiperInit"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="slide.id">
          <div class="slider-slide">
            <template v-if="index === 0">
              <div class="slider-slide__content">
                <div class="slide-details">
                  <h3>Особенности</h3>
                  <ul>
                    <li v-for="(feature, i) in slide.features" :key="i">{{ feature }}</li>
                  </ul>
                  <div class="slide-details__dev">
                    <h3>Используемые технологии</h3>
                    <ul>
                      <li v-for="(tool, i) in slide.tools" :key="i">{{ tool }}</li>
                    </ul>
                  </div>

                </div>
              </div>
            </template>
            <div class="slider-slide__img">
              <picture>
                <img :src="slide.img" :alt="slide.title" class="slide-image"/>
              </picture>
            </div>
          </div>
        </swiper-slide>

        <div class="swiper-button-wrapper">
          <div :class="prevButtonClass" class="swiper-button">Предыдущий</div>
          <div :class="nextButtonClass" class="swiper-button">Следующий</div>
        </div>

      </swiper>
    </div>
  </div>
</template>


<style scoped lang="scss">
.container {
  @media screen and (min-width: 1199.98px) {
    padding: 0;
    max-width: 100%;
  }
}

::v-deep {
  .swiper {
    padding: 20px 0;

    &-wrapper {
      align-items: center;
    }

    &-slide {
      padding: 10px;
      box-shadow: rgba(255, 255, 255, 0.55) 0 0 20px;

      @media screen and (min-width: 1639.98px) {
        &:has(.slider-slide__content) {
          padding: 0;
          box-shadow: none;
        }
      }

    }
  }
}

.swiper-button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
  @media screen and (min-width: 767.98px) {
    gap: 24px;
    margin-top: 48px;
  }

  .swiper-button {
    max-width: 160px;
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    box-shadow: rgba(255, 255, 255, 0.55) 0 0 10px;
    cursor: pointer;

    font-size: 14px;
    font-weight: 300;
    line-height: 148%;
    color: #FFF;
    @media screen and (min-width: 767.98px) {
      height: 56px;
      box-shadow: rgba(255, 255, 255, 0.55) 0 0 20px;
    }
  }
}

.swiper {
  .slider-slide {
    display: flex;
    gap: 12px;
    //align-items: center;

    &__img {
      flex: 1;
      //min-height: 100%;

      picture {
        //position: relative;
        //display: block;
        //padding-bottom: 55%;
        //height: 0;
        //overflow: hidden;

        img {
          //position: absolute;
          //top: 0;
          //left: 0;
          //z-index: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    &__content {
      display: none;
      flex: 0 0 320px;
      padding: 24px;
      box-shadow: rgba(255, 255, 255, 0.55) 0 0 20px;
      @media screen and (min-width: 1639.98px) {
        display: block;
      }

      .slide-details {
        &__item {
          &:not(:last-child) {
            margin-bottom: 24px;
          }
        }

        h3 {
          margin-bottom: 12px;

          font-size: 15px;
          font-weight: 700;
          line-height: 148%;
          color: #FFF;
        }

        ul {
          margin: 12px 0 24px;

          li {
            font-size: 14px;
            font-weight: 300;
            line-height: 148%;
            color: #FFF;

            padding-left: 24px;
            position: relative;

            &:not(:last-child) {
              margin-bottom: 12px;
            }

            &:before {
              content: '';
              width: 10px;
              height: 10px;
              background: #7470ff;
              border-radius: 50%;
              position: absolute;
              left: 0;
              top: 5px;
            }

            &:after {
              content: '';
              width: 14px;
              height: 14px;
              border: 1px solid #7470ff;
              border-radius: 50%;
              position: absolute;
              left: -3px;
              top: 2px;
            }
          }
        }

        p {
          font-size: 13px;
          font-weight: 300;
          line-height: 148%;
          color: #FFF;
        }

        &__dev {
          h3 {
            margin: 12px 0 6px;
          }

          ul {
            margin: 0;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 4px 8px;

            li {
              margin: 0;
              padding: 0;

              &:not(:last-child) {
                margin: 0;
              }

              &:before, &:after {
                display: none;
              }
            }
          }
        }
      }

    }
  }
}
</style>
