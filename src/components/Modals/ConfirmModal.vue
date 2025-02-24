<script setup>
import {defineProps, defineEmits} from "vue";

const props = defineProps({
  isOpen: Boolean,
});
const emit = defineEmits(["close"]);
</script>

<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="emit('close')">
    <div class="modal">
      <p>Сообщение успешно отправлено!</p>
      <button @click="emit('close')">Закрыть</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .9);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    border-radius: 20px;
    padding: 24px;
    background: #070707;
    box-shadow: rgba(255, 255, 255, 0.55) 0 0 10px;
    text-align: center;

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 142%;
      color: #FFF;
      margin-bottom: 12px;
    }

    button {
      width: 100%;
      padding: 15px 20px;
      border: 1px solid transparent;
      background: #7470ff;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
      font-family: 'Atyp';
      color: #FFF;
      font-size: 14px;
      font-weight: 400;
      line-height: 124%;
      transition: .1s ease;
      @media screen and (min-width: 991.98px) {
        &:hover {
          background: rgba(116, 112, 255, 0.8);
        }
      }
    }
  }

}
</style>
