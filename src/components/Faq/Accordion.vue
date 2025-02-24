<script setup>
import {ref} from 'vue';

import icChevron from "@/assets/images/svg/ic_chevron.svg?url";


const accordionItems = ref([
  {
    id: 1,
    name: 'faq.first_name',
    content: 'faq.first_content',
  },
  {
    id: 2,
    name: 'faq.second_name',
    content: 'faq.second_content',
  },
  {
    id: 3,
    name: 'faq.third_name',
    content: 'faq.third_content',
  },
  {
    id: 4,
    name: 'faq.fourth_name',
    content: 'faq.fourth_content',
  },
  {
    id: 5,
    name: 'faq.fifth_name',
    content: 'faq.fifth_content',
  },
]);

const currentOpenItem = ref(accordionItems.value[0].id);

const toggleAccordion = (itemId) => {
  currentOpenItem.value = currentOpenItem.value === itemId ? null : itemId;
};
</script>

<template>
  <div class="accordion">
    <div
        v-for="item in accordionItems"
        :key="item.id"
        class="accordion__item"
        :class="{ 'INIT': currentOpenItem === item.id }"
        @click="toggleAccordion(item.id)"
    >
      <div class="accordion__head">
        <div class="name">{{ $t(item.name) }}</div>
        <span class="icon">
          <img class="arrow"
               :src="icChevron" alt=""
          />
        </span>
      </div>
      <div class="accordion__text">
        <div class="accordion__text-body">
          <p>{{ $t(item.content) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion {
  display: flex;
  flex-direction: column;

  .accordion__item {

    &:not(:last-child) {
      border-bottom: .5px solid rgba(255, 255, 255, 0.7);
    }

    @media screen and (min-width: 991.98px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 60px;
      align-items: flex-start;
      justify-content: space-between;
      position: relative;
      padding: 20px 0;
    }

    &.INIT {
      .accordion__text {
        opacity: 1;
        height: auto;
        transform: translateY(0);
      }

      .icon {
        img {
          transform: rotate(180deg);
        }

      }
    }
  }

  .accordion__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    gap: 20px;

    @media screen and (min-width: 480px) {
      padding: 15px 0;
    }

    @media screen and (min-width: 991.98px) {
      padding: 0;
    }

    .name {
      font-size: 16px;
      font-weight: 300;
      line-height: 142%;
      color: #FFF;

      @media screen and (min-width: 991.98px) {
        font-size: 18px;
      }
    }

    .icon {
      img {
        display: block;
        min-width: 14px;
        width: 14px;
        height: 10px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        transition: 0.3s ease;
        @media screen and (min-width: 991.98px) {
          position: absolute;
          right: 0;
          top: calc(40px + 7px);
        }
      }


    }
  }

  .accordion__text {
    position: relative;
    opacity: 0;
    overflow: hidden;
    height: 0;
    transform: translateY(-10%);
    transition: 0.3s ease;
  }

  .accordion__text-body {
    padding: 0 15px 15px 15px;

    @media screen and (min-width: 480px) {
      padding: 0 0 15px 0;
    }

    @media screen and (min-width: 991.98px) {
      padding: 0 35px 0 0;
    }

    p {
      font-size: 13px;
      font-weight: 300;
      line-height: 148%;
      color: rgba(255, 255, 255, 0.7);

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
