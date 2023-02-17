<script setup>
import location from '@/assets/texts/location.svg';

</script>

<template>
  <div id="locationPage">
    <div class="location">
      <img :src="location" alt="location" />
    </div>

    <div class="description1">
      <p>노보텔 앰배서더 서울 강남</p>
      <p>서울 강남구 봉은사로 130</p>
    </div>

    <div class="map">
      MAP
    </div>

    <div class="description2">
      <p>지하철</p>
      <p>9호선 신논현역 4번 출구 도보 5분 9호선<br>언주역 8번출구 도보 10분</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#locationPage {
  height: 100%;
  width: 100%;
  text-align: center;

  background-color: var(--color-background-green);
  color: var(--color-text-beige);

  font-family: 'Noto Serif KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;

  .location {
    position: absolute;
    top: 15.52%;
    width: 100vw;
  }

  .description1 {
    position: absolute;
    height: 32px;
    width: 100vw;
    top: 170px;
  }

  .map {
    position: absolute;
    width: 100vw;
    height: 235px;
    top: 259px;

    background: #D9D9D9;
    padding-top: 90px;
    color: black;
  }

  .description2 {
    position: absolute;
    width: 100vw;
    top: 551px;
  }
}
</style>
