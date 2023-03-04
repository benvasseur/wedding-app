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
      <!-- <img :src="gallery" alt="gallery" /> -->
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
      <!-- <IMG> style -->
      <!-- <swiper-slide class="swiperSlide">
        <img :src="coverImage" alt="image" />
      </swiper-slide> -->

      <!-- <swiper-slide class="swiperSlide">
        <img :src="coverImage2" alt="image" />
      </swiper-slide> -->

      <!-- <swiper-slide class="swiperSlide">
        <img :src="ParkInyoung" alt="image" />
      </swiper-slide> -->

      <!-- <V-IMG> style-->
      <swiper-slide class="swiperSlide">
        <v-img
          :src="coverImage"
          height="100%"
          cover
        />
      </swiper-slide>

      <swiper-slide class="swiperSlide">
        <v-img
          :src="coverImage2"
          height="100%"
          cover
        />
      </swiper-slide>

      <swiper-slide class="swiperSlide">
        <v-img
          :src="ParkInyoung"
          height="100%"
          cover
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
    max-height: 70%;
    margin: 0 20px;
    padding-bottom: 35px;

    aspect-ratio: 1 / 1.5;
    // Fallback
    @supports not (aspect-ratio: 1 / 1) {
      &::before {
        float: left;
        padding-top: 150%;
        content: "";
      }

      &::after {
        display: block;
        content: "";
        clear: both;
      }
    }
  }

  /* <IMG> style */
  /* swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  } */

  /* <V-IMG> style */
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
