<script setup>
import {Vue3Marquee} from 'vue3-marquee'
import icTechnologies01 from "@/assets/images/svg/technologies/ic_technologies-cs.svg?url";
import icTechnologies02 from "@/assets/images/svg/technologies/ic_technologies-dj.svg?url";
import icTechnologies03 from "@/assets/images/svg/technologies/ic_technologies-dr.svg?url";
import icTechnologies04 from "@/assets/images/svg/technologies/ic_technologies-hl.svg?url";
import icTechnologies05 from "@/assets/images/svg/technologies/ic_technologies-jq.svg?url";
import icTechnologies06 from "@/assets/images/svg/technologies/ic_technologies-js.svg?url";
import icTechnologies07 from "@/assets/images/svg/technologies/ic_technologies-nd.svg?url";
import icTechnologies08 from "@/assets/images/svg/technologies/ic_technologies-od.svg?url";
import icTechnologies09 from "@/assets/images/svg/technologies/ic_technologies-pg.svg?url";
import icTechnologies10 from "@/assets/images/svg/technologies/ic_technologies-pn.svg?url";
import icTechnologies11 from "@/assets/images/svg/technologies/ic_technologies-rt.svg?url";
import icTechnologies12 from "@/assets/images/svg/technologies/ic_technologies-v.svg?url";

const imgArray = [
  icTechnologies04,
  icTechnologies01,
  icTechnologies02,
  icTechnologies03,
  icTechnologies05,
  icTechnologies06,
  icTechnologies07,
  icTechnologies08,
  icTechnologies09,
  icTechnologies10,
  icTechnologies11,
  icTechnologies12,
]
</script>

<template>
  <section class="technologies">
    <div class="technologies__wrapper">
      <Vue3Marquee
          :clone="true"
          :duration="20"
          :direction="'reverse'"
          :pause-on-hover="true"
      >
        <ul class="technologies__list">
          <li v-for="img in imgArray" :key="img" class="technologies__item">
            <picture>
              <img :src="img" alt="Technology icon"/>
            </picture>
          </li>
        </ul>
      </Vue3Marquee>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.technologies {
  margin-top: 60px;
  position: relative;
  @media screen and (min-width: 991.98px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 1199.98px) {
    margin-top: 80px;
  }

  &__wrapper {
    padding-top: 20px;
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 40px;
    margin: 0 20px;

    li {
      picture {
        img {
          width: 100%;
          max-width: 52px;
          height: 52px;
          object-fit: contain;
        }
      }
    }
  }
}


</style>
