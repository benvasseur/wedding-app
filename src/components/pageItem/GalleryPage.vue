<script setup>
import { ref } from 'vue';
import gallery from '@/assets/texts/gallery.svg';

import coverImage from '@/assets/images/coverImage.png';
import coverImage2 from '@/assets/images/coverImage2.jpeg';
import ParkInyoung from '@/assets/images/ParkInyoung.png';

const galleryRef = ref(null);

</script>

<template>
  <div id="galleryPage">
    <div class="galleryText">
      <v-img
        :src="gallery"
        :width="92"
      />
    </div>

    <swiper-container
      ref="galleryRef"
      class="gallery"
      :pagination="true"
      :mousewheel="true"
      :pagination-clickable="true"
      :loop="true"
      :space-between="20"
    >
      <swiper-slide class="swiperSlide">
        <v-img
          :src="coverImage"
          height="100%"
        />
      </swiper-slide>

      <swiper-slide class="swiperSlide">
        <v-img
          :src="coverImage2"
          height="100%"
        />
      </swiper-slide>

      <swiper-slide class="swiperSlide">
        <v-img
          :src="ParkInyoung"
          height="100%"
        />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style lang="scss" scoped>
#galleryPage {
  height: 100%;
  width: 100%;
  text-align: center;

  background-color: var(--color-background-beige);
  color: var(--color-text-green);

  .galleryText {
    position: absolute;
    top: 90px;
    width: 100%;
    text-align: center;
  }

  .gallery {
    position: absolute;
    top: 130px;
    width: calc(100% - 40px);
    height: 70%;
    margin: 0 20px;
    padding-bottom: 35px;
  }

  swiper-slide {
    height: 100%;
  }
}
</style>

<style lang="scss">
#galleryPage {
  .swiper-pagination {
    position: absolute;
    bottom: 0px;
  }
}
</style>
