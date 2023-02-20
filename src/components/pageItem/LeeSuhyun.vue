<script setup>
import groom from '@/assets/texts/groom.svg';
</script>

<template>
  <div id="groom">
    <div class="portrait" />

    <div class="groomText">
      <img :src="groom" alt="groom" />
    </div>

    <div class="name">
      Lee<br>Suhyun
    </div>

    <div class="nameKo">
      이수현
    </div>

    <div class="description">
      이성화 정신숙의 아들
    </div>
  </div>
</template>

<style lang="scss" scoped>
#groom {
  height: 100%;
  width: 100%;
  background: var(--color-background-green);

  .portrait {
    width: 100vw;
    height: 100vw;

    background-image: url('@/assets/images/LeeSuhyun.png');
    background-repeat: no-repeat;
    background-size: cover;

    top: 150px;
  }

  .groomText {
    top: 100px;
  }

  .name {
    font-family: 'DM Serif Text';
    font-style: normal;
    font-weight: 400;
    font-size: 44px;
    line-height: 100%;

    position: absolute;
    width: 100vw;
    top: calc(150px + 100vw - 25px);
  }

  .nameKo {
    width: 100vw;
    position: absolute;
    top: calc(150px + 100vw + 75px);

    font-family: 'Noto Serif KR';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
  }

  .description {
    width: 100vw;
    position: absolute;
    top: calc(150px + 100vw + 120px);

    font-family: 'Noto Serif KR';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;

    color: var(--color-text-beige);
  }
}
</style>
