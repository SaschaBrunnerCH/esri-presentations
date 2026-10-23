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

    <g v-show="visible(34, [])" data-shape="34">
      <rect
        x="72"
        y="160"
        width="146"
        height="220"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#00B9F2"
        stroke-width="2"
      />
    </g>
    <g v-show="visible(35, [])" data-shape="35">
      <rect
        x="239.5"
        y="160"
        width="146"
        height="220"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(36, [])" data-shape="36">
      <rect
        x="407"
        y="160"
        width="146"
        height="220"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(37, [])" data-shape="37">
      <rect
        x="574.5"
        y="160"
        width="146"
        height="220"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(38, [])" data-shape="38">
      <rect
        x="742"
        y="160"
        width="146"
        height="220"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#00B9F2"
        stroke-width="2"
      />
    </g>
  </svg>
</template>
