<script setup>
import {ref, onMounted, onUnmounted} from "vue";
import Navbar from "@/components/Navbar.vue";
import logoURL from "@/assets/images/svg/anycode.svg?url";
import icChevron from "@/assets/images/svg/ic_chevron.svg?url";
import ic_fb from "@/assets/images/svg/ic_fb.svg?url";
import ic_tg from "@/assets/images/svg/ic_tg.svg?url";
import ic_inst from "@/assets/images/svg/ic_inst.svg?url";
import ic_wp from "@/assets/images/svg/ic_wp.svg?url";

const openList = ref("services");
const isMobile = ref(window.innerWidth < 991.98);

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 991.98;
};

onMounted(() => {
  window.addEventListener("resize", updateIsMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateIsMobile);
});

const toggleList = (listName) => {
  if (isMobile.value) {
    openList.value = openList.value === listName ? null : listName;
  }
};

const footerItems = [
  {
    title: "Меню",
    content: "menu",
    component: Navbar,
    isList: false,
  },
  {
    title: "Услуги",
    content: "services",
    items: [
      "Разработка ПО",
      "Продуктовая разработка",
      "Веб-разработка",
      "Разработка и расширение Crm/Erp систем.",
      "Мобильная разработка",
      "UX/UI дизайн",
    ],
    isList: true,
  },
];

const socialLinks = [
  {href: "#", src: ic_fb},
  {href: "#", src: ic_tg},
  {href: "#", src: ic_inst},
  {href: "#", src: ic_wp},
];

const contactInfo = [
  {
    value: "+111 11-111-11-11",
    href: "tel:+11111111111",
  },
  {
    value: "test@gmail.com",
    href: "mailto:test@gmail.com",
  },
  {
    value: "anycodesupport@gmail.com",
    href: "mailto:anycodesupport@gmail.com",
  },
];

</script>

