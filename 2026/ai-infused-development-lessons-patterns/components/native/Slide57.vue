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
      <filter id="ai-57-image-effects-1" color-interpolation-filters="sRGB">
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncR type="table" tableValues="0 0.421961" />
          <feFuncG type="table" tableValues="0 0.86385" />
          <feFuncB type="table" tableValues="0 1" />
        </feComponentTransfer>
      </filter>
      <linearGradient id="ai-57-2-fill" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stop-color="#22244E" />
        <stop offset="50%" stop-color="#242677" />
        <stop offset="99%" stop-color="#206161" />
      </linearGradient>
    </defs>
    <svg
      x="0"
      y="0"
      width="960"
      height="540"
      viewBox="0 0 960 540"
      overflow="hidden"
    >
      <image
        :href="asset('image2.webp')"
        x="-0"
        y="-0"
        width="960"
        height="540"
        preserveAspectRatio="none"
      />
    </svg>
    <g v-show="visible(2, [])" data-shape="2">
      <rect
        x="0"
        y="0"
        width="960"
        height="540"
        rx="0"
        fill="url(#ai-57-2-fill)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(11, [])" data-shape="11">
      <svg
        x="0"
        y="0"
        width="411.6641"
        height="415.5665"
        viewBox="0 0 411.6641 415.5665"
        overflow="hidden"
      >
        <image
          opacity="0.3"
          filter="url(#ai-57-image-effects-1)"
          :href="asset('image14.webp')"
          x="-6.596"
          y="-6.1786"
          width="418.2601"
          height="421.7451"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
  </svg>
</template>
