<script setup>
import { ref, onMounted } from 'vue';
import { register } from 'swiper/element/bundle';
import AppCover from './pageItem/AppCover.vue';
import SaveTheDate from './pageItem/SaveTheDate.vue';
import ParkInyoung from './pageItem/ParkInyoung.vue';
import LeeSuhyun from './pageItem/LeeSuhyun.vue';
import Invitation from './pageItem/InvitationPage.vue';

import Location from './pageItem/LocationPage.vue';
import Gallery from './pageItem/GalleryPage.vue';
import Regards from './pageItem/RegardsPage.vue';

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

const swipeDown = () => {
  swiperContainer.value.swiper.slideNext();
};

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
      <Location />
    </swiper-slide>
    <swiper-slide class="swiperSlide">
      <AppCover @down-arrow-click="swipeDown" />
    </swiper-slide>

    <swiper-slide class="swiperSlide">
      <SaveTheDate />
    </swiper-slide>

    <swiper-slide class="swiperSlide">
      <ParkInyoung />
    </swiper-slide>

    <swiper-slide class="swiperSlide">
      <LeeSuhyun />
    </swiper-slide>

    <swiper-slide class="swiperSlide">
      <Invitation />
    </swiper-slide>

    <swiper-slide class="swiperSlide">
      <Location />
    </swiper-slide>

    <swiper-slide class="swiperSlide">
      <Gallery />
    </swiper-slide>

    <swiper-slide class="swiperSlide">
      <Regards />
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
