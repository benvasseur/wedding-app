<script setup>
import invitation from '@/assets/texts/invitation.svg';
import rings from '@/assets/images/rings.jpg';

</script>

<template>
  <div id="invitationPage">
    <div class="invitation">
      <v-img
        :src="invitation"
        :width="121"
      />
    </div>

    <div class="rings">
      <v-img
        :src="rings"
        :width="160"
      />
    </div>

    <div class="description">
      그대를 만난건<br />
      내게 얼마나 행운이었나<br />
      그대 생각 내게 머물므로<br />
      나의 세상은 빛나는 세상이 됩니다<br /><br />
      함께해 온 일곱 번째 봄,<br />
      따스한 사랑으로 약속의 꽃을 피우려 합니다.<br />
      저희의 동행을 축복해주시면<br />
      더 없는 기쁨으로 간직하겠습니다.
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
    top: 340px;
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
