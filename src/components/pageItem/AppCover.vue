<script setup>
import { loadFull } from 'tsparticles';
import flower from '@/assets/images/flower.svg';
import arrowDown from '@/assets/images/arrowDown.svg';
import gettingMarried from '@/assets/texts/gettingMarried.svg';

defineEmits(['downArrowClick']);

const particlesInit = async (engine) => {
  await loadFull(engine);
};

// const particleOptions = {
//   background: {
//     color: '#333',
//   },
//   particles: {
//     move: {
//       direction: 'bottom',
//       enable: true,
//       random: false,
//       straight: false,
//     },
//     opacity: {
//       value: { min: 0.1, max: 0.5 },
//     },
//     size: {
//       value: { min: 1, max: 10 },
//     },
//     wobble: {
//       distance: 20,
//       enable: true,
//       speed: {
//         min: -5,
//         max: 5,
//       },
//     },
//   },
// };

const particleOptions = {
  detectRetina: true,
  fpsLimit: 120,
  particles: {
    color: {
      value: ['#cc3399', '#660066', '#990099'],
    },
    move: {
      direction: 'bottom-left',
      enable: true,
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 100,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: ['circle', 'triangle', 'star'],
    },
    size: {
      random: true,
      value: 10,
    },
  },

};
</script>

<template>
  <div id="appCover">
    <Particles
      id="tsparticles"
      :particles-init="particlesInit"
      :options="particleOptions"
    />

    <div class="gettingMarriedText">
      <img :src="gettingMarried" alt="married" />
    </div>

    <div class="coverTitle">
      <div class="name">
        <div class="nameLatin">
          Inyoung
        </div>
        <div class="nameHangeul">
          박인영
        </div>
      </div>

      <div class="logo">
        <img :src="flower" alt="flower" />
      </div>

      <div class="name">
        <div class="nameLatin">
          Suhyun
        </div>
        <div class="nameHangeul">
          이수현
        </div>
      </div>
    </div>

    <div class="titleWrapper" />

    <div
      class="arrowDown"
      @click="$emit('downArrowClick')"
    >
      <img :src="arrowDown" alt="arrow" />
    </div>
  </div>
</template>

<style scoped>
#appCover {
  height: 100%;
  width: 100%;
  text-align: center;

  /* background-image: url('@/assets/images/coverImage.png'); */
  background-image: url('@/assets/images/coverImage2.jpeg');
  background-color: var(--color-background-beige);
  background-repeat: no-repeat;
  background-size: 100%;
}

#tsparticles {
  z-index:30;
}

.gettingMarriedText {
  position: absolute;
  width: 100vw;
  bottom: calc(25vh + 32px);
}

.titleWrapper {
  background-color: var(--color-background-beige);
  width: 100vw;
  height: 25vh;
  position: absolute;
  bottom: 0;
  z-index: 10;
}

.coverTitle {
  display: flex;
  justify-content: space-around;
  z-index: 20;
  position: absolute;
  width: 100vw;
  bottom: calc(25vh - 90px);
}

.name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 7px;
  color: var(--color-text-green);
}

.name:first-child {
  margin-left: 20px;
}

.name:last-child {
  margin-right: 20px;
}

.nameLatin {
  font-weight: bold;
}

.arrowDown {
  z-index: 20;
  position: absolute;
  bottom: 65px;
  margin: 0 auto;
  left: 0;
  right: 0;
}
</style>
