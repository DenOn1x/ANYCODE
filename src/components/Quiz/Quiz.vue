<script setup>
import QuizForm from "@/components/Quiz/QuizForm.vue";

</script>

<template>
  <section class="quiz">
    <div class="container">
      <div class="quiz__top">
        <h2>{{ $t('quiz_top') }}</h2>
        <div class="quiz__desc">{{ $t('quiz_desc') }}</div>
      </div>
      <div class="quiz__wrapper">
        <QuizForm/>
        <div class="quiz__info">
          <div class="quiz__view">
            <div class="quiz__plane plane--main">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
            <div class="anycode-text">ANYCODE</div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>


<style lang="scss" scoped>

.quiz {
  margin-top: 60px;
  @media screen and (min-width: 1199.98px) {
    margin-top: 100px;
  }


  $side: 444px;
  $l: 444px;
  $num: 10;
  $dur: 10s;
  $angleStep: -320deg;

  @mixin plane($w, $h) {
    width: $w;
    height: $h;
    transform-style: preserve-3d;
  }

  @mixin view($p) {
    position: relative;
    z-index: -1;
    perspective: $p;
    transition: .7s ease;
  }

  @mixin center {
    margin: auto;
  }

  &__view {
    @include view(400);
  }

  &__plane {
    @include plane(300px, 300px);

    @media screen and (min-width: 1439.98px) {
      width: 400px;
      height: 400px;
    }
    @media screen and (min-width: 1639.98px) {
      width: $side;
      height: $side;
    }

    &.plane--main {
      @include center;
      transform: rotateX(60deg) rotateZ(-30deg);
      animation: rotate 20s infinite linear;

      .circle {
        width: 300px;
        height: 300px;
        position: absolute;
        transform-style: preserve-3d;
        border-radius: 100%;
        box-sizing: border-box;
        box-shadow: 0 0 20px rgba(#000, 1), inset 0 0 20px rgba(#FFF, 1);
        @media screen and (min-width: 1439.98px) {
          width: 400px;
          height: 400px;
        }
        @media screen and (min-width: 1639.98px) {
          width: $side;
          height: $side;
        }


        @for $i from 1 through 5 {
          $angle: $i * $angleStep;
          &:nth-child(#{$i}) {
            transform: rotateZ($angle) rotateX(-85deg);
          }
        }
      }
    }
  }

  .anycode-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #FFF;
    font-size: 44px;
    font-weight: 400;
  }

  @keyframes rotate {
    0% {
      transform: rotateX(0) rotateY(0) rotateZ(0);
    }
    100% {
      transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
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
      }
      @media screen and (min-width: 991.98px) {
        font-size: 38px;
        line-height: 132%;
      }
      @media screen and (min-width: 1199.98px) {
        font-size: 44px;
        br {
          display: block;
        }
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

  &__wrapper {
    @media screen and (min-width: 991.98px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 80px;
    }
  }

  &__info {
    display: none;
    @media screen and (min-width: 1199.98px) {
      display: block;
    }
  }

}


</style>
