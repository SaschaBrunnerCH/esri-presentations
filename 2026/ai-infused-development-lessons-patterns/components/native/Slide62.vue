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
      <filter id="ai-62-image-effects-1" color-interpolation-filters="sRGB">
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncR type="table" tableValues="0 1" />
          <feFuncG type="table" tableValues="0.215294 1" />
          <feFuncB type="table" tableValues="0.342353 1" />
        </feComponentTransfer>
      </filter>
      <linearGradient id="ai-62-3-fill" x1="0%" y1="50%" x2="100%" y2="50%">
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
    <g v-show="visible(3, [])" data-shape="3">
      <rect
        x="0"
        y="0"
        width="960"
        height="540"
        rx="0"
        fill="url(#ai-62-3-fill)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(4, [])" data-shape="4">
      <svg
        x="383.1336"
        y="0"
        width="576.8664"
        height="538.9409"
        viewBox="0 0 576.8664 538.9409"
        overflow="hidden"
      >
        <image
          opacity="0.15"
          filter="url(#ai-62-image-effects-1)"
          :href="asset('image8.webp')"
          x="0"
          y="0"
          width="576.8664"
          height="538.9409"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
  </svg>
</template>
