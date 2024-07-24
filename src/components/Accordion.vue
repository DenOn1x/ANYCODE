<script setup>
import {ref} from 'vue';

import icChevron from "@/assets/images/svg/ic_chevron.svg?url";


const accordionItems = ref([
  {
    id: 1,
    name: 'Item 1Item 1Item 1Item 1Item 1',
    content: 'Content for item 1Content for item 1Content for item 1Content for item 1Content for item 1Content for item 1Content for item 1Content for item 1',
  },
  {
    id: 2,
    name: 'Item 2',
    content: 'Content for item 2',
  },
  {
    id: 3,
    name: 'Item 3',
    content: 'Content for item 3',
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
        <div class="name">{{ item.name }}</div>
        <span class="icon">
          <img class="arrow"
               :src="icChevron" alt=""
          />
        </span>
      </div>
      <div class="accordion__text">
        <div class="accordion__text-body">
          <p>{{ item.content }}</p>
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
    border-top: .5px solid #ffffff5c;
    border-bottom: .5px solid #ffffff5c;
    cursor: pointer;

    @media screen and (min-width: 991.98px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 60px;
      align-items: flex-start;
      justify-content: space-between;
      position: relative;
      padding: 40px 0;
    }

    &:nth-of-type(odd) {
      margin: -1px 0;
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
      font-size: 24px;
      font-weight: 700;
      line-height: 148%;
      color: #FFF;

      @media screen and (min-width: 991.98px) {
        font-size: 24px;
      }
    }

    .icon {
      img {
        display: block;
        min-width: 18px;
        width: 18px;
        height: 12px;
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
      font-size: 16px;
      font-weight: 400;
      line-height: 148%;
      color: #FFF;

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
