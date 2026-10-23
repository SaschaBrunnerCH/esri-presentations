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

    <g v-show="visible(4, [])" data-shape="4">
      <svg
        x="709.14"
        y="160.1959"
        width="177.2866"
        height="177.2866"
        viewBox="0 0 177.2866 177.2866"
        overflow="hidden"
      >
        <image
          :href="asset('image64.webp')"
          x="-56.2386"
          y="-0"
          width="260.0387"
          height="260.0387"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
  </svg>
</template>
