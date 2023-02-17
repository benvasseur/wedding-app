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
    color: var(--color-text-beige);
    font-size: 25px;
    position: absolute;
    top: 16vh;
    width: 100vw;
    text-align: center;
  }

  .date {
    font-size: 120px;
    font-weight: bold;
    position: absolute;
    width: 100vw;
    text-align: center;
    top: 35vh;
  }

  .subDate {
    font-size: 40px;
    position: absolute;
    width: 100vw;
    text-align: center;
    top: calc(35vh + 120px);
  }

  .description {
    position: absolute;
    width: 100vw;
    text-align: center;
    bottom: 15vh;

    p:first-child {
      margin-bottom: 15px;
    }
  }
}
</style>
