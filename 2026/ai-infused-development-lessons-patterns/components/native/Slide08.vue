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

    <g v-show="visible(17, [])" data-shape="17">
      <svg
        x="194.2785"
        y="156.5913"
        width="571.4429"
        height="321.4365"
        viewBox="0 0 571.4429 321.4365"
        overflow="hidden"
      >
        <image
          :href="asset('image18.webp')"
          x="0"
          y="0"
          width="571.4429"
          height="321.4365"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
  </svg>
</template>
