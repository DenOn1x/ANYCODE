<script setup>
import ic_tg from "@/assets/images/svg/ic_tg.svg?url";
import ic_inst from "@/assets/images/svg/ic_inst.svg?url";
import ic_wp from "@/assets/images/svg/ic_wp.svg?url";


defineProps({
  title: String,
  role: String,
  desc: String,
  imgSrc: String
});


const socialLinks = [
  {href: "#", src: ic_tg},
  {href: "#", src: ic_inst},
  {href: "#", src: ic_wp},
];


</script>

<template>
  <div class="our-team__item">
    <div class="our-team__img">
      <picture>
        <img :src="imgSrc" alt="person"/>
      </picture>
    </div>
    <div class="our-team__content content-team">
      <div class="content-team__top">
        <div class="content-team__title">{{ title }}</div>
        <div class="content-team__role">{{ role }}</div>
        <div class="content-team__desc">{{ desc }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.our-team {
  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    gap: 20px;
    border-radius: 10px;
    padding: 12px;
    background: linear-gradient(45deg, #7470ff 0%, rgba(255, 255, 255, .01) 35%);
    position: relative;
    @media screen and (min-width: 767.98px) {
      flex-direction: row;
      padding: 24px;
    }
  }

  &__img {
    flex: 0 0 30%;
    order: 1;
    width: 100%;
    @media screen and (min-width: 767.98px) {
      order: 0;
    }

    @media screen and (min-width: 991.98px) {
      flex: 0 0 35%;
    }

    picture {
      position: relative;
      display: block;
      padding-bottom: 48%;
      height: 0;
      overflow: hidden;
      margin-bottom: -12px;
      @media screen and (min-width: 575.98px) {
        padding-bottom: 32%;
      }
      @media screen and (min-width: 767.98px) {
        padding-bottom: 86%;
        margin-bottom: -24px;
      }
      @media screen and (min-width: 991.98px) {
        padding-bottom: 100%;
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        object-fit: contain;
      }
    }
  }

  .content-team {
    flex: 1 0 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    order: 0;
    @media screen and (min-width: 767.98px) {
      order: 1;
      height: 100%;
    }


    &__top {
      display: grid;
      gap: 12px;
    }

    &__title {
      font-size: 18px;
      font-weight: 700;
      line-height: 132%;
      color: #FFF;
    }

    &__role {
      font-size: 14px;
      font-weight: 400;
      line-height: 132%;
      color: #7470ff;
      margin-top: -10px;
    }

    &__desc {
      font-size: 13px;
      font-weight: 300;
      line-height: 148%;
      color: rgba(255, 255, 255, 0.7);
      margin-top: 10px;
      @media screen and (min-width: 1439.98px) {
        margin-top: 0;
      }
    }

    &__bottom {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__call-txt {
      font-size: 12px;
      font-weight: 300;
      line-height: 148%;
      color: #FFF;
      display: none;
      align-items: center;
      gap: 8px;
      @media screen and (min-width: 991.98px) {
        display: flex;
      }

      &:after {
        content: '';
        display: block;
        min-width: 12px;
        width: 12px;
        height: 12px;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAzNCAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEwODJfNykiPgo8cGF0aCBkPSJNMjYuNyAxMi43Mzk5TDE5LjI5IDE5LjMxOTlDMTkuMTIgMTkuNDY5OSAxOC45NyAxOS42NTk5IDE4Ljg3IDE5Ljg1OTlDMTguNzggMjAuMDU5OSAxOC43MiAyMC4yNzk5IDE4LjcyIDIwLjQ5OTlDMTguNzIgMjAuNzE5OSAxOC43NyAyMC45Mzk5IDE4Ljg2IDIxLjE0OTlDMTguOTYgMjEuMzQ5OSAxOS4xIDIxLjUzOTkgMTkuMjcgMjEuNjk5OUMxOS40NSAyMS44NDk5IDE5LjY2IDIxLjk3OTkgMTkuODkgMjIuMDU5OUMyMC4xMiAyMi4xMzk5IDIwLjM2IDIyLjE4OTkgMjAuNjEgMjIuMTc5OUMyMC44NiAyMi4xNzk5IDIxLjExIDIyLjEzOTkgMjEuMzQgMjIuMDQ5OUMyMS41NyAyMS45NTk5IDIxLjc3IDIxLjgyOTkgMjEuOTUgMjEuNjc5OUwzMi41NSAxMi4yNDk5QzMyLjkgMTEuOTI5OSAzMy4xIDExLjUwOTkgMzMuMSAxMS4wNjk5QzMzLjEgMTAuNjI5OSAzMi45IDEwLjE5OTkgMzIuNTUgOS44ODk5M0wyMS45NSAwLjQ1OTkyOUMyMS41OSAwLjE1OTkyOSAyMS4xMiAtMC4wMTAwNzA1IDIwLjYzIC03LjA1MzY3ZS0wNUMyMC4xNCAtNy4wNTM2N2UtMDUgMTkuNjYgMC4xNjk5MjkgMTkuMzIgMC40Nzk5MjlDMTguOTcgMC43ODk5MjkgMTguNzcgMS4yMDk5MyAxOC43NyAxLjY0OTkzQzE4Ljc2IDIuMDc5OTMgMTguOTUgMi40OTk5MyAxOS4yOSAyLjgxOTkzTDI2LjcgOS4zOTk5M0gxLjg3QzEuMzcgOS4zOTk5MyAwLjkgOS41Nzk5MyAwLjU0IDkuODg5OTNDMC4xOSAxMC4xOTk5IDAgMTAuNjI5OSAwIDExLjA2OTlDMCAxMS41MDk5IDAuMTkgMTEuOTI5OSAwLjU0IDEyLjI0OTlDMC45IDEyLjU1OTkgMS4zNyAxMi43Mzk5IDEuODcgMTIuNzM5OUgyNi43WiIgZmlsbD0iIzI0RkYwMCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzEwODJfNyI+CjxyZWN0IHdpZHRoPSIzMy4xMDY0IiBoZWlnaHQ9IjIyLjE4OTUiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        filter: grayscale(255) brightness(255);

      }
    }

    &__socials {
      display: flex;
      align-items: center;
      gap: 10px;

      @media screen and (min-width: 991.98px) {
        margin-left: auto;
      }

      li {
        a {
          img {
            display: block;
            min-width: 24px;
            width: 24px;
            height: 24px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            transition: 0.3s ease;
            cursor: pointer;
          }
        }
      }
    }
  }


}
</style>