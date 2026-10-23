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
      <filter id="ai-1-image-effects-1" color-interpolation-filters="sRGB">
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncR type="table" tableValues="0 0.421961" />
          <feFuncG type="table" tableValues="0 0.86385" />
          <feFuncB type="table" tableValues="0 1" />
        </feComponentTransfer>
      </filter>
      <linearGradient
        id="ai-1-background"
        x1="85.3553%"
        y1="14.6447%"
        x2="14.6447%"
        y2="85.3553%"
      >
        <stop offset="75%" stop-color="#0C4799" />
        <stop offset="10%" stop-color="#008DDE" />
      </linearGradient>
      <linearGradient id="ai-1-4-fill" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stop-color="#22244E" />
        <stop offset="50%" stop-color="#242677" />
        <stop offset="99%" stop-color="#206161" />
      </linearGradient>
    </defs>
    <rect width="960" height="540" fill="url(#ai-1-background)" />
    <g v-show="visible(4, [])" data-shape="4">
      <rect
        x="0"
        y="0"
        width="960"
        height="540"
        rx="0"
        fill="url(#ai-1-4-fill)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(10, [])" data-shape="10">
      <svg
        x="435.9428"
        y="-0.747"
        width="524.0572"
        height="540.747"
        viewBox="0 0 524.0572 540.747"
        overflow="hidden"
      >
        <image
          opacity="0.3"
          filter="url(#ai-1-image-effects-1)"
          :href="asset('image5.webp')"
          x="0"
          y="0"
          width="524.0572"
          height="540.747"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(13, [])" data-shape="13">
      <svg
        x="532.9999"
        y="5.4094"
        width="427.0001"
        height="534.5906"
        viewBox="0 0 427.0001 534.5906"
        overflow="hidden"
      >
        <image
          :href="asset('image6.webp')"
          x="0"
          y="0"
          width="427.0001"
          height="534.5906"
          preserveAspectRatio="none"
        />
      </svg>
    </g>

    <g v-show="visible(7, [])" data-shape="7">
      <svg
        x="72"
        y="54.1098"
        width="136.3764"
        height="32.5443"
        viewBox="0 0 136.3764 32.5443"
        overflow="hidden"
      >
        <image
          opacity="0.5"
          :href="asset('image7.webp')"
          x="0"
          y="0"
          width="136.3764"
          height="32.5443"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
  </svg>
</template>
