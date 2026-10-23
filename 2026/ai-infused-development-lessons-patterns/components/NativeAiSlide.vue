<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import { useIsSlideActive } from '@slidev/client';
import slides from '../native-session.json';
import '../ai-session.css';

const props = defineProps({
  original: { type: Number, required: true },
  step: { type: Number, default: 0 },
});
const scenes = Object.fromEntries(
  Object.entries(
    import.meta.glob('./native/Slide*.vue', { eager: true, import: 'default' }),
  ).map(([path, component]) => [
    Number(path.match(/Slide(\d+)\.vue$/)[1]),
    component,
  ]),
);
const source = computed(() =>
  slides.find((slide) => slide.original === props.original),
);
const stepIndex = computed(() =>
  Math.min(Math.max(props.step, 0), source.value.states.length - 1),
);
const state = computed(() => source.value.states[stepIndex.value]);
const hidden = computed(() => new Set(state.value.hidden));
const visible = (id, parents = []) =>
  !hidden.value.has(id) && parents.every((parent) => !hidden.value.has(parent));
const bounds = (rect) => ({
  left: `${rect.x}%`,
  top: `${rect.y}%`,
  width: `${rect.width}%`,
  height: `${rect.height}%`,
});
const isSlideActive = useIsSlideActive();
const video = ref(null);
const played = ref(false);
watch(
  video,
  (element, previous) => {
    if (previous && previous !== element) {
      previous.pause();
      previous.currentTime = 0;
    }
    if (!element || played.value) return;
    played.value = true;
    void element.play().catch((error) => {
      if (!['AbortError', 'NotAllowedError'].includes(error.name)) throw error;
    });
  },
  { flush: 'post' },
);
onBeforeUnmount(() => video.value?.pause());
const recording = `${import.meta.env.BASE_URL}media/ai-session/copilot-agent.mp4`;
</script>

<template>
  <div
    class="native-ai-slide"
    :data-original-slide="original"
    :data-original-step="stepIndex"
  >
    <component :is="scenes[original]" :visible="visible" />
    <svg class="ai-copy-layer" viewBox="0 0 960 540">
      <foreignObject width="960" height="540">
        <div xmlns="http://www.w3.org/1999/xhtml" class="ai-copy-content">
          <slot />
        </div>
      </foreignObject>
    </svg>
    <video
      v-if="source.video && step >= 1 && isSlideActive"
      ref="video"
      class="native-ai-video"
      :style="bounds(source.video.bounds)"
      controls
      muted
      playsinline
      preload="metadata"
      aria-label="GitHub Copilot coding agent demonstration"
      @click.stop
      @keydown.stop
    >
      <source :src="recording" type="video/mp4" />
    </video>
  </div>
</template>

<style scoped>
.native-ai-slide {
  position: absolute;
  inset: 0;
  z-index: 3;
  background: #22244e;
}
.native-ai-scene {
  display: block;
  width: 100%;
  height: 100%;
}
.native-ai-slide :deep(text) {
  user-select: text;
}
.native-ai-video {
  position: absolute;
}
.native-ai-video {
  object-fit: contain;
  background: black;
}
</style>
