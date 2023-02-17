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
      Park <br> Inyoung
    </div>

    <div class="description">
      <p>박인영</p>
      <p>박순남 김윤희의 딸</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#bride {
  height: 100%;
  width: 100%;
  background: var(--color-background-green);

  .portrait {
    width: 100vw;
    height: 100vw;

    background-image: url('@/assets/images/ParkInyoung.png');
    background-repeat: no-repeat;
    background-size: cover;

    top: 150px;
  }

  .brideText {
    top: 100px;
  }

  .name {
    font-family: 'DM Serif Text';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 100%;

    position: absolute;
    width: 100vw;
    top: calc(150px + 100vw - 25px);
  }

  .description {
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 23px;
    width: 100vw;
    position: absolute;
    top: calc(150px + 100vw + 75px);

    >p:last-of-type {
      margin-top: 15px;
    }
  }
}
</style>
