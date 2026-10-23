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

    <g v-show="visible(100, [])" data-shape="100">
      <rect
        x="72"
        y="132"
        width="816"
        height="366"
        rx="10.98"
        fill="none"
        stroke="#00B9F2"
        stroke-width="1.75"
      />
    </g>

    <g v-show="visible(102, [])" data-shape="102">
      <rect
        x="92"
        y="176"
        width="776"
        height="304"
        rx="9.12"
        fill="rgba(255, 255, 255, 0.08)"
        stroke="rgba(255, 255, 255, 0.55)"
        stroke-width="1"
        stroke-dasharray="5 4"
      />
    </g>

    <g v-show="visible(110, [])" data-shape="110">
      <rect
        x="112"
        y="228"
        width="262"
        height="228"
        rx="11.4"
        fill="rgba(255, 255, 255, 0.12)"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(112, [])" data-shape="112">
      <rect
        x="126"
        y="268"
        width="234"
        height="72"
        rx="8.64"
        fill="none"
        stroke="#FFFF00"
        stroke-width="1"
      />
    </g>

    <g v-show="visible(114, [])" data-shape="114">
      <polygon
        points="382,337.5 401,337.5 401,331 414,344 401,357 401,350.5 382,350.5"
        fill="rgba(255, 255, 255, 0.6)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(115, [])" data-shape="115">
      <polygon
        points="610,337.5 629,337.5 629,331 642,344 629,357 629,350.5 610,350.5"
        fill="rgba(255, 255, 255, 0.6)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(116, [])" data-shape="116">
      <rect
        x="422"
        y="260"
        width="180"
        height="170"
        rx="13.6"
        fill="#005E95"
        stroke="#00B9F2"
        stroke-width="1"
      />
    </g>

    <g v-show="visible(118, [])" data-shape="118">
      <rect
        x="650"
        y="264"
        width="202"
        height="36"
        rx="7.2"
        fill="rgba(255, 255, 255, 0.15)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(119, [])" data-shape="119">
      <rect
        x="650"
        y="310"
        width="202"
        height="36"
        rx="7.2"
        fill="rgba(255, 255, 255, 0.15)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(120, [])" data-shape="120">
      <rect
        x="650"
        y="356"
        width="202"
        height="36"
        rx="7.2"
        fill="rgba(255, 255, 255, 0.15)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(121, [])" data-shape="121">
      <rect
        x="650"
        y="402"
        width="202"
        height="36"
        rx="7.2"
        fill="rgba(255, 255, 255, 0.15)"
        stroke="none"
        stroke-width="0"
      />
    </g>
  </svg>
</template>
