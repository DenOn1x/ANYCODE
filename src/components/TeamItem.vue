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
      <div class="content-team__bottom">
        <div>Связаться с нами</div>
        <ul class="content-team__socials">
          <li v-for="link in socialLinks" :key="link.src">
            <a :href="link.href">
              <img :src="link.src" alt=""/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.our-team {
  &__item {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 20px;
    border-radius: 10px;
    padding: 12px;
    background: linear-gradient(45deg, #24ff00 0%, rgba(255, 255, 255, .01) 35%);
    @media screen and (min-width: 767.98px) {
      padding: 24px;
    }
  }

  &__img {
    flex: 0 0 40%;

    picture {
      position: relative;
      display: block;
      padding-bottom: 100%;
      height: 0;
      overflow: hidden;
      margin-bottom: -12px;
      @media screen and (min-width: 767.98px) {
        margin-bottom: -24px;
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

    &__top {
      display: grid;

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
      color: #24ff00;
      margin-top: 5px;
    }

    &__desc {
      font-size: 14px;
      font-weight: 700;
      line-height: 148%;
      color: #ffffff5c;
      margin-top: 10px;
    }

    &__socials {
      display: flex;
      align-items: center;
      gap: 10px;

      li {
        a {
          img {
            display: block;
            min-width: 20px;
            width: 20px;
            height: 20px;
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