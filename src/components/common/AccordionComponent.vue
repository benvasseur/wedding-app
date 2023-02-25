<template>
  <div class="accordion__item" :class="{ open: visible }">
    <div
      class="accordion__trigger"
      :class="{ accordion__trigger_active: visible }"
      @click="open"
    >
      <slot name="accordion-trigger" />
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div
        v-show="visible"
        class="accordion__content"
      >
        <slot name="accordion-content" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    open() {
      this.visible = !this.visible;
    },
    start(el) {
      // eslint-disable-next-line no-param-reassign
      el.style.height = `${el.scrollHeight}px`;
    },
    end(el) {
      // eslint-disable-next-line no-param-reassign
      el.style.height = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.accordion__item {
  cursor: pointer;
  border-bottom: 1px solid #ebebeb;
  position: relative;
}

.accordion__trigger {
  text-align: left;
  background: #FFFFFF;
  border-radius: 8px;
  padding: 12px 20px;
}

.accordion__content {
  text-align: left;
  background: #F8F6F2;
  border-radius: 0px 0px 8px 8px;
  padding: 12px 20px;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}

.accordion__item.open {
  .accordion__trigger {
    border-radius: 8px 8px 0px 0px;
  }
}
</style>
