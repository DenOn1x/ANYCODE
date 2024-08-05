<script setup>
import TeamItem from "@/components/TeamItem.vue";
import Button from "@/UI/Button.vue";

import personDevelop from "@/assets/images/team/person-develop.png?url";
import personDeveloperF from "@/assets/images/team/person-developer-f.png?url";
import personDeveloperB from "@/assets/images/team/person-developer-b.png?url";
import personProj from "@/assets/images/team/person-project.png?url";
import personMarketingG from "@/assets/images/team/person-mark-g.png?url";
import personDesigner from "@/assets/images/team/person-designer.png?url";


const teamMembers = [
  {
    title: "team_block.pavel",
    role: "Frontend developer",
    desc: "team_block.pavel_role",
    imgSrc: personDevelop,
  },
  {
    title: "team_block.anton",
    role: "Backend developer",
    desc: "team_block.anton_role",
    imgSrc: personDeveloperF,
  },
  {
    title: "team_block.maxim",
    role: "Frontend developer",
    desc: "team_block.maxim_role",
    imgSrc: personDeveloperB,
  },
  {
    title: "team_block.alex",
    role: "Backend developer",
    desc: "team_block.alex_role",
    imgSrc: personProj,
  },
  {
    title: "team_block.kate",
    role: "UI/UX designer",
    desc: "team_block.kate_role",
    imgSrc: personMarketingG,
  },
  {
    title: "team_block.alexandra",
    role: "IOS developer",
    desc: "team_block.alexandra_role",
    imgSrc: personDesigner,
  },
];


</script>

<template>
  <section class="our-team">
    <div class="container">
      <div class="our-team__top">
        <h2>{{$t('team_top_text')}}</h2>
        <div class="desc">{{$t('team_top_desc')}}</div>
      </div>
    </div>
    <div class="our-team__wrapper">
      <div class="container">
        <div class="our-team__body">
          <TeamItem
              v-for="member in teamMembers"
              :key="$t(member.title)"
              :title="$t(member.title)"
              :role="member.role"
              :desc="$t(member.desc)"
              :imgSrc="member.imgSrc"
          />

        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.our-team {
  margin-top: 60px;
  @media screen and (min-width: 1199.98px) {
    margin-top: 100px;
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

    .desc {
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
  }

  &__wrapper {
    border-radius: 20px;
    max-width: 90%;
    margin: auto;
    box-shadow: rgba(255, 255, 255, 0.55) 0 0 30px;
    padding: 40px 0;
    @media screen and (min-width: 991.98px) {
      border-radius: 40px;
      padding: 60px 0;
    }
  }

  &__body {
    display: grid;
    gap: 20px;
    @media screen and (min-width: 991.98px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 1199.98px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>