<script setup>

</script>

<template>
  <div id="saveTheDate">
    <svg viewBox="0 0 500 500">
      <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
      <text width="500">
        <textPath xlink:href="#curve">
          Dangerous Curves Ahead
        </textPath>
      </text>
    </svg>
  </div>
</template>

<style scoped>
#saveTheDate {
  height: 100%;
  width: 100%;
  background: var(--color-background-green);
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
