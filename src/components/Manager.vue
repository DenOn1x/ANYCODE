<script setup>
import {ref, onMounted} from 'vue';

const videoElement = ref(null);
const playButton = ref(null);
const observer = ref(null);
const videoLoaded = ref(false);

const loadVideo = () => {
  if (videoLoaded.value) return;

  const videoSrc = videoElement.value.dataset.src;
  if (videoSrc) {
    const sourceElement = videoElement.value.querySelector('source');
    if (sourceElement && sourceElement.src !== videoSrc) {
      sourceElement.src = videoSrc;
      videoElement.value.load();
      videoLoaded.value = true;
    }
  }
};

const handlePlay = () => {
  if (videoElement.value) {
    videoElement.value.play().then(() => {
      console.log('Video playing');
      videoElement.value.controls = true;
    }).catch(error => {
      console.error('Failed to play video:', error);
    });
    playButton.value.style.display = 'none';
  }
};

const handleError = (event) => {
  console.error('Error occurred:', event);
};

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      loadVideo();
      observer.value.disconnect();
    }
  });

  observer.value.observe(videoElement.value);

  videoElement.value.addEventListener('error', handleError);
});
</script>


<template>
  <section class="manager">
    <div class="manager__wrapper">
      <video
          class="manager__video-component"
          ref="videoElement"
          data-src="/src/assets/images/anycode_example.mp4"
          muted

      >
        <source src="" type="video/mp4"/>
      </video>
      <button class="manager__play-button" ref="playButton" @click="handlePlay">
        <span></span>
      </button>
    </div>
  </section>
</template>


<style scoped>
.manager {
  margin-top: 60px;
  @media screen and (min-width: 1199.98px) {
    margin-top: 100px;
  }


}

.manager__wrapper {
  position: relative;
  border-radius: 20px;
  max-width: 90%;
  margin: auto;
  box-shadow: rgba(255, 255, 255, 0.55) 0 0 30px;
  @media screen and (min-width: 991.98px) {
    border-radius: 40px;
  }
}

.manager__video-component {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 20px;
  @media screen and (min-width: 991.98px) {
    border-radius: 40px;
  }
}

.manager__play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: none;
  background-color: #7470ff;
  cursor: pointer;
  display: flex;
  min-width: 64px;
  width: 64px;
  height: 64px;
  align-items: center;
  justify-content: center;
  z-index: 1;

  span {
    display: block;
    min-width: 20px;
    width: 20px;
    height: 20px;
    margin-right: -2px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNyAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgOC45OTk0MVY1LjQzOTQxQzAgMS4wMTk0MSAzLjEzIC0wLjc5MDU5MyA2Ljk2IDEuNDE5NDFMMTAuMDUgMy4xOTk0MUwxMy4xNCA0Ljk3OTQxQzE2Ljk3IDcuMTg5NDEgMTYuOTcgMTAuODA5NCAxMy4xNCAxMy4wMTk0TDEwLjA1IDE0Ljc5OTRMNi45NiAxNi41Nzk0QzMuMTMgMTguNzg5NCAwIDE2Ljk3OTQgMCAxMi41NTk0VjguOTk5NDFaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K);
  }
}

</style>
