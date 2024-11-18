<script setup>
import {ref, reactive, onUnmounted, onMounted} from 'vue';
import icChevron from "@/assets/images/svg/ic_chevron.svg?url";

const menuItems = reactive([
  {link: '/about', text: 'navigation.about'},
  {link: '/products', text: 'navigation.products'},
  {
    text: 'navigation.services',
    children: [
      {link: '/services/software-development', text: 'Software development'},
      {link: '/services/product-development', text: 'Product development'},
      {link: '/services/web-development', text: 'Web development'},
      {link: '/services/crm-erp-development', text: 'Development and expansion of Crm/Erp systems'},
      {link: '/services/mobile-app-development', text: 'Mobile app development'},
      {link: '/services/ux-ui-design', text: 'UX/UI design'},
    ],
    showDropdown: false
  },
  {link: '/careers', text: 'navigation.vacancies'},
  {link: '/contacts', text: 'navigation.contacts'},
]);

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

const toggleDropdown = (item) => {
  if (isMobile.value && item.children) {
    item.showDropdown = !item.showDropdown;
  }
};
</script>

<template>
  <nav>
    <ul>
      <li
          v-for="(item, index) in menuItems"
          :key="index"
          class="menu-item"
          :class="{ 'has-child': item.children, 'dropdown-active': item.showDropdown }"
          @click="toggleDropdown(item)"
          @mouseover="!isMobile && item.children ? (item.showDropdown = true) : null"
          @mouseleave="!isMobile && item.children ? (item.showDropdown = false) : null"
      >
        <span v-if="item.children" class="link">
          <span class="text">{{ $t(item.text) }}</span>
          <img
              :src="icChevron"
              :class="{ 'arrow--open': item.showDropdown }"
              class="arrow"
              alt=""
          />
        </span>
        <router-link v-else :to="item.link" class="link">
          <span class="text">{{ $t(item.text) }}</span>
        </router-link>

        <!-- Dropdown menu for services -->
        <ul v-if="item.children" class="dropdown" :class="{ 'dropdown-open': item.showDropdown }">
          <li v-for="(child, childIndex) in item.children" :key="childIndex">
            <router-link :to="child.link" class="dropdown-link">{{ $t(child.text) }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav ul {
  display: grid;
  gap: 20px;
  @media screen and (min-width: 767.98px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px 20px;
  }
  @media screen and (min-width: 1199.98px) {
    gap: 10px 24px;
  }

  li {
    position: relative;
    @media screen and (min-width: 991.98px) {
      padding: 10px 0;
    }

    &.has-child {
      .link {
        display: inline-flex;
        align-items: center;
        gap: 10px;
      }

      .arrow {
        display: block;
        min-width: 10px;
        width: 10px;
        height: 8px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        transition: transform 0.3s ease;
      }

      .arrow--open {
        transform: rotate(180deg);
      }

      .dropdown {
        display: none;
        padding: 10px 0 0 10px;
        transition: opacity 0.3s ease, transform 0.3s ease;
        @media screen and (min-width: 767.98px) {
          position: absolute;
          left: -100%;
          top: 100%;
          z-index: 11;
          padding: 0;
          border-radius: 0 20px 0 20px;
          //background: #070707;
          //border: 1px solid rgba(255, 255, 255, 0.55);
          border-top: none;

          //box-shadow: rgba(255, 255, 255, 0.55) 0 0 30px;
          min-width: 320px;
        }
        @media screen and (min-width: 991.98px) {
          left: 0;

        }

        li {
          padding: 0;
          @media screen and (min-width: 767.98px) {
            a {
              display: block;
              padding: 12px;
              background: #070707;
              border-radius: 10px;
              border: 1px solid rgba(255, 255, 255, 0.7);
            }

          }
        }

        .dropdown-link {
          color: #fff;
          font-size: 14px;
          line-height: 124%;
          text-decoration: none;
        }
      }

      &.dropdown-active .dropdown {
        display: grid;
        gap: 15px;
        opacity: 1;
        transform: translateY(0);
        @media screen and (min-width: 767.98px) {
          gap: 5px;
        }
      }
    }

    .link {
      font-size: 16px;
      font-weight: 400;
      line-height: 124%;
      color: #fff;
      text-decoration: none;
      transition: color 0.2s ease-out;
      cursor: pointer;
      @media screen and (min-width: 767.98px) {
        font-size: 14px;
      }
    }
  }
}

@keyframes dropdownAnimation {
  from {
    opacity: 0;
    transform: translateY(10%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-open {
  animation: dropdownAnimation 0.3s ease forwards;
}
</style>
