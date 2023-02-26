<script setup>
import invitation from '@/assets/texts/invitation.svg';
import rings from '@/assets/images/rings.png';

</script>

<template>
  <div id="invitationPage">
    <div class="invitation">
      <img :src="invitation" alt="invitation" />
    </div>

    <div class="rings">
      <img :src="rings" alt="rings" />
    </div>

    <div class="description">
      새로운 마음과 새 의미를 간직하며<br>
      저희 두 사람이 새 출발의<br>
      첫 걸음을 내딛습니다.<br>
      좋은 꿈, 바른 뜻으로 올바르게 살 수 있도록<br>
      축복과 격려주시면<br>
      더없는 기쁨으로 간직하겠습니다.
    </div>
  </div>
</template>

<style lang="scss" scoped>
#invitationPage {
  height: 100%;
  width: 100%;
  text-align: center;

  background-color: var(--color-background-beige);
  color: var(--color-text-green);

  .invitation {
    position: absolute;
    top: 120px;
    width: 100%;
    text-align: center;
  }

  .rings {
    position: absolute;
    top: 160px;
    width: 100%;
  }

  .description {
    position: absolute;
    top: 375px;
    width: 100%;

    font-family: 'Noto Serif KR';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 200%;

    text-align: center;
  }
}
</style>
