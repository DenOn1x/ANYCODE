<script setup>
import {ref, watch} from 'vue'
import logoURL from '@/assets/images/svg/anycode.svg?url'
import ic_fb from '@/assets/images/svg/ic_fb.svg?url'
import ic_tg from '@/assets/images/svg/ic_tg.svg?url'
import ic_inst from '@/assets/images/svg/ic_inst.svg?url'
import ic_wp from '@/assets/images/svg/ic_wp.svg?url'

import Button from "@/UI/Button.vue";
import MultilangSelect from "@/UI/MultilangSelect.vue";

import Navbar from "@/components/Navbar.vue";
import Modal from "@/components/Modals/Modal.vue";
import ModalCall from "@/components/Modals/ModalCall.vue";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
const showModalCall = ref(false);

const toggleMenu = () => {
  is_expanded.value = !is_expanded.value
  localStorage.setItem("is_expanded", is_expanded.value)
}

const closeMenu = () => {
  is_expanded.value = false;
  localStorage.setItem("is_expanded", is_expanded.value.toString());
};

watch(is_expanded, (newValue) => {
  if (newValue) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
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
                  <a href="tel:">+111 11-111-11-11</a>
                  <a href="mailto:">test@gmail.com</a>
                </div>
                <ul class="header__socials">
                  <li>
                    <a href="#">
                      <img :src="ic_fb" alt=""/>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src="ic_tg" alt=""/>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src="ic_inst" alt=""/>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img :src="ic_wp" alt=""/>
                    </a>
                  </li>
                </ul>
                <Button :label="$t('request_quote')"
                        color="stroke"/>
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
          <a href="tel:" class="header__phone phone--md"></a>
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


<style scoped>
@import "@/styles/common.scss";

body.no-scroll {
  overflow: hidden;
}

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
  padding: 20px 0;
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
      transition: .3s ease;
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
  }

  &.is-expanded {
    display: block;
    position: fixed;
    left: 0;
    top: 68px;
    z-index: 10;
    width: 100%;
    height: auto;
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
    color: #ffffff5c;
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
    height: 17.36px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjg5MTUgNC4wNTgwOUMxMS42MzgyIDQuMjAzNzggMTIuMzI0NSA0LjU2ODk4IDEyLjg2MjUgNS4xMDY5NkMxMy40MDA0IDUuNjQ0OTQgMTMuNzY1NiA2LjMzMTIxIDEzLjkxMTMgNy4wNzc5NU0xMC44OTE1IDFDMTIuNDQyOSAxLjE3MjM1IDEzLjg4OTYgMS44NjcxIDE0Ljk5NDEgMi45NzAxOEMxNi4wOTg1IDQuMDczMjYgMTYuNzk1MSA1LjUxOTEgMTYuOTY5NCA3LjA3MDNNMTYuMjA0OSAxMy4xNzEyVjE1LjQ2NDhDMTYuMjA1OCAxNS42Nzc3IDE2LjE2MjEgMTUuODg4NCAxNi4wNzY4IDE2LjA4MzVDMTUuOTkxNSAxNi4yNzg2IDE1Ljg2NjQgMTYuNDUzNyAxNS43MDk1IDE2LjU5NzdDMTUuNTUyNiAxNi43NDE2IDE1LjM2NzQgMTYuODUxMiAxNS4xNjU3IDE2LjkxOTRDMTQuOTY0IDE2Ljk4NzYgMTQuNzUwMyAxNy4wMTMgMTQuNTM4MiAxNi45OTM4QzEyLjE4NTcgMTYuNzM4MiA5LjkyNTg4IDE1LjkzNDMgNy45NDA0MiAxNC42NDY3QzYuMDkzMiAxMy40NzI5IDQuNTI3MDggMTEuOTA2OCAzLjM1MzI5IDEwLjA1OTZDMi4wNjEyMyA4LjA2NTEgMS4yNTcxNSA1Ljc5NDMxIDEuMDA2MjEgMy40MzExOEMwLjk4NzEgMy4yMTk3NiAxLjAxMjIzIDMuMDA2NjkgMS4wNzk5OCAyLjgwNTUxQzEuMTQ3NzQgMi42MDQzNCAxLjI1NjY0IDIuNDE5NDggMS4zOTk3NiAyLjI2MjdDMS41NDI4NyAyLjEwNTkyIDEuNzE3MDYgMS45ODA2NiAxLjkxMTI0IDEuODk0ODlDMi4xMDU0MiAxLjgwOTEyIDIuMzE1MzMgMS43NjQ3MiAyLjUyNzYgMS43NjQ1Mkg0LjgyMTE3QzUuMTkyMiAxLjc2MDg3IDUuNTUxODkgMS44OTIyNiA1LjgzMzIxIDIuMTM0MTlDNi4xMTQ1MyAyLjM3NjEzIDYuMjk4MjggMi43MTIxMSA2LjM1MDIxIDMuMDc5NUM2LjQ0NzAyIDMuODEzNDkgNi42MjY1NSA0LjUzNDE4IDYuODg1MzggNS4yMjc4MUM2Ljk4ODI0IDUuNTAxNDUgNy4wMTA1IDUuNzk4ODQgNi45NDk1MiA2LjA4NDc0QzYuODg4NTUgNi4zNzA2NSA2Ljc0Njg5IDYuNjMzMDggNi41NDEzNCA2Ljg0MDk1TDUuNTcwNCA3LjgxMTg5QzYuNjU4NzQgOS43MjU5IDguMjQzNTEgMTEuMzEwNyAxMC4xNTc1IDEyLjM5OUwxMS4xMjg1IDExLjQyODFDMTEuMzM2MyAxMS4yMjI1IDExLjU5ODggMTEuMDgwOSAxMS44ODQ3IDExLjAxOTlDMTIuMTcwNiAxMC45NTg5IDEyLjQ2OCAxMC45ODEyIDEyLjc0MTYgMTEuMDg0QzEzLjQzNTIgMTEuMzQyOSAxNC4xNTU5IDExLjUyMjQgMTQuODg5OSAxMS42MTkyQzE1LjI2MTMgMTEuNjcxNiAxNS42MDA1IDExLjg1ODcgMTUuODQyOSAxMi4xNDQ4QzE2LjA4NTQgMTIuNDMxIDE2LjIxNDIgMTIuNzk2MiAxNi4yMDQ5IDEzLjE3MTJaIiBzdHJva2U9IiMxRjFGMUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=) no-repeat;
    background-size: contain;
    filter: brightness(255);
  }

  @media screen and (min-width: 767.98px) {
    padding: 11px;
    &:before {
      min-width: 22px;
      width: 22px;
      height: 19.84px;
    }
  }
  @media screen and (min-width: 1199.98px) {
    display: none;
  }
}
</style>