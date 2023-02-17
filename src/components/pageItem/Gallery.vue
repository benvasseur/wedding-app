<script setup>
import gallery from '@/assets/texts/gallery.svg';
</script>

<template>
  <div id="galleryPage">
    <div class="galleryText">
      <img :src="gallery" alt="gallery" />
    </div>
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
    top: 15.89%;
    width: 100vw;
  }
}
</style>
