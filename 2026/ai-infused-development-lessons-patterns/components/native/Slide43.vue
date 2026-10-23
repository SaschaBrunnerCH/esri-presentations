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

    <g v-show="visible(11, [])" data-shape="11">
      <svg
        x="74.782"
        y="127.0372"
        width="813.2179"
        height="372.4628"
        viewBox="0 0 813.2179 372.4628"
        overflow="hidden"
      >
        <image
          :href="asset('image59.webp')"
          x="0"
          y="0"
          width="813.2179"
          height="372.4628"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
  </svg>
</template>
