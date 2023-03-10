<script setup>
import {
  ref, reactive, onMounted, computed,
} from 'vue';
import { register } from 'swiper/element/bundle';

import AppCover from './pageItem/AppCover.vue';
import DatePage from './pageItem/DatePage.vue';
import BridePage from './pageItem/BridePage.vue';
import GroomPage from './pageItem/GroomPage.vue';
import InvitationPage from './pageItem/InvitationPage.vue';
import LocationPage from './pageItem/LocationPage.vue';
import GalleryPage from './pageItem/GalleryPage.vue';
import RegardsPage from './pageItem/RegardsPage.vue';

import location from '@/assets/images/location.svg';
import arrowDown from '@/assets/images/arrowDown.svg';

register();

const swiperContainer = ref(null);

const state = reactive({
  activeSlide: 0,
  totalSlide: 0,
  isLocationVisible: false,
});

const showPagination = computed(() => state.activeSlide !== 1
    && state.activeSlide !== 0);

const showLocationLink = computed(() => state.activeSlide !== 1
  && state.activeSlide !== 0
  && state.activeSlide !== 6);

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

const swipeToMap = () => {
  const id = setInterval(() => {
    if (state.activeSlide < 6) {
      if (state.activeSlide === 5) clearInterval(id);
      swiperContainer.value.swiper.slideNext(250);
    } else {
      if (state.activeSlide === 7) clearInterval(id);
      swiperContainer.value.swiper.slidePrev(250);
    }
  }, 100);
};

const onInit = () => {
  state.totalSlide = swiperContainer.value?.swiper.slides.length;
};

const onSlideChange = () => {
  state.activeSlide = swiperContainer.value.swiper.activeIndex + 1;
};

const onTransitionEnd = (event) => {
  if (event.propertyName === 'transform') {
    state.isLocationVisible = state.activeSlide === 6;
  }
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
    :touch-move-stop-propagation="true"
    :set-wrapper-size="false"
    :no-swiping="true"
    @init="onInit"
    @slidechange="onSlideChange"
    @transitionend="onTransitionEnd"
  >
    <div class="navigation">
      <div v-show="showPagination" class="left">
        {{ state.activeSlide }} / {{ state.totalSlide }}
      </div>
      <div v-show="showLocationLink" class="right">
        <v-btn
          rounded
          variant="outlined"
          @click="swipeToMap"
        >
          <template #prepend>
            <img :src="location" alt="location">
          </template>
          ????????????
        </v-btn>
      </div>
    </div>

    <div
      v-if="state.activeSlide < state.totalSlide"
      class="arrowDown"
      @click="swipeDown"
    >
      <v-img
        :src="arrowDown"
        :width="48"
      />
    </div>

    <swiper-slide class="swiperSlide">
      <AppCover />
    </swiper-slide>

    <swiper-slide class="swiperSlide">
      <DatePage />
    </swiper-slide>

    <swiper-slide class="swiperSlide">
      <GroomPage />
    </swiper-slide>

    <swiper-slide class="swiperSlide">
      <BridePage />
    </swiper-slide>

    <swiper-slide class="swiperSlide">
      <InvitationPage />
    </swiper-slide>

    <swiper-slide class="swiperSlide">
      <LocationPage :is-visible="state.isLocationVisible" />
    </swiper-slide>

    <swiper-slide class="swiperSlide">
      <GalleryPage />
    </swiper-slide>

    <swiper-slide class="swiperSlide">
      <RegardsPage />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
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

.navigation {
  position: absolute;
  z-index: 50;
  width: calc(100% - 40px);
  padding: 0 20px;
  top: 20px;

  display: flex;
  justify-content: space-between;

  color: var(--color-text-beige);

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 200%;

  .left {
    margin-left: 12px;
  }
}

.arrowDown {
  z-index: 20;
  position: absolute;
  bottom: 28px;
  margin: 0 auto;
  left: 0;
  right: 0;
}
</style>
