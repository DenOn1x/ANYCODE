<script setup>
import TeamItem from "@/components/TeamItem.vue";
import Button from "@/UI/Button.vue";

import personDevelop from "@/assets/images/team/person-develop.png?url";
import personDeveloperF from "@/assets/images/team/person-developer-f.png?url";
import personDeveloperB from "@/assets/images/team/person-developer-b.png?url";
import personProj from "@/assets/images/team/person-project.png?url";
import personMarketingG from "@/assets/images/team/person-mark-g.png?url";
// import personMarketing from "@/assets/images/team/person-mark.png?url";
// import personSale from "@/assets/images/team/person-sale.png?url";
import personDesigner from "@/assets/images/team/person-designer.png?url";


const teamMembers = [
  {
    title: "Astralopitek",
    role: "Frontend developer",
    desc: "Lorem ipsum dolor sit amet.",
    imgSrc: personDevelop
  },
  {
    title: "Astralopitek",
    role: "Frontend developer",
    desc: "Lorem ipsum dolor sit amet.",
    imgSrc: personDeveloperF
  },
  {
    title: "Astralopitek",
    role: "Backend developer",
    desc: "Lorem ipsum dolor sit amet.",
    imgSrc: personDeveloperB
  },
  {
    title: "Test Test",
    role: "Frontend developer",
    desc: "Lorem ipsum dolor sit amet.",
    imgSrc: personProj
  },
  {
    title: "Test Test",
    role: "Frontend developer",
    desc: "Lorem ipsum dolor sit amet.",
    imgSrc: personMarketingG
  },
  {
    title: "Test Test",
    role: "Frontend developer",
    desc: "Lorem ipsum dolor sit amet.",
    imgSrc: personDesigner
  },
];


</script>

<template>
  <section class="our-team">
    <div class="container">
      <div class="our-team__top">
        <div class="title">Наша команда</div>
        <h2>В чем сила?</h2>
        <div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, veniam?</div>
      </div>
      <div class="our-team__body">
        <TeamItem
            v-for="member in teamMembers"
            :key="member.title"
            :title="member.title"
            :role="member.role"
            :desc="member.desc"
            :imgSrc="member.imgSrc"
        />

      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.our-team {
  margin-top: 60px;
  @media screen and (min-width: 1199.98px) {
    margin-top: 80px;
  }

  &__top {
    display: grid;
    gap: 5px;
    margin-bottom: 20px;

    .title {
      font-size: 14px;
      font-weight: 700;
      line-height: 148%;
      color: #7DFF7A;
      margin-bottom: -5px;
      @media screen and (min-width: 767.98px) {
        font-size: 16px;
      }
      @media screen and (min-width: 1199.98px) {
        font-size: 20px;
      }
    }

    h2 {
      font-size: 24px;
      font-weight: 700;
      line-height: 148%;
      color: #FFF;

      br {
        display: none;
      }

      @media screen and (min-width: 767.98px) {
        font-size: 32px;
      }
      @media screen and (min-width: 991.98px) {
        font-size: 44px;
        line-height: 132%;
      }
      @media screen and (min-width: 1199.98px) {
        font-size: 52px;
        br {
          display: block;
        }
      }
      @media screen and (min-width: 1639.98px) {
        font-size: 58px;
      }
    }

    .desc {
      font-size: 14px;
      font-weight: 700;
      line-height: 148%;
      color: #747474;
      @media screen and (min-width: 767.98px) {
        font-size: 16px;
      }
      @media screen and (min-width: 1199.98px) {
        font-size: 20px;
      }
    }
  }

  &__body {
    display: grid;
    gap: 10px;
    @media screen and (min-width: 767.98px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 1199.98px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>