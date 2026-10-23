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
        width="656"
        height="272"
        rx="8.16"
        fill="rgba(255, 255, 255, 0.08)"
        stroke="rgba(255, 255, 255, 0.55)"
        stroke-width="1"
        stroke-dasharray="5 4"
      />
    </g>
    <g v-show="visible(101, [])" data-shape="101">
      <rect
        x="88"
        y="166"
        width="170"
        height="226"
        rx="8.5"
        fill="rgba(255, 255, 255, 0.12)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(102, [])" data-shape="102" data-code="true">
      <rect
        x="98"
        y="202"
        width="150"
        height="134"
        rx="13.4"
        fill="none"
        stroke="#FFFF00"
        stroke-width="1"
      />
    </g>

    <g v-show="visible(104, [])" data-shape="104">
      <polygon
        points="261,276.5 272,276.5 272,271 283,282 272,293 272,287.5 261,287.5"
        fill="rgba(255, 255, 255, 0.6)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(105, [])" data-shape="105">
      <rect
        x="286"
        y="232"
        width="92"
        height="100"
        rx="7.36"
        fill="rgba(0, 94, 149, 0.7)"
        stroke="rgba(0, 185, 242, 0.5)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(106, [])" data-shape="106">
      <polygon
        points="381,276.5 392,276.5 392,271 403,282 392,293 392,287.5 381,287.5"
        fill="rgba(255, 255, 255, 0.6)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(107, [])" data-shape="107">
      <rect
        x="406"
        y="166"
        width="140"
        height="226"
        rx="7"
        fill="rgba(255, 255, 255, 0.12)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(108, [])" data-shape="108">
      <polygon
        points="549,276.5 560,276.5 560,271 571,282 560,293 560,287.5 549,287.5"
        fill="rgba(255, 255, 255, 0.6)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(109, [])" data-shape="109" data-code="true">
      <rect
        x="574"
        y="166"
        width="138"
        height="226"
        rx="6.9"
        fill="rgba(255, 255, 255, 0.12)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(110, [])" data-shape="110">
      <polygon
        points="716,282 727,271 727,276.5 745,276.5 745,271 756,282 745,293 745,287.5 727,287.5 727,293"
        fill="rgba(255, 255, 255, 0.6)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(111, [])" data-shape="111" data-code="true">
      <rect
        x="760"
        y="166"
        width="128"
        height="226"
        rx="6.4"
        fill="rgba(255, 255, 255, 0.12)"
        stroke="rgba(0, 185, 242, 0.6)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(112, [])" data-shape="112">
      <rect
        x="72"
        y="428"
        width="816"
        height="62"
        rx="7.44"
        fill="none"
        stroke="rgba(255, 255, 255, 0.45)"
        stroke-width="1"
        stroke-dasharray="5 4"
      />
    </g>
  </svg>
</template>
