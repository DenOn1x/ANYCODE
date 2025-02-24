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
    title: "navigation.menu",
    content: "menu",
    component: Navbar,
    isList: false,
  },
  {
    title: "navigation.services",
    content: "services",
    items: [
      {text: "services_technology.services_develop", link: "/services/software-development"},
      {text: "services_technology.services_product", link: "/services/product-development"},
      {text: "services_technology.services_web", link: "/services/web-development"},
      {text: "services_technology.services_crm", link: "/services/crm-erp-development"},
      {text: "services_technology.services_mobile", link: "/services/mobile-app-development"},
      {text: "services_technology.services_design", link: "/services/ux-ui-design"},
    ],
    isList: true,
  },
];

const socialLinks = [
  {href: "https://www.facebook.com/anycodeIT/", src: ic_fb},
  {href: "#", src: ic_tg},
  {href: "https://www.instagram.com/anycode.it/", src: ic_inst},
  {href: "tel:+375298481820", src: ic_wp},
];

const isExternalLink = (href) => !href.startsWith("tel:");
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
              {{ $t("footer_about") }}
            </div>
            <ul class="footer__socials">
              <li v-for="link in socialLinks" :key="link.src">
                <a :href="link.href" :target="isExternalLink(link.href) ? '_blank' : '_self'">
                  <img :src="link.src" alt="social_l"/>
                </a>
              </li>
            </ul>
          </div>
          <div class="footer__content">
            <div v-for="item in footerItems" :key="item.title" class="footer__col">
              <div class="title-box" @click="toggleList(item.content)">
                <div class="title">{{ $t(item.title) }}</div>
                <img
                    v-if="isMobile"
                    :src="icChevron"
                    :class="{ 'arrow--open': openList === item.content }"
                    class="arrow"
                    alt="arrow"
                />
              </div>
              <transition name="expand">
                <div v-if="openList === item.content || !isMobile">
                  <component :is="item.component" v-if="!item.isList"/>
                  <ul v-if="item.isList">
                    <li v-for="service in item.items" :key="service.text">
                      <router-link :to="service.link">{{ $t(service.text) }}</router-link>
                    </li>
                  </ul>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="footer__bottom">
          <router-link to="#">{{ $t("privacy_policy") }}</router-link>
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
    background: #c7ced1;
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
      gap: 80px;
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
    filter: grayscale(0) brightness(0);

    @media screen and (min-width: 767.98px) {
      min-width: 248px;
      width: 248px;
      height: 44px;
    }
  }

  &__about {
    font-size: 14px;
    font-weight: 300;
    line-height: 148%;
    color: #070707;
    @media screen and (min-width: 1199.98px) {
      font-size: 16px;
    }
  }

  &__socials {
    display: flex;
    align-items: center;
    width: fit-content;
    border: 1px solid #070707;
    border-radius: 10px;
    padding: 10px;
    gap: 10px;

    @media screen and (min-width: 1199.98px) {
      gap: 20px;
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
          cursor: pointer;
          filter: grayscale(0) brightness(0);
          transition: .1s ease;
          @media screen and (min-width: 991.98px) {
            &:hover {
              filter: brightness(.5);
            }
          }
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
        font-weight: 400;
        line-height: 148%;
        color: #070707;
        text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2), 0px -5px 35px rgba(255, 255, 255, 0.3);
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
        filter: grayscale(0) brightness(0);
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
          gap: 12px;
        }

        li {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 0;

          &.has-child {
            display: none;
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
            filter: grayscale(0) brightness(0);
          }

          a {
            span {
              font-size: 14px;
              font-weight: 300;
              line-height: 148%;
              color: #070707;
              @media screen and (min-width: 1199.98px) {
                font-size: 16px;
              }
            }

            transition: .1s ease;
            @media screen and (min-width: 991.98px) {
              &:hover {
                &:before {
                  background: #070707;
                }
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
        gap: 12px;
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
          filter: grayscale(0) brightness(0);
        }

        a {
          font-size: 14px;
          font-weight: 300;
          line-height: 148%;
          color: #070707;
          text-decoration: none;
          position: relative;

          @media screen and (min-width: 991.98px) {
            &:before {
              opacity: 0;
              content: '';
              width: 0;
              height: 1px;
              background: #070707;
              position: absolute;
              left: 0;
              bottom: -2px;
              transition: .4s ease;
            }
            &:hover {
              &:before {
                opacity: 1;
                width: 100%;
              }
            }
          }
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
      font-weight: 300;
      line-height: 148%;
      color: #070707;
      text-decoration: none;
      position: relative;
      @media screen and (min-width: 991.98px) {
        font-size: 16px;
        &:before {
          opacity: 0;
          content: '';
          width: 0;
          height: 1px;
          background: #070707;
          position: absolute;
          left: 0;
          bottom: -2px;
          transition: .4s ease;
        }
        &:hover {
          &:before {
            opacity: 1;
            width: 100%;
          }

        }
      }
    }
  }

  .footer-col-addition {
    .title {
      font-size: 16px;
      font-weight: 400;
      line-height: 148%;
      color: #070707;
      text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2), 0px -5px 35px rgba(255, 255, 255, 0.3);
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
        font-weight: 300;
        line-height: 148%;
        color: #070707;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 5px;
        border-radius: 10px;
        border: 1px solid #070707;
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
          filter: grayscale(0) brightness(0);
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
