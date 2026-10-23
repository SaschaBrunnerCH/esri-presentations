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
      <linearGradient
        id="ai-56-background"
        x1="85.3553%"
        y1="14.6447%"
        x2="14.6447%"
        y2="85.3553%"
      >
        <stop offset="75%" stop-color="#0C4799" />
        <stop offset="10%" stop-color="#008DDE" />
      </linearGradient>
      <linearGradient id="ai-56-2-fill" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stop-color="#22244E" />
        <stop offset="50%" stop-color="#242677" />
        <stop offset="99%" stop-color="#206161" />
      </linearGradient>
    </defs>
    <rect width="960" height="540" fill="url(#ai-56-background)" />
    <g v-show="visible(2, [])" data-shape="2">
      <rect
        x="0"
        y="0"
        width="960"
        height="540"
        rx="0"
        fill="url(#ai-56-2-fill)"
        stroke="none"
        stroke-width="0"
      />
    </g>
  </svg>
</template>
