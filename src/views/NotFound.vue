<script setup>

</script>

<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>
      The page you are looking for doesn't exist. Please check the URL or go back to the homepage.
    </p>
    <router-link :to="`/${$i18n.locale}`">Go to Homepage</router-link>
  </div>
</template>



<style scoped>
.not-found {
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

a {
  font-size: 1rem;
  color: #42b983;
}
</style>