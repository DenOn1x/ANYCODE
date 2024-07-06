<script setup>
import icChevronGreen from "@/assets/images/svg/ic_chevron_green.svg?url"


defineProps({
  number: Number,
  title: String,
  subTitle: String,
  text: String
});


</script>

<template>
  <div class="other-products__card card-other-product">
    <div class="card-other-product__content">
      <div class="card-other-product__content-top">
        <div class="card-other-product__num">{{ number }}</div>
        <div class="card-other-product__title">{{ title }}</div>
      </div>
      <div class="card-other-product__content-middle">
        <div class="card-other-product__sub-title">{{ subTitle }}</div>
        <div class="card-other-product__text">{{ text }}</div>
      </div>
      <router-link to="#">
        <div class="card-other-product__arrow">
          <img :src="icChevronGreen" alt=""/>
        </div>
      </router-link>
      <div class="card-other-product__view">
        <div class="card-other-product__plane plane--main">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.card-other-product {


  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: .5px solid #747474;
    border-radius: 10px;
    padding: 24px;
    background: linear-gradient(135deg, rgba(125, 255, 112, 1) 0%, rgba(0, 0, 0, 1) 25%);
    position: relative;

    @media screen and (min-width: 991.98px) {
      flex-direction: row;
      align-items: center;
      padding: 60px 0;
      border: none;
      overflow: hidden;
      position: relative;
      background: none;
      border-radius: 0;
      border: 0;
      border-top: .5px solid #747474;
      border-bottom: .5px solid #747474;
      margin: -1px 0;

      &:hover {
        .card-other-product__view {
          overflow: visible;
          opacity: .3;
          height: 100%;
        }
      }
    }

  }

  &__content-top {
    @media screen and (min-width: 991.98px) {
      display: contents;
    }
  }

  &__content-middle {
    display: grid;
    gap: 10px;
    @media screen and (min-width: 991.98px) {
      display: contents;
    }
  }

  &__num {
    display: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 100%;
    color: #7DFF7A;
    width: fit-content;
    position: relative;
    @media screen and (min-width: 991.98px) {
      display: block;
      font-size: 20px;
      line-height: 124%;
    }

    &:before {
      content: '';
      width: 100%;
      height: 1px;
      background: #7DFF7A;
      position: absolute;
      left: 0;
      bottom: -5px;
    }
  }

  &__title {
    font-size: 22px;
    font-weight: 700;
    line-height: 132%;
    color: #FFF;
    @media screen and (min-width: 1199.98px) {
      font-size: 32px;
    }
  }

  &__sub-title {
    font-size: 14px;
    font-weight: 400;
    line-height: 132%;
    color: #FFF;
  }

  &__text {
    font-size: 14px;
    font-weight: 700;
    line-height: 148%;
    color: #747474;
    flex: 0 0 20%;
    padding-bottom: 42px;
    @media screen and (min-width: 991.98px) {
      padding: 0;
    }
  }

  &__arrow {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #7DFF7A;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 24px;
    right: 24px;
    @media screen and (min-width: 991.98px) {
      position: static;
    }

    img {
      display: block;
      min-width: 24px;
      width: 24px;
      height: 24px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      transition: 0.3s ease;
    }
  }


  $side: 666px;
  $l: 1111px;
  $num: 10;
  $dur: 10s;
  $angleStep: -10deg;

  @mixin plane($w, $h) {
    width: $w;
    height: $h;
    transform-style: preserve-3d;
  }

  @mixin view($p) {
    position: absolute;
    left: 50px;
    z-index: -1;
    perspective: $p;
    transition: .7s ease;
    overflow: hidden;
    opacity: 0;
    height: 0;

  }

  @mixin center {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  &__view {
    @include view(400);
  }

  &__plane {
    @include plane($side, $side);

    &.plane--main {
      @include center;
      transform: rotateX(60deg) rotateZ(-30deg);
      animation: rotate 20s infinite linear;

      .circle {
        width: $side;
        height: $side;
        position: absolute;
        transform-style: preserve-3d;
        border-radius: 100%;
        box-sizing: border-box;
        box-shadow: 0 0 60px rgba(#7DFF7A, 1), inset 0 0 60px rgba(#7DFF7A, 1);

        &::before, &::after {
          content: '';
          display: block;
          @include center;
          width: 10%;
          height: 10%;
          border-radius: 100%;
          background: rgba(#7DFF7A, 1);
          box-sizing: border-box;
          box-shadow: 0 0 60px 2px rgba(#7DFF7A, 1);
        }

        &::before {
          transform: translateZ(-$l);
        }

        &::after {
          transform: translateZ($l);
        }

        @for $i from 1 through 5 {
          $angle: $i * $angleStep;
          &:nth-child(#{$i}) {
            transform: rotateZ($angle) rotateX(65deg);
          }
        }
      }
    }
  }

  @keyframes rotate {
    0% {
      transform: rotateX(0) rotateY(0) rotateZ(0);
    }
    100% {
      transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
  }

}
</style>