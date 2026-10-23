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

    <g v-show="visible(6, [])" data-shape="6">
      <rect
        x="627.5833"
        y="162.9623"
        width="260.4167"
        height="146.4844"
        rx="24.4146"
        fill="none"
        stroke="#BFBFBF"
        stroke-width="1"
      />
      <svg
        x="627.5833"
        y="162.9623"
        width="260.4167"
        height="146.4844"
        viewBox="0 0 260.4167 146.4844"
        overflow="hidden"
      >
        <image
          :href="asset('image65.webp')"
          x="0"
          y="0"
          width="260.4167"
          height="146.4844"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
  </svg>
</template>
