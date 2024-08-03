<template>
  <nav>
    <ul>
      <li v-for="(item, index) in menuItems" :key="index">
        <router-link :to="item.link" class="link">
          <span class="text">{{ $t(item.text) }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import {ref, reactive} from 'vue';

const menuItems = [
  {link: '/about', text: 'navigation.about'},
  {link: '/services', text: 'navigation.services'},
  {link: '/products', text: 'navigation.products'},
  {link: '/vacancies', text: 'navigation.vacancies'},
  {link: '/contacts', text: 'navigation.contacts'},
];

</script>

<style scoped>
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

    a {
      font-size: 16px;
      font-weight: 400;
      line-height: 124%;
      color: #fff;
      text-decoration: none;
      transition: color 0.2s ease-out;
      @media screen and (min-width: 767.98px) {
        font-size: 14px;
      }
    }
  }
}
</style>
