<script setup>
import { computed } from 'vue';
import sourceSlides from '../source-slides.json';

const props = defineProps({
  pages: { type: Array, required: true },
  step: { type: Number, default: 0 },
});
const page = computed(
  () => props.pages[Math.min(Math.max(props.step, 0), props.pages.length - 1)],
);
const original = computed(() => sourceSlides[page.value - 1]);
const base = import.meta.env.BASE_URL;
const imageUrl = (number) =>
  `${base}media/original/slide-${String(number).padStart(3, '0')}.webp`;
const bounds = (rect) => ({
  left: `${rect.x}%`,
  top: `${rect.y}%`,
  width: `${rect.width}%`,
  height: `${rect.height}%`,
});
</script>

<template>
  <div class="original-build" :data-original-slide="page">
    <h1 v-if="page === 1" class="accessible-title">
      ArcGIS Online: Developing with Web Maps and Web Scenes
    </h1>
    <img
      v-for="number in pages"
      v-show="number === page"
      :key="number"
      class="original-frame"
      :src="imageUrl(number)"
      :alt="sourceSlides[number - 1].text || `PowerPoint slide ${number}`"
      draggable="false"
    />
    <a
      v-for="(link, index) in original.links"
      :key="`${page}-${index}`"
      class="original-link"
      :style="bounds(link.bounds)"
      :href="link.url"
      :aria-label="link.url"
      target="_blank"
      rel="noopener noreferrer"
      @click.stop
      @keydown.stop
    />
    <SlidevVideo
      v-if="original.video"
      class="original-video"
      :style="bounds(original.video.bounds)"
      autoplay="once"
      autoreset="slide"
      controls
      muted
      playsinline
      preload="metadata"
      aria-label="Original Experience Builder demonstration"
      @click.stop
      @keydown.stop
    >
      <source :src="`${base}media/experience-builder.mp4`" type="video/mp4" />
    </SlidevVideo>
  </div>
</template>

<style scoped>
.original-build {
  position: absolute;
  inset: 0;
  background: #03265e;
}
.accessible-title {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
.original-frame {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  user-select: none;
}
.original-link,
.original-video {
  position: absolute;
}
.original-link:focus-visible {
  outline: 3px solid white;
  outline-offset: 3px;
}
.original-video {
  object-fit: contain;
  background: black;
}
</style>
