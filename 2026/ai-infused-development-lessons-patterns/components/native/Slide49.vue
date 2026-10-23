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
    <defs></defs>
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

    <g v-show="visible(103, [])" data-shape="103">
      <rect
        x="352"
        y="184"
        width="256"
        height="258"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>

    <g v-show="visible(105, [])" data-shape="105">
      <rect
        x="72"
        y="184"
        width="256"
        height="258"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(106, [])" data-shape="106">
      <rect
        x="72"
        y="468"
        width="816"
        height="34"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#00B9F2"
        stroke-width="2"
      />
    </g>

    <g v-show="visible(3, [])" data-shape="3">
      <rect
        x="632"
        y="184"
        width="256"
        height="258"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>
  </svg>
</template>
