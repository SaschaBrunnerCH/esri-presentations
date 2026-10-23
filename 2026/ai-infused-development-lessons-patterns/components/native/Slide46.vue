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

    <g v-show="visible(20, [])" data-shape="20">
      <rect
        x="72"
        y="160"
        width="256"
        height="340"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(21, [])" data-shape="21">
      <rect
        x="352"
        y="160"
        width="256"
        height="340"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(22, [])" data-shape="22">
      <rect
        x="632"
        y="160"
        width="256"
        height="340"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(30, [])" data-shape="30">
      <rect
        x="646"
        y="400"
        width="228"
        height="80"
        rx="0"
        fill="rgba(0, 185, 242, 0.18)"
        stroke="#00B9F2"
        stroke-width="1.5"
      />
    </g>
    <g v-show="visible(31, [])" data-shape="31">
      <svg
        x="86"
        y="174"
        width="44"
        height="44"
        viewBox="0 0 44 44"
        overflow="hidden"
      >
        <image
          :href="asset('image63.svg')"
          x="0"
          y="0"
          width="44"
          height="44"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(32, [])" data-shape="32">
      <svg
        x="366"
        y="174"
        width="44"
        height="44"
        viewBox="0 0 44 44"
        overflow="hidden"
      >
        <image
          :href="asset('image55.svg')"
          x="0"
          y="0"
          width="44"
          height="44"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(33, [])" data-shape="33">
      <svg
        x="646"
        y="174"
        width="44"
        height="44"
        viewBox="0 0 44 44"
        overflow="hidden"
      >
        <image
          :href="asset('image56.svg')"
          x="0"
          y="0"
          width="44"
          height="44"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
  </svg>
</template>
