<script setup>
defineProps(['id', 'text']);

</script>

<template>
  <svg viewBox="0 0 500 500">
    <path :id="id" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
    <text width="500">
      <textPath alignment-baseline="top" :xlink:href="`#${id}`">
        {{ text }}
      </textPath>
    </text>
  </svg>
</template>

<style scoped>
path {
  fill: transparent;
}

text {
  fill: var(--color-text-beige);
  font-size: 25px;
}
</style>
