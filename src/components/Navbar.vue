<script setup>

</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/about" class="link">
          <span class="text">О нас</span>
        </router-link>
      </li>
      <li>
        <router-link to="/services" class="link">
          <span class="text">Услуги</span>
        </router-link>
      </li>
      <li>
        <router-link to="/products" class="link">
          <span class="text">Наши продукты</span>
        </router-link>
      </li>
      <li>
        <router-link to="/vacansies" class="link">
          <span class="text">Вакансии</span>
        </router-link>
      </li>
      <li>
        <router-link to="/contacts" class="link">
          <span class="text">Контакты</span>
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