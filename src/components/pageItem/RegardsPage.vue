<script setup>
import regards from '@/assets/texts/regards.svg';
import flower from '@/assets/images/flowerInvitation.svg';

</script>

<template>
  <div id="regards">
    <div class="regards">
      <img :src="regards" alt="regards" />
    </div>

    <div class="flower">
      <img :src="flower" alt="flower" />
    </div>

    <div class="description">
      마음 전하실 곳
    </div>
  </div>
</template>

<style lang="scss" scoped>
#regards {
  height: 100%;
  width: 100%;
  text-align: center;

  background-color: var(--color-background-beige);
  color: var(--color-text-beige);

  .regards {
    position: absolute;
    top: 23.65%;
    width: 100vw;
  }

  .flower {
    position: absolute;
    top: 239px;
    width: 100vw;
  }

  .description {
    position: absolute;
    top: 420px;
    width: 100vw;

    font-family: 'Noto Serif KR';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 200%;
  }
}
</style>
