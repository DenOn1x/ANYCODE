<script setup>
import {ref} from 'vue'
import logoURL from '@/assets/images/svg/anycode.svg'

import Button from "@/UI/Button.vue";
// import Select from "@/UI/Select.vue";

import Navbar from "@/components/Navbar.vue";
import Select from "@/UI/Select.vue";


const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
const toggleMenu = () => {
  is_expanded.value = !is_expanded.value
  localStorage.setItem("is_expanded", is_expanded.value)
}


</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <Button :class="`header__toggle ${is_expanded ? 'is-expanded' : ''}`"
                @click="toggleMenu"
                color="initial"
        >
          <span></span>
          <span></span>
          <span></span>
        </Button>
        <div class="header__logo">
          <router-link to="/">
            <img :src="logoURL" alt="Vue"/>
          </router-link>
        </div>
        <div :class="`header__menu ${is_expanded ? 'is-expanded' : ''}`">
          <Navbar/>
        </div>
        <div class="header__actions">
          <Button label="Заказать звонок"
                  color="stroke"/>
          <Select />

        </div>
      </div>
    </div>


  </header>
</template>

<style scoped>

</style>