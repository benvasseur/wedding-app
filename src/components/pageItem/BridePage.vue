<script setup>
import bride from '@/assets/texts/bride.svg';
</script>

<template>
  <div id="bride">
    <div class="portrait" />

    <div class="brideText">
      <img :src="bride" alt="bride" />
    </div>

    <div class="name">
      Park<br>Inyoung
    </div>

    <div class="nameKo">
      박인영
    </div>

    <div class="description">
      박순남 김윤희의 딸
    </div>
  </div>
</template>

<style lang="scss" scoped>
#bride {
  height: 100%;
  width: 100%;
  background: var(--color-background-green);

  .portrait {
    width: 100%;
    aspect-ratio : 1 / 1;

    background-image: url('@/assets/images/ParkInyoung.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    top: 150px;
  }

  .brideText {
    position: absolute;
    width: 100%;
    top: 56%;
  }

  .name {
    font-family: 'DM Serif Text';
    font-style: normal;
    font-weight: 400;
    font-size: 44px;
    line-height: 100%;

    position: absolute;
    width: 100%;
    top: calc(56% + 35px);
  }

  .nameKo {
    width: 100%;
    position: absolute;
    top: calc(56% + 155px);

    font-family: 'Noto Serif KR';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
  }

  .description {
    width: 100%;
    position: absolute;
    top: calc(56% + 200px);

    font-family: 'Noto Serif KR';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;

    color: var(--color-text-beige);
  }
}
</style>
