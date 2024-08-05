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
    title: "Павел",
    role: "Frontend developer",
    desc: "Мастер фронтенд-разработки с богатым опытом в создании пользовательских интерфейсов, Павел отличается гибкостью и умением адаптироваться. Его целеустремленность и инициативность ведут к успешным результатам.",
    imgSrc: personDevelop,
  },
  {
    title: "Антон",
    role: "Backend developer",
    desc: "Специалист с более чем 10-летним стажем и глубокими познаниями в архитектуре серверных систем. Его опыт и экспертиза обеспечивают разработку инновационных решений, повышающих производительность и безопасность проектов.",
    imgSrc: personDeveloperF,
  },
  {
    title: "Максим",
    role: "Frontend developer",
    desc: "Эксперт в области фронтенд-разработки. Его глубокое внимание к пользовательскому опыту и умение эффективно решать сложные задачи способствуют успешной реализации проектов, которые превосходят ожидания клиентов.",
    imgSrc: personDeveloperB,
  },
  {
    title: "Александ",
    role: "Backend developer",
    desc: "Эксперт в области разработки серверных решений с акцентом на масштабируемость и производительность. Его аналитический подход и навыки позволяют успешно решать сложные задачи и обеспечивать надежность систем.",
    imgSrc: personProj,
  },
  {
    title: "Екатерина",
    role: "UI/UX designer",
    desc: "Опытный дизайнер Екатерина отличается своим вниманием к деталям и креативностью. Она создает визуальные решения, которые привлекают и удерживают внимание, всегда учитывая индивидуальные потребности каждого клиента.",
    imgSrc: personMarketingG,
  },
  {
    title: "Александра",
    role: "IOS developer",
    desc: "Специалист по разработке iOS-приложений, известная своим вниманием к пользовательскому опыту и инновационным подходом. Она создаёт приложения, которые не только функциональны, но и приятны в использовании.",
    imgSrc: personDesigner,
  },
];


</script>

<template>
  <section class="our-team">
    <div class="container">
      <div class="our-team__top">
        <h2>В чем сила?</h2>
        <div class="desc">Наша команда - это сердце и душа вашего проекта.</div>
      </div>
    </div>
    <div class="our-team__wrapper">
      <div class="container">
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