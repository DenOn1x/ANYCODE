<script setup>
import {ref, watch, onMounted, onUnmounted} from 'vue';

const props = defineProps({
  modelValue: Boolean,
  modalClass: String,
});

const emit = defineEmits(['update:modelValue']);

const visible = ref(props.modelValue);
const isVisible = ref(false);
const isAnimating = ref(false);

const close = () => {
  if (isAnimating.value) return;
  isAnimating.value = true;
  visible.value = false;

  setTimeout(() => {
    isVisible.value = false;
    isAnimating.value = false;
    emit('update:modelValue', false);
    checkNoScroll();
  }, 300);
};

const handleBackdropClick = () => {
  if (visible.value) {
    close();
  }
};

const checkNoScroll = () => {
  const mobileMenuOpen = document.documentElement.classList.contains('mobile-menu-open');
  if (!visible.value && !mobileMenuOpen) {
    document.documentElement.classList.remove('no-scroll');
  }
};

watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    visible.value = true;
    isVisible.value = true;
    isAnimating.value = true;
    document.documentElement.classList.add('no-scroll');
    setTimeout(() => {
      isAnimating.value = false;
    }, 300);
  } else {
    close();
  }
});

const onEsc = (event) => {
  if (event.key === 'Escape' && visible.value) {
    close();
  }
};

onMounted(() => {
  document.addEventListener('keydown', onEsc);
});

onUnmounted(() => {
  document.removeEventListener('keydown', onEsc);
  checkNoScroll();
});
</script>

<template>
  <div v-if="isVisible" class="modal-backdrop" @click="handleBackdropClick">
    <div :class="['modal-content', modalClass, { 'leave': !visible }]" @click.stop>
      <slot></slot>
      <button class="modal-close" @click="close">
        <span></span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .7);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
}

.modal-content {
  position: relative;
  width: 100%;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  margin-top: auto;
  background-color: #070707;
  box-shadow: rgba(255, 255, 255, 0.55) 0 0 30px;

  &.modal-quote {
    max-width: 480px;
  }

  &.modal-quiz {
    max-width: 640px;
  }

  @media screen and (min-width: 575.98px) {
    margin: 0;
    border-radius: 20px;

  }
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: none;
  cursor: pointer;

  span {
    display: block;
    min-width: 32px;
    width: 32px;
    height: 32px;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAYAAACOqiAdAAAACXBIWXMAAAsTAAALEwEAmpwYAAABXElEQVR4nO3aUU4CMRRG4W4Enn3Ql/vfnSguDV2E4K40uIkxDZgYIoN02iZtz5fM8505AWamNAQAAAAAAAAAAAD0x8yeJb2b2au7r2rNlbSOMyXt4zmEBqNNv46Du9+XnhtnxFlns59CKyTtz06+eLwL0eKxC62w41dlqhVvJlo8tqEV7r6auZCs8a5EO9T8fc1C0p2kjwsX9CXpIccMM/ssOaO7eOo1Wsl43UcrEW+YaDnjDRctR7xhoy2JN3y0lHhES4hHtMSn/lpvHz1+8qYhbwQF4hEtIR7R/nLlRkC4xGjEWxCNeD94HEnwn4fbGouhTdENL+zEO0l5jRo+nhYsDQ0bTxnW04aLp4yLkMPEU4GV2+7jqeByd7fxVOE/gu7iSVqzBSKBsemm/W1eZvYWWiFpUzPaXDx3fwwt0TFe/ORta261irPM7OU0e1NrLgAAAAAAAAAAAEI932zoEMkurAeRAAAAAElFTkSuQmCC");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: grayscale(255) brightness(255);
  }
}

@keyframes modal-enter-animation {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes modal-leave-animation {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.5);
  }
}

.modal-content {
  animation-name: modal-enter-animation;
}

.modal-content.leave {
  animation-name: modal-leave-animation;
}
</style>
