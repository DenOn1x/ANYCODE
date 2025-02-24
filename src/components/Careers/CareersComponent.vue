<script setup>
import {defineProps} from "vue";
import anycodeCareers from "@/assets/images/anycode-careers.png";

defineProps({
  jobs: {
    type: Array,
    default: () => [
      {
        title: "Android инженер",
        location: "Офис, Удаленная работа",
        type: "Middle, Полный рабочий день",
        link: "/careers/android-developer",
      },
      {
        title: "Odoo разработчик",
        location: "Офис, Удаленная работа",
        type: "Junior, Middle, Полный рабочий день",
        link: "/careers/crm",
      },
      {
        title: "Бэкенд инженер Python",
        location: "Офис, Удаленная работа",
        type: "Junior, Middle, Полный рабочий день",
        link: "/careers/python-developer",
      },
      {
        title: "Sales manager",
        location: "Офис, Удаленная работа",
        type: "Middle, Полный рабочий день",
        link: "/careers/sales-manager",
      },
    ],
  },
});
</script>

<template>
  <section class="careers">
    <div class="container">
      <div class="careers__top">
        <h1>{{ $t("careers_title") }}</h1>
        <div class="careers__sub-title">
          {{ $t("careers_subtitle") }}
        </div>
      </div>

      <div class="careers__body">
        <div class="careers__img">
          <picture>
            <img :src="anycodeCareers" alt="anycodeCareers"/>
          </picture>
        </div>

        <div class="careers__cards">
          <router-link
              v-for="(job, index) in jobs"
              :key="index"
              :to="job.link"
              class="careers__card"
          >
            <div class="careers__card-top">
              <div class="careers__card-top-title">
                {{ $t(`careers.${job.title}`) }}
              </div>
              <div class="careers__card-top-loc">
                {{ $t(`careers.${job.location}`) }}
              </div>
            </div>
            <div class="careers__card-bottom">
              <div class="careers__card-bottom-who">
                {{ $t(`careers.${job.type}`) }}
              </div>
              <span class="careers__card-bottom-link">
                {{ $t("learn_more") }}
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped lang="scss">
.careers {
  padding-top: 20px;
  @media screen and (min-width: 767.98px) {
    padding-top: 80px;
  }

  &__top {
    margin-bottom: 40px;
    @media screen and (min-width: 991.98px) {
      margin-bottom: 80px;
    }

    h1 {
      font-size: 24px;
      font-weight: 400;
      line-height: 148%;
      color: #FFF;
      @media screen and (min-width: 767.98px) {
        font-size: 32px;
      }
      @media screen and (min-width: 991.98px) {
        font-size: 38px;
        line-height: 132%;
        margin-bottom: 24px;
      }
      @media screen and (min-width: 1199.98px) {
        font-size: 44px;
      }
    }
  }

  &__sub-title {
    font-size: 14px;
    font-weight: 300;
    line-height: 148%;
    color: #FFF;
    @media screen and (min-width: 767.98px) {
      font-size: 16px;
    }
    @media screen and (min-width: 991.98px) {
      max-width: 520px;
    }
    @media screen and (min-width: 1199.98px) {
      max-width: 620px;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media screen and (min-width: 767.98px) {
      flex-direction: row;
      align-items: flex-start;
    }
    @media screen and (min-width: 991.98px) {
      gap: 80px;
    }
  }

  &__img {
    flex: 0 0 35%;
    order: 1;

    picture {
      position: relative;
      display: block;
      padding-bottom: 80%;
      height: 0;
      overflow: hidden;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        object-fit: cover;
        pointer-events: none;
      }
    }
  }

  &__cards {
    order: 0;
    flex: 1 0 45%;
    display: grid;
    gap: 20px;
    @media screen and (min-width: 767.98px) {
      order: 1;
    }
  }

  &__card {
    padding: 24px;
    background: #202328;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    transition: .3s ease;
    text-decoration: none;
    @media screen and (min-width: 991.98px) {
      gap: 40px;
      &:hover {
        transform: scale(1.01);

        .careers__card-bottom-link {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);

        }
      }
    }
  }

  &__card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  &__card-bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    @media screen and (min-width: 767.98px) {
      flex-direction: row;
      align-items: center;
    }
  }

  &__card-top-title {
    font-size: 18px;
    font-weight: 600;
    line-height: 132%;
    color: #FFF;
    @media screen and (min-width: 991.98px) {
      font-size: 20px;
    }
  }

  &__card-top-loc {
    font-size: 14px;
    font-weight: 300;
    line-height: 148%;
    color: rgba(255, 255, 255, 0.7);
    text-align: right;
    @media screen and (min-width: 991.98px) {
      text-align: left;
    }
  }

  &__card-bottom-who {
    font-size: 14px;
    font-weight: 300;
    line-height: 148%;
    color: rgba(255, 255, 255, 0.7);
  }

  &__card-bottom-link {
    font-size: 14px;
    font-weight: 300;
    line-height: 148%;
    color: #7470ff;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    position: relative;
    transition: .3s ease;
    @media screen and (min-width: 991.98px) {
      opacity: 0;
      visibility: hidden;
      transform: translateX(-20%);
    }

    &:after {
      content: "";
      display: block;
      min-width: 12px;
      width: 12px;
      height: 12px;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAzNCAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjcgMTIuNzM5OUwxOS4yOSAxOS4zMTk5QzE5LjEyIDE5LjQ2OTkgMTguOTcgMTkuNjU5OSAxOC44NyAxOS44NTk5QzE4Ljc4IDIwLjA1OTkgMTguNzIgMjAuMjc5OSAxOC43MiAyMC40OTk5QzE4LjcyIDIwLjcxOTkgMTguNzcgMjAuOTM5OSAxOC44NiAyMS4xNDk5QzE4Ljk2IDIxLjM0OTkgMTkuMSAyMS41Mzk5IDE5LjI3IDIxLjY5OTlDMTkuNDUgMjEuODQ5OSAxOS42NiAyMS45Nzk5IDE5Ljg5IDIyLjA1OTlDMjAuMTIgMjIuMTM5OSAyMC4zNiAyMi4xODk5IDIwLjYxIDIyLjE3OTlDMjAuODYgMjIuMTc5OSAyMS4xMSAyMi4xMzk5IDIxLjM0IDIyLjA0OTlDMjEuNTcgMjEuOTU5OSAyMS43NyAyMS44Mjk5IDIxLjk1IDIxLjY3OTlMMzIuNTUgMTIuMjQ5OUMzMi45IDExLjkyOTkgMzMuMSAxMS41MDk5IDMzLjEgMTEuMDY5OUMzMy4xIDEwLjYyOTkgMzIuOSAxMC4xOTk5IDMyLjU1IDkuODg5OTNMMjEuOTUgMC40NTk5MjlDMjEuNTkgMC4xNTk5MjkgMjEuMTIgLTAuMDEwMDcwNSAyMC42MyAtNy4wNTM2N2UtMDVDMjAuMTQgLTcuMDUzNjdlLTA1IDE5LjY2IDAuMTY5OTI5IDE5LjMyIDAuNDc5OTI5QzE4Ljk3IDAuNzg5OTI5IDE4Ljc3IDEuMjA5OTMgMTguNzcgMS42NDk5M0MxOC43NiAyLjA3OTkzIDE4Ljk1IDIuNDk5OTMgMTkuMjkgMi44MTk5M0wyNi43IDkuMzk5OTNIMS44N0MxLjM3IDkuMzk5OTMgMC45IDkuNTc5OTMgMC41NCA5Ljg4OTkzQzAuMTkgMTAuMTk5OSAwIDEwLjYyOTkgMCAxMS4wNjk5QzAgMTEuNTA5OSAwLjE5IDExLjkyOTkgMC41NCAxMi4yNDk5QzAuOSAxMi41NTk5IDEuMzcgMTIuNzM5OSAxLjg3IDEyLjczOTlIMjYuN1oiIGZpbGw9IiM3NDcwRkYiLz4KPC9zdmc+Cg==);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
}
</style>