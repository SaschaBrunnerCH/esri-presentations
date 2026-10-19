<script setup>
import { computed } from 'vue';
import { useNav } from '@slidev/client';

const props = defineProps({
  liveUrl: { type: String, required: true },
  videoClick: { type: Number, required: true },
});
const nav = useNav();
const liveHref = computed(() =>
  props.liveUrl.startsWith('https://')
    ? props.liveUrl
    : `${import.meta.env.BASE_URL}${props.liveUrl}`,
);

function playVideo(event) {
  event.currentTarget.blur();
  nav.go(nav.currentPage.value, props.videoClick);
}

function continueSlides(event) {
  event.currentTarget.blur();
  nav.nextSlide();
}
</script>

<template>
  <div
    class="demo-actions"
    role="group"
    aria-label="Demo options"
    @click.stop
    @keydown.enter.stop
    @keydown.space.stop
  >
    <a :href="liveHref" target="_blank" rel="noopener">Open live demo ↗</a>
    <button type="button" @click="playVideo">Play video</button>
    <button type="button" class="continue" @click="continueSlides">
      Next slide →
    </button>
  </div>
</template>

<style scoped>
.demo-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 14px;
  font-size: 16px;
}
.demo-actions a,
.demo-actions button {
  padding: 6px 12px;
  border: 1px solid #36768a;
  border-radius: 4px;
  color: #bcece8;
  font: inherit;
  line-height: 1.3;
  cursor: pointer;
  text-decoration: none;
}
.demo-actions a {
  background: #1a5c6d;
  color: white;
}
.demo-actions button {
  background: transparent;
}
.demo-actions a:hover,
.demo-actions button:hover {
  background: #246779;
  color: white;
}
.demo-actions a:focus-visible,
.demo-actions button:focus-visible {
  outline: 2px solid #74ded2;
  outline-offset: 3px;
}
.demo-actions .continue {
  margin-left: auto;
  border-color: transparent;
}
</style>
