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
      <rect
        x="72"
        y="150"
        width="270"
        height="226"
        rx="0"
        fill="none"
        stroke="#D9D9D9"
        stroke-width="1.5"
      />
      <svg
        x="72"
        y="150"
        width="270"
        height="226"
        viewBox="0 0 270 226"
        overflow="hidden"
      >
        <image
          :href="asset('image58.jpeg')"
          x="-23.043"
          y="-0.0023"
          width="403.6961"
          height="226.0045"
          preserveAspectRatio="none"
        />
      </svg>
    </g>

    <g v-show="visible(40, [])" data-shape="40">
      <rect
        x="366"
        y="150"
        width="251"
        height="126"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(41, [])" data-shape="41">
      <rect
        x="637"
        y="150"
        width="251"
        height="126"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#00B9F2"
        stroke-width="2"
      />
    </g>
    <g v-show="visible(42, [])" data-shape="42">
      <rect
        x="366"
        y="296"
        width="251"
        height="126"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(43, [])" data-shape="43">
      <rect
        x="637"
        y="296"
        width="251"
        height="126"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(50, [])" data-shape="50">
      <rect
        x="366"
        y="442"
        width="522"
        height="34"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>
  </svg>
</template>
