<script setup>
// import {ref} from 'vue';
// import {useRouter} from 'vue-router';
//
// const isOpen = ref(false);
// const selectedLanguage = ref('EN'); // Default selected language
//
// const toggleDropdown = () => {
//   isOpen.value = !isOpen.value;
// };
//
// const router = useRouter();
//
// const changeLanguage = (lang) => {
//   const currentPath = router.currentRoute.value.path;
//   const newPath = lang === 'en' ? '/en' : '/ru';
//
//   if (currentPath.startsWith('/en')) {
//     router.push(currentPath.replace(/^\/en/, newPath));
//   } else if (currentPath.startsWith('/ru')) {
//     router.push(currentPath.replace(/^\/ru/, newPath));
//   } else {
//     router.push(newPath);
//   }
//
//   selectedLanguage.value = lang === 'en' ? 'EN' : 'RU';
//   isOpen.value = false; // Close dropdown after selection
// };


</script>

<template>
  <!--  <div class="dropdown">-->
  <!--    <button class="btn btn-primary dropdown-toggle" type="button" @click="toggleDropdown">-->
  <!--      {{ selectedLanguage }}-->
  <!--    </button>-->
  <!--    <ul v-if="isOpen" class="dropdown-menu" aria-labelledby="languageDropdown">-->
  <!--      <li><a class="dropdown-item" @click="changeLanguage('en')">EN</a></li>-->
  <!--      <li><a class="dropdown-item" @click="changeLanguage('ru')">RU</a></li>-->
  <!--    </ul>-->
  <!--  </div>-->

  <select v-model="selectedLang" @change="handleChange">
    <option value="en">EN</option>
    <option value="ru">RU</option>
  </select>

</template>

<style scoped>

</style>