<template>
  <footer class="footer">
    <div class="footer__bg">
      <div class="container">
        <div class="footer__wrapper">
          <div class="footer__top">
            <div class="footer__logo">
              <router-link to="/">
                <img :src="logoURL" alt="anycode"/>
              </router-link>
            </div>
            <div class="footer__about">
              Разработка инновационных цифровых решений, обеспечивающих высокое качество и эффективные результаты для вашего бизнеса.
            </div>
            <ul class="footer__socials">
              <li v-for="link in socialLinks" :key="link.src">
                <a :href="link.href">
                  <img :src="link.src" alt=""/>
                </a>
              </li>
            </ul>
          </div>
          <div class="footer__content">
            <div v-for="item in footerItems" :key="item.title" class="footer__col">
              <div class="title-box">
                <div class="title">{{ item.title }}</div>
                <img
                    v-if="isMobile"
                    :src="icChevron"
                    :class="{ 'arrow--open': openList === item.content }"
                    class="arrow"
                    @click="toggleList(item.content)"
                    alt=""
                />
              </div>
              <transition name="expand">
                <div v-if="openList === item.content || !isMobile">
                  <component :is="item.component" v-if="!item.isList"/>
                  <ul v-if="item.isList">
                    <li v-for="service in item.items" :key="service">
                      <a href="#">{{ service }}</a>
                    </li>
                  </ul>
                </div>
              </transition>
            </div>
            <div class="footer__col footer-col-addition">
              <div class="title">Контакты</div>
              <div class="footer-col-addition__content">
                <div
                    v-for="info in contactInfo"
                    :key="info.value"
                    class="footer-col-addition__item"
                >
                  <a :href="info.href">{{ info.value }}</a>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="footer__bottom">
          <a href="#">Политика конфиденциальности</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding-top: 60px;
  @media screen and (min-width: 1199.98px) {
    padding-top: 80px;
  }

  &__bg {
    border-top: .5px solid #ffffff5c;
    padding: 20px 0;
    @media screen and (min-width: 767.98px) {
      padding: 40px 0;
    }
  }

  &__wrapper {
    display: grid;
    gap: 20px;
    @media screen and (min-width: 767.98px) {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 80px;
    }
  }

  &__top {
    display: grid;
    gap: 10px;
    @media screen and (min-width: 767.98px) {
      flex: 0 0 20%;
    }
    @media screen and (min-width: 1199.98px) {
      flex: 0 0 30%;
      gap: 20px;
    }
  }

  &__content {
    display: grid;
    gap: 20px;
    @media screen and (min-width: 767.98px) {
      flex: 1 0 50%;
    }
    @media screen and (min-width: 991.98px) {
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      gap: 40px;
    }
  }

  &__logo a img {
    display: block;
    min-width: 168px;
    width: 168px;
    height: 38px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left center;
    transition: .3s ease;

    @media screen and (min-width: 767.98px) {
      min-width: 248px;
      width: 248px;
      height: 44px;
    }
  }

  &__about {
    font-size: 14px;
    font-weight: 700;
    line-height: 148%;
    color: #ffffff5c;
    @media screen and (min-width: 1199.98px) {
      font-size: 16px;
    }
  }

  &__socials {
    display: flex;
    align-items: center;
    width: fit-content;
    border: 1px solid #ffffff5c;
    border-radius: 10px;
    padding: 10px;
    gap: 10px;

    @media screen and (min-width: 1199.98px) {
      gap: 15px;
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

  &__col {
    display: grid;
    gap: 10px;
    @media screen and (min-width: 991.98px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    @media screen and (min-width: 1199.98px) {
      gap: 20px;
    }

    .title-box {
      display: inline-flex;
      align-items: center;
      gap: 10px;

      .title {
        font-size: 16px;
        font-weight: 700;
        line-height: 148%;
        color: #FFF;
        @media screen and (min-width: 1199.98px) {
          font-size: 20px;
        }
      }

      .arrow {
        display: block;
        min-width: 10px;
        width: 10px;
        height: 8px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        transition: 0.3s ease;
        cursor: pointer;
      }

      .arrow--open {
        transform: rotate(180deg);
      }
    }

    nav {
      ::v-deep ul {
        gap: 10px;
        @media screen and (min-width: 767.98px) {
          display: grid;
        }
        @media screen and (min-width: 1199.98px) {
          gap: 20px;
        }

        li {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;

          &:before {
            content: '';
            display: block;
            min-width: 12px;
            width: 12px;
            height: 12px;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAzNCAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEwODJfNykiPgo8cGF0aCBkPSJNMjYuNyAxMi43Mzk5TDE5LjI5IDE5LjMxOTlDMTkuMTIgMTkuNDY5OSAxOC45NyAxOS42NTk5IDE4Ljg3IDE5Ljg1OTlDMTguNzggMjAuMDU5OSAxOC43MiAyMC4yNzk5IDE4LjcyIDIwLjQ5OTlDMTguNzIgMjAuNzE5OSAxOC43NyAyMC45Mzk5IDE4Ljg2IDIxLjE0OTlDMTguOTYgMjEuMzQ5OSAxOS4xIDIxLjUzOTkgMTkuMjcgMjEuNjk5OUMxOS40NSAyMS44NDk5IDE5LjY2IDIxLjk3OTkgMTkuODkgMjIuMDU5OUMyMC4xMiAyMi4xMzk5IDIwLjM2IDIyLjE4OTkgMjAuNjEgMjIuMTc5OUMyMC44NiAyMi4xNzk5IDIxLjExIDIyLjEzOTkgMjEuMzQgMjIuMDQ5OUMyMS41NyAyMS45NTk5IDIxLjc3IDIxLjgyOTkgMjEuOTUgMjEuNjc5OUwzMi41NSAxMi4yNDk5QzMyLjkgMTEuOTI5OSAzMy4xIDExLjUwOTkgMzMuMSAxMS4wNjk5QzMzLjEgMTAuNjI5OSAzMi45IDEwLjE5OTkgMzIuNTUgOS44ODk5M0wyMS45NSAwLjQ1OTkyOUMyMS41OSAwLjE1OTkyOSAyMS4xMiAtMC4wMTAwNzA1IDIwLjYzIC03LjA1MzY3ZS0wNUMyMC4xNCAtNy4wNTM2N2UtMDUgMTkuNjYgMC4xNjk5MjkgMTkuMzIgMC40Nzk5MjlDMTguOTcgMC43ODk5MjkgMTguNzcgMS4yMDk5MyAxOC43NyAxLjY0OTkzQzE4Ljc2IDIuMDc5OTMgMTguOTUgMi40OTk5MyAxOS4yOSAyLjgxOTkzTDI2LjcgOS4zOTk5M0gxLjg3QzEuMzcgOS4zOTk5MyAwLjkgOS41Nzk5MyAwLjU0IDkuODg5OTNDMC4xOSAxMC4xOTk5IDAgMTAuNjI5OSAwIDExLjA2OTlDMCAxMS41MDk5IDAuMTkgMTEuOTI5OSAwLjU0IDEyLjI0OTlDMC45IDEyLjU1OTkgMS4zNyAxMi43Mzk5IDEuODcgMTIuNzM5OUgyNi43WiIgZmlsbD0iIzI0RkYwMCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzEwODJfNyI+CjxyZWN0IHdpZHRoPSIzMy4xMDY0IiBoZWlnaHQ9IjIyLjE4OTUiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            transition: 0.3s ease;
          }

          a {
            span {
              font-size: 14px;
              @media screen and (min-width: 1199.98px) {
                font-size: 16px;
              }
            }
          }

        }

      }
    }

    ul {
      display: grid;
      gap: 10px;
      @media screen and (min-width: 1199.98px) {
        gap: 20px;
      }

      li {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 10px;


        &:before {
          content: '';
          display: block;
          min-width: 12px;
          width: 12px;
          height: 12px;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAzNCAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEwODJfNykiPgo8cGF0aCBkPSJNMjYuNyAxMi43Mzk5TDE5LjI5IDE5LjMxOTlDMTkuMTIgMTkuNDY5OSAxOC45NyAxOS42NTk5IDE4Ljg3IDE5Ljg1OTlDMTguNzggMjAuMDU5OSAxOC43MiAyMC4yNzk5IDE4LjcyIDIwLjQ5OTlDMTguNzIgMjAuNzE5OSAxOC43NyAyMC45Mzk5IDE4Ljg2IDIxLjE0OTlDMTguOTYgMjEuMzQ5OSAxOS4xIDIxLjUzOTkgMTkuMjcgMjEuNjk5OUMxOS40NSAyMS44NDk5IDE5LjY2IDIxLjk3OTkgMTkuODkgMjIuMDU5OUMyMC4xMiAyMi4xMzk5IDIwLjM2IDIyLjE4OTkgMjAuNjEgMjIuMTc5OUMyMC44NiAyMi4xNzk5IDIxLjExIDIyLjEzOTkgMjEuMzQgMjIuMDQ5OUMyMS41NyAyMS45NTk5IDIxLjc3IDIxLjgyOTkgMjEuOTUgMjEuNjc5OUwzMi41NSAxMi4yNDk5QzMyLjkgMTEuOTI5OSAzMy4xIDExLjUwOTkgMzMuMSAxMS4wNjk5QzMzLjEgMTAuNjI5OSAzMi45IDEwLjE5OTkgMzIuNTUgOS44ODk5M0wyMS45NSAwLjQ1OTkyOUMyMS41OSAwLjE1OTkyOSAyMS4xMiAtMC4wMTAwNzA1IDIwLjYzIC03LjA1MzY3ZS0wNUMyMC4xNCAtNy4wNTM2N2UtMDUgMTkuNjYgMC4xNjk5MjkgMTkuMzIgMC40Nzk5MjlDMTguOTcgMC43ODk5MjkgMTguNzcgMS4yMDk5MyAxOC43NyAxLjY0OTkzQzE4Ljc2IDIuMDc5OTMgMTguOTUgMi40OTk5MyAxOS4yOSAyLjgxOTkzTDI2LjcgOS4zOTk5M0gxLjg3QzEuMzcgOS4zOTk5MyAwLjkgOS41Nzk5MyAwLjU0IDkuODg5OTNDMC4xOSAxMC4xOTk5IDAgMTAuNjI5OSAwIDExLjA2OTlDMCAxMS41MDk5IDAuMTkgMTEuOTI5OSAwLjU0IDEyLjI0OTlDMC45IDEyLjU1OTkgMS4zNyAxMi43Mzk5IDEuODcgMTIuNzM5OUgyNi43WiIgZmlsbD0iIzI0RkYwMCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzEwODJfNyI+CjxyZWN0IHdpZHRoPSIzMy4xMDY0IiBoZWlnaHQ9IjIyLjE4OTUiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==);
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          transition: 0.3s ease;
        }

        a {
          font-size: 14px;
          font-weight: 400;
          line-height: 124%;
          color: #FFF;
          text-decoration: none;
          @media screen and (min-width: 1199.98px) {
            font-size: 16px;
          }
        }
      }
    }
  }

  .footer__bottom {
    margin-top: 20px;

    a {
      font-size: 14px;
      font-weight: 400;
      line-height: 124%;
      color: #FFF;
      text-decoration: none;
      position: relative;
      @media screen and (min-width: 991.98px) {
        font-size: 16px;
      }
    }
  }

  .footer-col-addition {
    .title {
      font-size: 16px;
      font-weight: 700;
      line-height: 148%;
      color: #FFF;
      @media screen and (min-width: 1199.98px) {
        font-size: 20px;
      }
    }

    &__content {
      display: grid;
      gap: 10px;
      @media screen and (min-width: 1199.98px) {
        gap: 20px;
      }
    }

    &__item {
      a {
        font-size: 14px;
        font-weight: 400;
        line-height: 124%;
        color: #FFF;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 5px;
        border-radius: 10px;
        border: .5px solid #ffffff5c;
        @media screen and (min-width: 1199.98px) {
          font-size: 16px;
        }

        &:before {
          content: '';
          display: block;
          min-width: 12px;
          width: 12px;
          height: 12px;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAzNCAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEwODJfNykiPgo8cGF0aCBkPSJNMjYuNyAxMi43Mzk5TDE5LjI5IDE5LjMxOTlDMTkuMTIgMTkuNDY5OSAxOC45NyAxOS42NTk5IDE4Ljg3IDE5Ljg1OTlDMTguNzggMjAuMDU5OSAxOC43MiAyMC4yNzk5IDE4LjcyIDIwLjQ5OTlDMTguNzIgMjAuNzE5OSAxOC43NyAyMC45Mzk5IDE4Ljg2IDIxLjE0OTlDMTguOTYgMjEuMzQ5OSAxOS4xIDIxLjUzOTkgMTkuMjcgMjEuNjk5OUMxOS40NSAyMS44NDk5IDE5LjY2IDIxLjk3OTkgMTkuODkgMjIuMDU5OUMyMC4xMiAyMi4xMzk5IDIwLjM2IDIyLjE4OTkgMjAuNjEgMjIuMTc5OUMyMC44NiAyMi4xNzk5IDIxLjExIDIyLjEzOTkgMjEuMzQgMjIuMDQ5OUMyMS41NyAyMS45NTk5IDIxLjc3IDIxLjgyOTkgMjEuOTUgMjEuNjc5OUwzMi41NSAxMi4yNDk5QzMyLjkgMTEuOTI5OSAzMy4xIDExLjUwOTkgMzMuMSAxMS4wNjk5QzMzLjEgMTAuNjI5OSAzMi45IDEwLjE5OTkgMzIuNTUgOS44ODk5M0wyMS45NSAwLjQ1OTkyOUMyMS41OSAwLjE1OTkyOSAyMS4xMiAtMC4wMTAwNzA1IDIwLjYzIC03LjA1MzY3ZS0wNUMyMC4xNCAtNy4wNTM2N2UtMDUgMTkuNjYgMC4xNjk5MjkgMTkuMzIgMC40Nzk5MjlDMTguOTcgMC43ODk5MjkgMTguNzcgMS4yMDk5MyAxOC43NyAxLjY0OTkzQzE4Ljc2IDIuMDc5OTMgMTguOTUgMi40OTk5MyAxOS4yOSAyLjgxOTkzTDI2LjcgOS4zOTk5M0gxLjg3QzEuMzcgOS4zOTk5MyAwLjkgOS41Nzk5MyAwLjU0IDkuODg5OTNDMC4xOSAxMC4xOTk5IDAgMTAuNjI5OSAwIDExLjA2OTlDMCAxMS41MDk5IDAuMTkgMTEuOTI5OSAwLjU0IDEyLjI0OTlDMC45IDEyLjU1OTkgMS4zNyAxMi43Mzk5IDEuODcgMTIuNzM5OUgyNi43WiIgZmlsbD0iIzI0RkYwMCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzEwODJfNyI+CjxyZWN0IHdpZHRoPSIzMy4xMDY0IiBoZWlnaHQ9IjIyLjE4OTUiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==);
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          transition: 0.3s ease;
        }

      }
    }
  }

  @keyframes expand {
    from {
      height: 0;
      opacity: 0;
    }
    to {
      height: var(--target-height);
      opacity: 1;
    }
  }

  @keyframes collapse {
    from {
      height: var(--target-height);
      opacity: 1;
    }
    to {
      height: 0;
      opacity: 0;
    }
  }

  .expand-enter-active,
  .expand-leave-active {
    overflow: hidden;
  }

  .expand-enter-from {
    animation: expand .1s forwards;
  }

  .expand-leave-to {
    animation: collapse .1s forwards;
  }
}
</style>
