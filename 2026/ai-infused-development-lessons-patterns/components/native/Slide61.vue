<script setup>
defineProps({ visible: { type: Function, required: true } });
const asset = (name) =>
  `${import.meta.env.BASE_URL}media/ai-session/assets/${name}`;
</script>

<template>
  <svg
    class="native-ai-scene"
    viewBox="0 0 960 540"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ai-61-background" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="38%" stop-color="#064D9E" />
        <stop offset="55%" stop-color="#064D9E" />
        <stop offset="100%" stop-color="#002859" />
        <stop offset="0%" stop-color="#002859" />
      </linearGradient>
      <linearGradient id="ai-61-4-fill" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stop-color="#22244E" />
        <stop offset="50%" stop-color="#242677" />
        <stop offset="99%" stop-color="#206161" />
      </linearGradient>
    </defs>
    <rect width="960" height="540" fill="url(#ai-61-background)" />
    <g v-show="visible(4, [])" data-shape="4">
      <rect
        x="0"
        y="0"
        width="960"
        height="540"
        rx="0"
        fill="url(#ai-61-4-fill)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(13, [])" data-shape="13">
      <svg
        x="0"
        y="0"
        width="523.7594"
        height="540"
        viewBox="0 0 523.7594 540"
        overflow="hidden"
      >
        <image
          :href="asset('image74.webp')"
          x="0"
          y="0"
          width="523.7594"
          height="540"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
  </svg>
</template>
