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
      <filter id="ai-44-image-effects-1" color-interpolation-filters="sRGB">
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncR type="table" tableValues="0 0.421961" />
          <feFuncG type="table" tableValues="0 0.86385" />
          <feFuncB type="table" tableValues="0 1" />
        </feComponentTransfer>
      </filter>
      <linearGradient id="ai-44-background" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="55%" stop-color="#064D9E" />
        <stop offset="38%" stop-color="#064D9E" />
        <stop offset="100%" stop-color="#002859" />
        <stop offset="0%" stop-color="#002859" />
      </linearGradient>
      <linearGradient id="ai-44-3-fill" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stop-color="#173248" />
        <stop offset="100%" stop-color="#3C8B8E" />
        <stop offset="61%" stop-color="#1E5B5B" />
      </linearGradient>
    </defs>
    <rect width="960" height="540" fill="url(#ai-44-background)" />
    <g v-show="visible(3, [])" data-shape="3">
      <rect
        x="0"
        y="0"
        width="960"
        height="540"
        rx="0"
        fill="url(#ai-44-3-fill)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(5, [])" data-shape="5">
      <svg
        x="435.9428"
        y="0"
        width="524.0572"
        height="540.747"
        viewBox="0 0 524.0572 540.747"
        overflow="hidden"
      >
        <image
          opacity="0.3"
          filter="url(#ai-44-image-effects-1)"
          :href="asset('image5.webp')"
          x="0"
          y="0"
          width="524.0572"
          height="540.747"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(6, [])" data-shape="6">
      <svg
        x="441.3182"
        y="0.8169"
        width="518.6818"
        height="539.1831"
        viewBox="0 0 518.6818 539.1831"
        overflow="hidden"
      >
        <image
          :href="asset('image17.webp')"
          x="0"
          y="0"
          width="518.6818"
          height="539.1831"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
  </svg>
</template>
