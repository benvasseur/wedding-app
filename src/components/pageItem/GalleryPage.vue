<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';
import gallery from '@/assets/texts/gallery.svg';
import 'photoswipe/style.css';

import coverImage from '@/assets/images/coverImage.png';
import coverImageThumbnail from '@/assets/images/coverImage_thumbnail_500x500.jpg';

const items = [
  {
    id: 1,
    src: coverImage,
    thumbnail: coverImageThumbnail,
    width: 375,
    height: 578,
  },
  {
    id: 2,
    src: coverImage,
    thumbnail: coverImageThumbnail,
    width: 375,
    height: 578,
  },
  {
    id: 3,
    src: coverImage,
    thumbnail: coverImageThumbnail,
    width: 375,
    height: 578,
  },
  {
    id: 4,
    src: coverImage,
    thumbnail: coverImageThumbnail,
    width: 375,
    height: 578,
  },
  {
    id: 5,
    src: coverImage,
    thumbnail: coverImageThumbnail,
    width: 375,
    height: 578,
  },
  {
    id: 6,
    src: coverImage,
    thumbnail: coverImageThumbnail,
    width: 375,
    height: 578,
  },
  {
    id: 7,
    src: coverImage,
    thumbnail: coverImageThumbnail,
    width: 375,
    height: 578,
  },
  {
    id: 9,
    src: coverImage,
    thumbnail: coverImageThumbnail,
    width: 375,
    height: 578,
  },
  {
    id: 10,
    src: coverImage,
    thumbnail: coverImageThumbnail,
    width: 375,
    height: 578,
  },
  {
    id: 11,
    src: coverImage,
    thumbnail: coverImageThumbnail,
    width: 375,
    height: 578,
  },
  {
    id: 12,
    src: coverImage,
    thumbnail: coverImageThumbnail,
    width: 375,
    height: 578,
  },
  {
    id: 13,
    src: coverImage,
    thumbnail: coverImageThumbnail,
    width: 375,
    height: 578,
  },
  {
    id: 14,
    src: coverImage,
    thumbnail: coverImageThumbnail,
    width: 375,
    height: 578,
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

onUnmounted(() => {
  // galleryRef.value.destroy();
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
          <v-row>
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
          <v-row>
            <v-col
              v-for="image in items.slice(9, 13)"
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
