<script setup>
import {ref, onMounted, onUnmounted} from 'vue';

const customCursor = ref(null);
const cursorPosition = ref({x: 0, y: 0});
const offset = ref({x: 0, y: 0});

const moveCursor = (event) => {
  cursorPosition.value.x = event.clientX;
  cursorPosition.value.y = event.clientY;
  updateCursorPosition();
};

const updateCursorPosition = () => {
  if (customCursor.value) {
    customCursor.value.style.transform = `translate3d(${cursorPosition.value.x + offset.value.x}px, ${cursorPosition.value.y + offset.value.y}px, 0)`;
  }
};

const handleScroll = () => {
  offset.value.x = window.scrollX;
  offset.value.y = window.scrollY;
  updateCursorPosition();
};

onMounted(() => {
  window.addEventListener('mousemove', moveCursor);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', moveCursor);
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="custom-cursor-container">
    <div ref="customCursor" class="custom-cursor"></div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.custom-cursor-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 11;

  .custom-cursor {
    display: none;
    position: absolute;
    z-index: 99;
    min-width: 16px;
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjUwMjkgMTYuNjEzOEwxNS4wOTU4IDEwLjEwN0MxNC45NzcyIDkuODE4MzYgMTQuODU0MSA5LjQ3NTY2IDE0LjcyNjUgOS4wNzg4NEMxNC41OTg4IDguNjgyMDMgMTQuNDcxMiA4LjI1MzY1IDE0LjM0MzUgNy43OTM3QzE0LjIyNSA4LjI1MzY1IDE0LjEwMTkgOC42ODY1NCAxMy45NzQyIDkuMDkyMzdDMTMuODQ2NiA5LjQ4OTE5IDEzLjcyMzUgOS44MzY0IDEzLjYwNSAxMC4xMzRMMTEuMjExNSAxNi42MTM4SDE3LjUwMjlaTTIzLjk5OTUgMjRIMjEuMTU0N0MyMC44MzU2IDI0IDIwLjU3NTcgMjMuOTIzMyAyMC4zNzUxIDIzLjc3QzIwLjE3NDUgMjMuNjA3NyAyMC4wMjQxIDIzLjQwOTMgMTkuOTIzOCAyMy4xNzQ4TDE4LjQ0NjYgMTkuMTg0MUgxMC4yNTQxTDguNzc2OTQgMjMuMTc0OEM4LjcwNCAyMy4zODIyIDguNTYyNjcgMjMuNTcxNiA4LjM1Mjk1IDIzLjc0M0M4LjE0MzI0IDIzLjkxNDMgNy44ODMzNyAyNCA3LjU3MzM2IDI0SDQuNzAxMTdMMTIuNDgzNCA0LjQzODgxTDE0LjMxNzkgMEwxNi4yMzA5IDQuNDM4ODFMMjMuOTk5NSAyNFoiIGZpbGw9IiNGQUZBRkEiLz4KPHBhdGggZD0iTTEyLjgwMTcgMTYuNjEzOEwxMC4zOTQ2IDEwLjEwN0MxMC4yNzYgOS44MTgzNiAxMC4xNTMgOS40NzU2NiAxMC4wMjUzIDkuMDc4ODRDOS44OTc2NSA4LjY4MjAzIDkuNzY5OTkgOC4yNTM2NSA5LjY0MjM0IDcuNzkzN0M5LjUyMzgxIDguMjUzNjUgOS40MDA3MSA4LjY4NjU0IDkuMjczMDYgOS4wOTIzN0M5LjE0NTQxIDkuNDg5MTkgOS4wMjIzMSA5LjgzNjQgOC45MDM3OCAxMC4xMzRMNi41MTAyOSAxNi42MTM4SDEyLjgwMTdaTTE5LjI5ODQgMjRIMTYuNDUzNUMxNi4xMzQ0IDI0IDE1Ljg3NDUgMjMuOTIzMyAxNS42NzM5IDIzLjc3QzE1LjQ3MzMgMjMuNjA3NyAxNS4zMjI5IDIzLjQwOTMgMTUuMjIyNiAyMy4xNzQ4TDEzLjc0NTUgMTkuMTg0MUg1LjU1Mjg5TDQuMDc1NzcgMjMuMTc0OEM0LjAwMjgzIDIzLjM4MjIgMy44NjE1IDIzLjU3MTYgMy42NTE3OCAyMy43NDNDMy40NDIwNyAyMy45MTQzIDMuMTgyMiAyNCAyLjg3MjE5IDI0SDBMNy43ODIyNiA0LjQzODgxTDkuNjE2NyAwTDExLjUyOTggNC40Mzg4MUwxOS4yOTg0IDI0WiIgZmlsbD0iI0ZBRkFGQSIvPgo8L3N2Zz4K);
    pointer-events: none;
    transition: transform .5s ease-out;
    transform: translate3d(-50%, -50%, 0);
    @media screen and (min-width: 1199.98px) {
      display: block;
    }
  }
}
</style>
