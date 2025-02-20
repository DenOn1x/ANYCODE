<script setup>
import {ref, watch, onMounted, onUnmounted} from 'vue';
import {useRouter} from 'vue-router';

import logoURL from '@/assets/images/svg/anycode.svg?url';
import ic_fb from '@/assets/images/svg/ic_fb.svg?url';
import ic_tg from '@/assets/images/svg/ic_tg.svg?url';
import ic_inst from '@/assets/images/svg/ic_inst.svg?url';
import ic_wp from '@/assets/images/svg/ic_wp.svg?url';

import Button from "@/UI/Button.vue";
import MultilangSelect from "@/UI/MultilangSelect.vue";

import Navbar from "@/components/Navbar.vue";
import Modal from "@/components/Modals/Modal.vue";
import ModalCall from "@/components/Modals/ModalCall.vue";

const is_expanded = ref(false);
const showModalCall = ref(false);

const toggleMenu = () => {
  is_expanded.value = !is_expanded.value;
};

const closeMenu = () => {
  is_expanded.value = false;
};

const removeNoScrollClass = () => {
  if (!is_expanded.value) {
    document.documentElement.classList.remove('no-scroll');
  }
};


watch([is_expanded, showModalCall], ([menuOpen, modalOpen]) => {
  if (modalOpen && menuOpen) {
    closeMenu();
  }
  document.documentElement.classList.toggle('no-scroll', menuOpen || modalOpen);
});


const router = useRouter();
router.afterEach(() => {
  if (is_expanded.value) closeMenu();
  removeNoScrollClass();
});

const handleResize = () => {
  if (window.innerWidth > 767.98 && is_expanded.value) {
    closeMenu();
    removeNoScrollClass();
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__content-mini">
          <div :class="`header__toggle ${is_expanded ? 'is-expanded' : ''}`"
               @click="toggleMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="header__logo">
            <router-link to="/">
              <img :src="logoURL" alt="anycode"/>
            </router-link>
          </div>
        </div>
        <div :class="`header__menu ${is_expanded ? 'is-expanded' : ''}`">
          <div class="container">
            <div class="header__menu-wrapper">
              <Navbar/>
              <div class="header__menu-bottom">
                <div class="header__menu-bottom-call">
                  <a href="tel:+375298481820">+375 (29) 848-18-20</a>
                  <a href="mailto:anycode.it@gmail.com">anycode.it@gmail.com</a>
                </div>
                <ul class="header__socials">
                  <li>
                    <a href="#">
                      <img :src="ic_fb" alt="facebook"/>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src="ic_tg" alt="telegram"/>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src="ic_inst" alt="instagram"/>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src="ic_wp" alt="whatsapp"/>
                    </a>
                  </li>
                </ul>
                <Button
                    :label="$t('request_quote')"
                    color="stroke"
                    @click="showModalCall = true"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="header__actions">
          <MultilangSelect/>
          <Button
              :label="$t('request_call')"
              color="stroke"
              @click="showModalCall = true"
          />
          <a href="tel:+375298481820" class="header__phone phone--md"></a>
        </div>
      </div>
    </div>
  </header>
  <div
      :class="`overlay ${is_expanded ? 'is-expanded' : ''}`"
      @click="closeMenu"
  ></div>

  <Modal v-model="showModalCall" modalClass="modal-quote">
    <ModalCall/>
  </Modal>
</template>


<style scoped lang="scss">
@import "@/styles/common.scss";


.overlay {
  display: none;

  &.is-expanded {
    display: block;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    backdrop-filter: blur(40px);
    background: rgba(255, 255, 255, 0.1);
    animation: showBlockBottom .5s linear forwards;
    transition-delay: .2s;
  }
}

.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #070707;
  z-index: 11;
  @media screen and (min-width: 767.98px) {
    position: relative;
  }
}

.header__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  gap: 20px;
  @media screen and (min-width: 767.98px) {
    justify-content: flex-start;
    gap: 40px;
  }
}

.header__content-mini {
  display: flex;
  align-items: center;
  gap: 20px;
}

.header__toggle {
  display: flex;
  min-width: 20px;
  width: 20px;
  height: 24px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  transition: .8s ease;
  cursor: pointer;
  @media screen and (min-width: 767.98px) {
    display: none;
  }

  &.is-expanded {
    transform: rotate(450deg);

    span {
      margin: -1px 1px -1px -1px;
      background-color: #fff;
      width: 20px;
    }

    span:nth-of-type(1) {
      transform: rotate(45deg);
      transition: .3s ease;
    }

    span:nth-of-type(2) {
      display: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg);
      transition: .3s ease;
    }
  }

  span {
    width: 20px;
    height: 2px;
    background-color: #fff;
    margin: 3px 0;
    border-radius: 6px;
    transition-property: margin, transform;
    transition-duration: .3s;
    transition-timing-function: ease, ease;
    transition-delay: 0s;
    transform: rotate(0);

    &:nth-of-type(2) {
      width: 18px;
    }
  }
}

.header__logo {
  a {
    img {
      display: block;
      min-width: 148px;
      width: 148px;
      height: 38px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left center;
      transition: .1s ease;
      @media screen and (min-width: 767.98px) {
        min-width: 202px;
        width: 202px;
        height: 44px;
      }
    }
  }
}

.header__menu {
  display: none;
  @media screen and (min-width: 767.98px) {
    display: block;
    .container {
      display: contents;
    }
    .has-child {
      &:hover {
        .dropdown {
          display: block;
        }
      }
    }

  }

  &.is-expanded {
    display: block;
    position: fixed;
    left: 0;
    top: 60px;
    z-index: 10;
    width: 100%;
    height: calc(100vh - 60px);
    background: #070707;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: auto;
    animation: showBlock .2s linear forwards;
  }

  .btn {
    width: fit-content;
  }
}

