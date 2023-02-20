<script setup>
import saveTheDate from '@/assets/texts/saveTheDate.svg';

</script>

<template>
  <div id="saveTheDatePage">
    <div class="saveTheDate">
      <img :src="saveTheDate" alt="date" />
    </div>

    <div class="date">
      05.28
    </div>

    <div class="subDate">
      Sunday afternoon
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

  background-image: url('@/assets/images/saveTheDate.png');
  background-color: var(--color-background-green);
  background-repeat: no-repeat;
  background-size: cover;

  .saveTheDate {
    position: absolute;
    top: 16vh;
    width: 100vw;
    text-align: center;
  }

  .date {
    position: absolute;
    width: 100vw;
    text-align: center;
    top: 35vh;

    font-family: 'Abril Fatface';
    font-style: normal;
    font-weight: 400;
    font-size: 96px;
    line-height: 130px;
  }

  .subDate {
    position: absolute;
    width: 100vw;
    text-align: center;
    top: calc(35vh + 120px);

    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
  }

  .description {
    position: absolute;
    width: 100vw;
    text-align: center;
    bottom: 15vh;

    font-family: 'Noto Serif KR';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;

    p:first-child {
      margin-bottom: 15px;
    }
  }
}
</style>
