<script setup>
import flower from '@/assets/images/flower.svg';
import arrowDown from '@/assets/icons/arrowDown.svg';

// const arrowClick = () => {
//   console.log('arrow clicked');
// };

defineEmits(['downArrowClick']);
</script>

<template>
  <div id="appCover">
    <div class="coverTitle">
      <div class="name">
        <div class="nameLatin">
          Inyoung
        </div>
        <div class="nameHangeul">
          박인영
        </div>
      </div>

      <div class="logo">
        <img :src="flower" alt="flower" />
      </div>

      <div class="name">
        <div class="nameLatin">
          Suhyun
        </div>
        <div class="nameHangeul">
          이수현
        </div>
      </div>
    </div>

    <div
      class="arrowDown"
      @click="$emit('downArrowClick')"
    >
      <img :src="arrowDown" alt="arrow" />
    </div>
  </div>
</template>

<style scoped>
#appCover {
  height: 100%;
  width: 100%;
  text-align: center;

  background-image: url('@/assets/images/coverImage.png');
  background-color: var(--color-background-beige);
  background-repeat: no-repeat;
  background-size: 100%;
}

.coverTitle {
  display: flex;
  justify-content: space-around;

  position: absolute;
  width: 100vw;
  bottom: 18%;
}

.name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 7px;
  color: var(--color-text-green);
}

.nameLatin {
  font-weight: bold;
}

.arrowDown {
  position: absolute;
  bottom: 48px;
  margin: 0 auto;
  left: 0;
  right: 0;
}
</style>
