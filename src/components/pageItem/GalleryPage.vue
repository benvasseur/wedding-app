<script setup>
import { ref, onMounted } from 'vue';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';
import gallery from '@/assets/texts/gallery.svg';
import 'photoswipe/style.css';

import gallery1 from '@/assets/images/gallery/gallery1.jpeg';
import gallery2 from '@/assets/images/gallery/gallery2.jpeg';
import gallery3 from '@/assets/images/gallery/gallery3.jpeg';
import gallery4 from '@/assets/images/gallery/gallery4.jpeg';
import gallery5 from '@/assets/images/gallery/gallery5.jpeg';
import gallery6 from '@/assets/images/gallery/gallery6.jpeg';
import gallery7 from '@/assets/images/gallery/gallery7.jpeg';
import gallery8 from '@/assets/images/gallery/gallery8.jpeg';
import gallery9 from '@/assets/images/gallery/gallery9.jpeg';
import gallery10 from '@/assets/images/gallery/gallery10.jpeg';
import gallery11 from '@/assets/images/gallery/gallery11.jpeg';
import gallery12 from '@/assets/images/gallery/gallery12.jpeg';
import gallery13 from '@/assets/images/gallery/gallery13.jpeg';
import gallery14 from '@/assets/images/gallery/gallery14.jpeg';
import gallery15 from '@/assets/images/gallery/gallery15.jpeg';

import gallery1Thumbnail from '@/assets/images/gallery/gallery1Thumbnail.jpeg';
import gallery2Thumbnail from '@/assets/images/gallery/gallery2Thumbnail.jpeg';
import gallery3Thumbnail from '@/assets/images/gallery/gallery3Thumbnail.jpeg';
import gallery4Thumbnail from '@/assets/images/gallery/gallery4Thumbnail.jpeg';
import gallery5Thumbnail from '@/assets/images/gallery/gallery5Thumbnail.jpeg';
import gallery6Thumbnail from '@/assets/images/gallery/gallery6Thumbnail.jpeg';
import gallery7Thumbnail from '@/assets/images/gallery/gallery7Thumbnail.jpeg';
import gallery8Thumbnail from '@/assets/images/gallery/gallery8Thumbnail.jpeg';
import gallery9Thumbnail from '@/assets/images/gallery/gallery9Thumbnail.jpeg';
import gallery10Thumbnail from '@/assets/images/gallery/gallery10Thumbnail.jpeg';
import gallery11Thumbnail from '@/assets/images/gallery/gallery11Thumbnail.jpeg';
import gallery12Thumbnail from '@/assets/images/gallery/gallery12Thumbnail.jpeg';
import gallery13Thumbnail from '@/assets/images/gallery/gallery13Thumbnail.jpeg';
import gallery14Thumbnail from '@/assets/images/gallery/gallery14Thumbnail.jpeg';
import gallery15Thumbnail from '@/assets/images/gallery/gallery15Thumbnail.jpeg';

const items = [
  {
    id: 1,
    src: gallery1,
    thumbnail: gallery1Thumbnail,
    width: 3648,
    height: 5472,
  },
  {
    id: 2,
    src: gallery2,
    thumbnail: gallery2Thumbnail,
    width: 3537,
    height: 5305,
  },
  {
    id: 3,
    src: gallery3,
    thumbnail: gallery3Thumbnail,
    width: 3648,
    height: 5472,
  },
  {
    id: 4,
    src: gallery4,
    thumbnail: gallery4Thumbnail,
    width: 5472,
    height: 3648,
  },
  {
    id: 5,
    src: gallery5,
    thumbnail: gallery5Thumbnail,
    width: 3648,
    height: 5472,
  },
  {
    id: 6,
    src: gallery6,
    thumbnail: gallery6Thumbnail,
    width: 3648,
    height: 5472,
  },
  {
    id: 7,
    src: gallery7,
    thumbnail: gallery7Thumbnail,
    width: 3648,
    height: 5472,
  },
  {
    id: 8,
    src: gallery8,
    thumbnail: gallery8Thumbnail,
    width: 3648,
    height: 5472,
  },
  {
    id: 9,
    src: gallery9,
    thumbnail: gallery9Thumbnail,
    width: 3648,
    height: 5472,
  },
  {
    id: 10,
    src: gallery10,
    thumbnail: gallery10Thumbnail,
    width: 3648,
    height: 5472,
  },
  {
    id: 11,
    src: gallery11,
    thumbnail: gallery11Thumbnail,
    width: 3648,
    height: 5472,
  },
  {
    id: 12,
    src: gallery12,
    thumbnail: gallery12Thumbnail,
    width: 3648,
    height: 5472,
  },
  {
    id: 13,
    src: gallery13,
    thumbnail: gallery13Thumbnail,
    width: 3648,
    height: 5472,
  },
  {
    id: 14,
    src: gallery14,
    thumbnail: gallery14Thumbnail,
    width: 3648,
    height: 5472,
  },
  {
    id: 15,
    src: gallery15,
    thumbnail: gallery15Thumbnail,
    width: 3648,
    height: 5472,
  },
];

const lightboxOptions = {
  gallery: '#galleryPhotoSwipe',
  children: 'a',
  showHideAnimationType: 'zoom',
  pswpModule: () => PhotoSwipe,
};

onMounted(() => {
  const lightbox = new PhotoSwipeLightbox(lightboxOptions);
  lightbox.init();
});

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
      id="galleryPhotoSwipe"
      ref="galleryRef"
      class="galleryGroup"
      :pagination="true"
      :mousewheel="true"
      :pagination-clickable="true"
      :loop="false"
      :space-between="20"
    >
      <swiper-slide class="swiperSlide">
        <v-container class="inSlideContainer">
          <v-row dense>
            <v-col
              v-for="image in items.slice(0, 9)"
              :key="image.id"
              cols="4"
            >
              <a
                :href="image.src"
                :data-pswp-width="image.width"
                :data-pswp-height="image.height"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-img :src="image.thumbnail" />
              </a>
            </v-col>
          </v-row>
        </v-container>
      </swiper-slide>

      <swiper-slide class="swiperSlide">
        <v-container class="inSlideContainer">
          <v-row dense>
            <v-col
              v-for="image in items.slice(9, 15)"
              :key="image.id"
              cols="4"
            >
              <a
                :href="image.src"
                :data-pswp-width="image.width"
                :data-pswp-height="image.height"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-img :src="image.thumbnail" />
              </a>
            </v-col>
          </v-row>
        </v-container>
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

  .galleryGroup {
    position: absolute;
    top: 140px;
    width: calc(100% - 40px);
    /* height: 70%; */
    aspect-ratio: 1 / 1;
    margin: 0 20px;
    padding-bottom: 35px;
  }

  swiper-slide {
    height: 100%;
  }
}

.inSlideContainer {
  box-sizing: border-box;
}
</style>

<style lang="scss">
/* #galleryPage {
  .swiper-pagination {
    position: absolute;
    bottom: 0px;
  }
} */
</style>
