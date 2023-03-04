<script setup>
import saveTheDate from '@/assets/texts/saveTheDate.svg';

</script>

<template>
  <div id="saveTheDatePage">
    <div class="saveTheDate">
      <v-img
        :src="saveTheDate"
        :width="150"
      />
    </div>

    <div class="date">
      05.28
    </div>

    <div class="subDate">
      Sunday at 2 p.m.
    </div>

    <div class="description">
      <p>2023.05.28 일요일 낮 2시</p>
      <p>강남 노보텔 앰배서더<br />2층 샴페인홀</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#saveTheDatePage {
  height: 100%;
  width: 100%;
  text-align: center;

  background-image: url('@/assets/images/saveTheDate.jpg');
  background-color: var(--color-background-green);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;

  .saveTheDate {
    position: absolute;
    top: 120px;
    width: 100%;
    text-align: center;
  }

  .date {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 35%;

    font-family: 'Abril Fatface';
    font-style: normal;
    font-weight: 400;
    font-size: 96px;
    line-height: 130px;
  }

  .subDate {
    position: absolute;
    width: 100%;
    text-align: center;
    top: calc(35% + 120px);

    font-family: 'Noto Serif KR';
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 23px;
  }

  .description {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 10%;

    font-family: 'Noto Serif KR';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;

    p:first-child {
      margin-bottom: 15px;
    }
  }
}
</style>
