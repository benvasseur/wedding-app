<script setup>
import { loadFull } from 'tsparticles';
import flower from '@/assets/images/flower.png';
import gettingMarried from '@/assets/texts/gettingMarried.svg';
import petal1 from '@/assets/confetti/petal1.svg';
import petal2 from '@/assets/confetti/petal2.svg';
import petal3 from '@/assets/confetti/petal3.svg';
import petal4 from '@/assets/confetti/petal4.svg';
import petal5 from '@/assets/confetti/petal5.svg';

const particlesInit = async (engine) => {
  await loadFull(engine);
};

const particleOptions = {
  detectRetina: true,
  fpsLimit: 120,
  particles: {
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
    shape: {
      type: 'image',
      image: [
        {
          src: petal1,
        },
        {
          src: petal2,
        },
        {
          src: petal3,
        },
        {
          src: petal4,
        },
        {
          src: petal5,
        },
      ],

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
      <v-img
        :src="gettingMarried"
        :width="153"
      />
    </div>

    <div class="coverTitle">
      <div class="name">
        <div class="nameLatin">
          Suhyun
        </div>
        <div class="nameHangeul">
          이수현
        </div>
      </div>

      <div class="logo">
        <v-img
          eager
          :transition="'none'"
          :src="flower"
          :width="120"
        />
      </div>

      <div class="name">
        <div class="nameLatin">
          Inyoung
        </div>
        <div class="nameHangeul">
          박인영
        </div>
      </div>
    </div>

    <div class="titleWrapper" />
  </div>
</template>

<style scoped>
#appCover {
  height: 100%;
  width: 100%;
  text-align: center;

  background-image: url('@/assets/images/coverImage2.jpeg');
  background-color: var(--color-background-beige);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 50%;
  background-position-y: calc(70% - 130px);

}

#tsparticles {
  z-index:30;
}

.gettingMarriedText {
  top: calc(75% - 55px);
}

.titleWrapper {
  background-color: var(--color-background-beige);
  width: 100%;
  height: 25%;
  position: absolute;
  bottom: 0;
  z-index: 10;
}

.coverTitle {
  display: flex;
  justify-content: space-around;
  z-index: 20;
  position: absolute;
  width: 100%;
  top: calc(75% - 15px);
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
</style>
