<script setup>
import groom from '@/assets/texts/groom.svg';
</script>

<template>
  <div id="groom">
    <div class="portrait" />

    <div class="groomText">
      <v-img
        :src="groom"
        :width="73"
      />
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
    width: 100%;

    background-image: url('@/assets/images/LeeSuhyun.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    top: 150px;

    aspect-ratio : 1 / 1;
    // Fallback
    @supports not (aspect-ratio: 1 / 1) {
      &::before {
        float: left;
        padding-top: 100%;
        content: "";
      }

      &::after {
        display: block;
        content: "";
        clear: both;
      }
    }
  }

  .groomText {
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
