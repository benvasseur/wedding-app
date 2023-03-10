<script setup>
import { onMounted } from 'vue';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';
import ObjectPosition from '@vovayatsyuk/photoswipe-object-position';
import gallery from '@/assets/texts/gallery.svg';
import 'photoswipe/style.css';

import gallery1 from '@/assets/images/gallery/gallery1.jpg';
import gallery2 from '@/assets/images/gallery/gallery2.jpg';
import gallery3 from '@/assets/images/gallery/gallery3.jpg';
import gallery4 from '@/assets/images/gallery/gallery4.jpg';
import gallery5 from '@/assets/images/gallery/gallery5.jpg';
import gallery6 from '@/assets/images/gallery/gallery6.jpg';
import gallery7 from '@/assets/images/gallery/gallery7.jpg';
import gallery8 from '@/assets/images/gallery/gallery8.jpg';
import gallery9 from '@/assets/images/gallery/gallery9.jpg';
import gallery10 from '@/assets/images/gallery/gallery10.jpg';
import gallery11 from '@/assets/images/gallery/gallery11.jpg';
import gallery12 from '@/assets/images/gallery/gallery12.jpg';
import gallery13 from '@/assets/images/gallery/gallery13.jpg';
import gallery14 from '@/assets/images/gallery/gallery14.jpg';
import gallery15 from '@/assets/images/gallery/gallery15.jpg';

import gallery1Thumbnail from '@/assets/images/gallery/gallery1Thumbnail.jpg';
import gallery2Thumbnail from '@/assets/images/gallery/gallery2Thumbnail.jpg';
import gallery3Thumbnail from '@/assets/images/gallery/gallery3Thumbnail.jpg';
import gallery4Thumbnail from '@/assets/images/gallery/gallery4Thumbnail.jpg';
import gallery5Thumbnail from '@/assets/images/gallery/gallery5Thumbnail.jpg';
import gallery6Thumbnail from '@/assets/images/gallery/gallery6Thumbnail.jpg';
import gallery7Thumbnail from '@/assets/images/gallery/gallery7Thumbnail.jpg';
import gallery8Thumbnail from '@/assets/images/gallery/gallery8Thumbnail.jpg';
import gallery9Thumbnail from '@/assets/images/gallery/gallery9Thumbnail.jpg';
import gallery10Thumbnail from '@/assets/images/gallery/gallery10Thumbnail.jpg';
import gallery11Thumbnail from '@/assets/images/gallery/gallery11Thumbnail.jpg';
import gallery12Thumbnail from '@/assets/images/gallery/gallery12Thumbnail.jpg';
import gallery13Thumbnail from '@/assets/images/gallery/gallery13Thumbnail.jpg';
import gallery14Thumbnail from '@/assets/images/gallery/gallery14Thumbnail.jpg';
import gallery15Thumbnail from '@/assets/images/gallery/gallery15Thumbnail.jpg';

const items = [
  {
    id: 1,
    src: gallery1,
    thumbnail: gallery1Thumbnail,
    width: 900,
    height: 1350,
  },
  {
    id: 2,
    src: gallery2,
    thumbnail: gallery2Thumbnail,
    width: 900,
    height: 1350,
  },
  {
    id: 3,
    src: gallery3,
    thumbnail: gallery3Thumbnail,
    width: 900,
    height: 1350,
  },
  {
    id: 4,
    src: gallery4,
    thumbnail: gallery4Thumbnail,
    thumbnailPosition: 'center',
    width: 900,
    height: 1350,
  },
  {
    id: 5,
    src: gallery5,
    thumbnail: gallery5Thumbnail,
    thumbnailPosition: 'bottom',
    width: 900,
    height: 1350,
  },
  {
    id: 6,
    src: gallery6,
    thumbnail: gallery6Thumbnail,
    width: 900,
    height: 1350,
  },
  {
    id: 7,
    src: gallery7,
    thumbnail: gallery7Thumbnail,
    width: 900,
    height: 1350,
  },
  {
    id: 8,
    src: gallery8,
    thumbnail: gallery8Thumbnail,
    thumbnailPosition: 'center',
    width: 900,
    height: 1350,
  },
  {
    id: 9,
    src: gallery9,
    thumbnail: gallery9Thumbnail,
    width: 900,
    height: 1350,
  },
  {
    id: 10,
    src: gallery10,
    thumbnail: gallery10Thumbnail,
    width: 900,
    height: 1350,
  },
  {
    id: 11,
    src: gallery11,
    thumbnail: gallery11Thumbnail,
    thumbnailPosition: 'center',
    width: 900,
    height: 1350,
  },
  {
    id: 12,
    src: gallery12,
    thumbnail: gallery12Thumbnail,
    thumbnailPosition: 'center',
    width: 900,
    height: 1350,
  },
  {
    id: 13,
    src: gallery13,
    thumbnail: gallery13Thumbnail,
    width: 900,
    height: 1350,
  },
  {
    id: 14,
    src: gallery14,
    thumbnail: gallery14Thumbnail,
    width: 900,
    height: 1350,
  },
  {
    id: 15,
    src: gallery15,
    thumbnail: gallery15Thumbnail,
    thumbnailPosition: 'left',
    width: 1080,
    height: 720,
  },
];

const lightboxOptions = {
  gallery: '#galleryPhotoSwipe',
  children: 'a',
  showHideAnimationType: 'zoom',
  zoom: false,
  pswpModule: () => PhotoSwipe,
};

onMounted(() => {
  const lightbox = new PhotoSwipeLightbox(lightboxOptions);
  // eslint-disable-next-line no-unused-vars
  const objectPosition = new ObjectPosition(lightbox);
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
                data-cropped="true"
              >
                <v-img
                  :class="image.thumbnailPosition ? `v-img-cover-position-${image.thumbnailPosition}` : 'v-img-cover-position-top'"
                  eager
                  :src="image.src"
                  :aspect-ratio="1"
                  cover
                />
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
                data-cropped="true"
              >
                <v-img
                  :class="image.thumbnailPosition ? `v-img-cover-position-${image.thumbnailPosition}` : 'v-img-cover-position-top'"
                  eager
                  :src="image.src"
                  :aspect-ratio="1"
                  cover
                />
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
