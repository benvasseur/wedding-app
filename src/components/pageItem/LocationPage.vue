<!-- eslint-disable no-undef -->
<script setup>
import { onMounted } from 'vue';
import location from '@/assets/texts/location.svg';
import subway from '@/assets/texts/subway.svg';

onMounted(() => {
  try {
    console.log('mounted');
    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.505408, 127.028848),
      zoom: 15,
    });

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.505408, 127.028848),
      map,
    });
  } catch (error) {
    console.log(error);
  }
});

</script>

<template>
  <div id="locationPage">
    <div class="location">
      <img :src="location" alt="location" />
    </div>

    <div class="description1">
      <p class="title">
        노보텔 앰배서더 서울 강남
      </p>
      <p class="subTitle">
        서울 강남구 봉은사로 130
      </p>
    </div>

    <div id="map" style="width:100%;height:240px;">
      MAP
    </div>

    <div class="description2">
      <img :src="subway" alt="location" />
      <p>9호선 신논현역 4번 출구 <span class="info">도보 5분</span></p>
      <p>9호선 언주역 8번출구 <span class="info">도보 10분</span></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#locationPage {
  height: 100%;
  width: 100%;
  text-align: center;

  background-color: var(--color-background-green);

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

    font-family: 'Noto Serif KR';
    font-style: normal;
    font-size: 16px;
    line-height: 200%;

    .title {
      color: white;
      font-weight: 600;
    }

    .subTitle {
      font-weight: 400;
      color: var(--color-text-beige);
    }
  }

  #map {
    position: absolute;
    width: 100vw;
    height: 240px;
    top: 259px;

    background: #D9D9D9;
    padding-top: 90px;
    color: black;
  }

  .description2 {
    position: absolute;
    width: 100vw;
    top: 551px;
    text-align: left;
    margin-left: 25px;

    font-family: 'Noto Serif KR';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 200%;

    .info {
      color: var(--color-text-beige);
    }
  }
}
</style>
