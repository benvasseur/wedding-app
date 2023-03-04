<!-- eslint-disable no-undef -->
<script setup>
import { onMounted, watch } from 'vue';
import location from '@/assets/texts/location.svg';
import subway from '@/assets/texts/subway.svg';

import naverMap from '@/assets/images/naverMap.png';
import kakaoNav from '@/assets/images/kakaoNav.png';
import tMap from '@/assets/images/tMap.png';

const props = defineProps(['isVisible']);

const locationLatLng = new naver.maps.LatLng(37.505408, 127.028848);
const defaultZoom = 15;

let map;
// eslint-disable-next-line no-unused-vars
let marker;

onMounted(() => {
  try {
    map = new naver.maps.Map('map', {
      center: locationLatLng,
      zoom: defaultZoom,
      scaleControl: false,
      mapDataControl: false,
      // draggable: false,
      scrollWheel: false,
    });

    marker = new naver.maps.Marker({
      position: locationLatLng,
      map,
    });
  } catch (error) {
    console.log(error);
  }
});

watch(() => props.isVisible, (isVisible) => {
  // Recenter map when page is visible
  if (isVisible) {
    try {
      map.setCenter(locationLatLng);
      map.setZoom(defaultZoom);
    } catch (error) {
      console.log(error);
    }
  }
});

</script>

<template>
  <div id="locationPage">
    <div class="location">
      <v-img
        :src="location"
        :width="105"
      />
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

    <div class="navLinks">
      <v-btn
        rounded
        href="https://naver.me/51nyDPmO"
        target="_blank"
        rel="noopener noreferrer"
      >
        <template #prepend>
          <img :src="naverMap" alt="Naver Map">
        </template>
        네이버 지도
      </v-btn>

      <v-btn
        rounded
        href="http://kko.to/2FgVgnDTYg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <template #prepend>
          <img :src="kakaoNav" alt="Naver Map">
        </template>
        카카오 내비
      </v-btn>

      <v-btn
        rounded
        href="https://surl.tmap.co.kr/68b2f39e"
        target="_blank"
        rel="noopener noreferrer"
      >
        <template #prepend>
          <img :src="tMap" alt="TMap">
        </template>
        티맵
      </v-btn>
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
    top: 90px;
    width: 100%;
    text-align: center;
  }

  .description1 {
    position: absolute;
    height: 32px;
    width: 100%;
    top: 135px;

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
    width: 100%;
    height: 240px;
    top: 230px;
    background: #D9D9D9;
    color: black;
  }

  .navLinks {
    display: flex;
    justify-content: center;
    gap: 8px;
    position: absolute;
    top: 488px;
    width: 100%;

    a.v-btn {
      color: var(--color-text-green);
      background: rgba(255, 255, 255, 0.8);
      padding: 0 12px;

      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }
  }

  .description2 {
    position: absolute;
    width: 100%;
    top: 554px;
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
