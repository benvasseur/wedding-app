<script setup>
import { ref, onMounted } from 'vue';
import { register } from 'swiper/element/bundle';
import AppCover from './pageItem/AppCover.vue';
import SaveTheDate from './pageItem/SaveTheDate.vue';
import ParkInyoung from './pageItem/ParkInyoung.vue';

register();

const swiperContainer = ref(null);

onMounted(() => {
  Object.assign(swiperContainer.value, {
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, '-20%', -1],
      },
      next: {
        translate: [0, '100%', 0],
      },
    },
  });

  swiperContainer.value.initialize();
});

</script>

<template>
  <swiper-container
    ref="swiperContainer"
    class="swiperContainer"
    :pagination="false"
    direction="vertical"
    :mousewheel="true"
    :init="false"
    effect="creative"
  >
    <swiper-slide class="swiperSlide">
      <AppCover />
    </swiper-slide>
    <swiper-slide class="swiperSlide">
      <SaveTheDate />
    </swiper-slide>
    <swiper-slide class="swiperSlide">
      <ParkInyoung />
    </swiper-slide>
  </swiper-container>
</template>

<style scoped>
.swiperContainer {
  width: 100%;
  height: 100%;
}

.swiperSlide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
