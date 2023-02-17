<script setup>
import invitation from '@/assets/texts/invitation.svg';
import flowerInvitation from '@/assets/images/flowerInvitation.svg';

</script>

<template>
  <div id="invitationPage">
    <div class="invitation">
      <img :src="invitation" alt="invitation" />
    </div>

    <div class="flower">
      <img :src="flowerInvitation" alt="flower" />
    </div>

    <div class="description">
      새로운 마음과 새 의미를 간직하며
      저희 두 사람이 새 출발의 첫 걸음을 내딛습니다.
      좋은 꿈, 바른 뜻으로 올바르게 살 수 있도록
      축복과 격려주시면
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
    top: 23.65%;
    width: 100vw;
  }

  .flower {
    position: absolute;
    top: 239px;
    width: 100vw;
  }

  .description {
    position: absolute;
    width: 332px;
    height: 160px;
    left: 23px;
    top: 440px;

    font-family: 'Noto Serif KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 200%;

    text-align: center;
  }
}
</style>
