<template>

  <select @change="changeLanguage($event)">
    <option value="en">EN</option>
    <option value="ru">RU</option>
  </select>

</template>


<script>


  export default {
    methods: {
      changeLanguage(event){
        this.$i18n.locale = event.target.value;
        this.$router.push({ path: `/${event.target.value}` });
      }
    }
  }


</script>