.header__menu-wrapper {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  @media screen and (min-width: 767.98px) {
    padding: 0;
  }
}

.header__menu-bottom {
  display: grid;
  gap: 20px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: .5px solid #ffffff5c;
  @media screen and (min-width: 767.98px) {
    display: none;
  }
}

.header__menu-bottom-call {
  display: grid;
  gap: 10px;

  a {
    font-size: 14px;
    font-weight: 400;
    line-height: 124%;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
  }
}

.header__socials {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  gap: 10px;

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

.header__actions {
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 767.98px) {
    margin-left: auto;
  }

  .btn {
    display: none;
    @media screen and (min-width: 1199.98px) {
      display: block;
      padding: 12px 20px;
    }
  }
}

.phone--md {
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 10px;

  &:before {
    content: "";
    display: block;
    min-width: 20px;
    width: 20px;
    height: 18px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMzgyNjIgMS4wMDAwN0MxMC44MTM4IDEuMTUwOTUgMTIuMTUwNyAxLjc4NjA1IDEzLjE3MjEgMi44MDAzNEMxNC4xOTM2IDMuODE0NjIgMTQuODM4NCA1LjE0NzM0IDE1IDYuNTc4MDlNOS4zODI2MiAzLjgxMDE1QzEwLjA3MzIgMy45NDY0IDEwLjcwNjkgNC4yODcxOSAxMS4yMDE1IDQuNzg4MjhDMTEuNjk2MSA1LjI4OTM4IDEyLjAyODcgNS45Mjc2NCAxMi4xNTYyIDYuNjIwMjRNMTQuOTY0OSAxMS40ODE3VjEzLjU4OTNDMTQuOTY1NyAxMy43ODQ5IDE0LjkyNTYgMTMuOTc4NiAxNC44NDczIDE0LjE1NzhDMTQuNzY4OSAxNC4zMzcxIDE0LjY1NCAxNC40OTggMTQuNTA5OSAxNC42MzAzQzE0LjM2NTggMTQuNzYyNiAxNC4xOTU3IDE0Ljg2MzMgMTQuMDEwNSAxNC45MjU5QzEzLjgyNTIgMTQuOTg4NiAxMy42Mjg5IDE1LjAxMTkgMTMuNDM0MiAxNC45OTQzQzExLjI3MzUgMTQuNzU5NCA5LjE5Nzk1IDE0LjAyMDcgNy4zNzQ0IDEyLjgzNzZDNS42Nzc4NCAxMS43NTg5IDQuMjM5NDQgMTAuMzE5OCAzLjE2MTM3IDguNjIyNDNDMS45NzQ2OCA2Ljc4OTY5IDEuMjM2MTggNC43MDMwNiAxLjAwNTcgMi41MzE1NkMwLjk4ODE1MiAyLjMzNzI5IDEuMDExMjMgMi4xNDE1IDEuMDczNDYgMS45NTY2NEMxLjEzNTY5IDEuNzcxNzggMS4yMzU3MSAxLjYwMTkxIDEuMzY3MTUgMS40NTc4NUMxLjQ5ODYgMS4zMTM3OCAxLjY1ODU4IDEuMTk4NjggMS44MzY5MiAxLjExOTg2QzIuMDE1MjcgMS4wNDEwNSAyLjIwODA2IDEuMDAwMjUgMi40MDMwMiAxLjAwMDA3SDQuNTA5NTRDNC44NTAzMSAwLjk5NjcxMyA1LjE4MDY3IDEuMTE3NDQgNS40MzkwNSAxLjMzOTc2QzUuNjk3NDMgMS41NjIwOCA1Ljg2NjE5IDEuODcwODEgNS45MTM4OSAyLjIwODQxQzYuMDAyOCAyLjg4Mjg3IDYuMTY3NjkgMy41NDUxMSA2LjQwNTQxIDQuMTgyNDlDNi40OTk4OCA0LjQzMzk0IDYuNTIwMzMgNC43MDcyMSA2LjQ2NDMyIDQuOTY5OTNDNi40MDgzMiA1LjIzMjY1IDYuMjc4MjIgNS40NzM4IDYuMDg5NDMgNS42NjQ4MUw1LjE5NzY3IDYuNTU3MDFDNi4xOTcyNSA4LjMxNTgxIDcuNjUyNzggOS43NzIwNiA5LjQxMDcxIDEwLjc3MjFMMTAuMzAyNSA5Ljg3OTk0QzEwLjQ5MzQgOS42OTEwNiAxMC43MzQ0IDkuNTYwODkgMTAuOTk3IDkuNTA0ODZDMTEuMjU5NiA5LjQ0ODgzIDExLjUzMjcgOS40NjkyOSAxMS43ODQgOS41NjM4MUMxMi40MjExIDkuODAxNjQgMTMuMDgzIDkuOTY2NjIgMTMuNzU3MiAxMC4wNTU2QzE0LjA5ODIgMTAuMTAzNyAxNC40MDk4IDEwLjI3NTYgMTQuNjMyNCAxMC41Mzg2QzE0Ljg1NTEgMTAuODAxNSAxNC45NzM0IDExLjEzNzIgMTQuOTY0OSAxMS40ODE3WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=);
  }

  @media screen and (min-width: 1199.98px) {
    display: none;
  }
}
</style>