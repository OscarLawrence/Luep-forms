<template>
  <img :src="imgSrc" :alt="alt" :style="{ width, height }" />
</template>

<script lang="ts" setup>
import { toRef, computed } from 'vue';

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  width: { type: String, default: '100%' },
  height: { type: String, default: '100%' },
});

const src = toRef(props, 'src');

const imgSrc = computed(() => src.value.replace('@', ''));
</script>

<style lang="scss" scoped>
img {
  object-fit: cover;
}
</style>
