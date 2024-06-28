<script setup>

</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/about" class="link">
          <span class="text">{{ $t('about') }}</span>
        </router-link>
      </li>
      <li>
        <router-link to="/services" class="link">
          <span class="text">{{ $t('services') }}</span>
        </router-link>
      </li>
      <li>
        <router-link to="/products" class="link">
          <span class="text">{{ $t('products') }}</span>
        </router-link>
      </li>
      <li>
        <router-link to="/vacancies" class="link">
          <span class="text">{{ $t('vacancies') }}</span>
        </router-link>
      </li>
      <li>
        <router-link to="/contacts" class="link">
          <span class="text">{{ $t('contacts') }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {

  ul {
    display: grid;
    gap: 20px;
    @media screen and (min-width: 767.98px) {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px 20px;
    }
    @media screen and (min-width: 1199.98px) {
      gap: 10px 32px;
    }

    li {
      a {
        font-size: 16px;
        font-weight: 400;
        line-height: 124%;
        color: #FFF;
        text-decoration: none;
      }
    }
  }
}

</style>