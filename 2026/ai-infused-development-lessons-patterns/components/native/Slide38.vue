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

    <g v-show="visible(800, [])" data-shape="800">
      <rect
        x="72"
        y="226"
        width="180"
        height="136"
        rx="10.88"
        fill="rgba(255, 255, 255, 0.12)"
        stroke="#F89927"
        stroke-width="1.5"
      />
    </g>
    <g v-show="visible(801, [])" data-shape="801">
      <rect
        x="64"
        y="218"
        width="196"
        height="152"
        rx="12.16"
        fill="none"
        stroke="#F89927"
        stroke-width="3"
      />
    </g>

    <g v-show="visible(803, [])" data-shape="803">
      <rect
        x="708"
        y="226"
        width="180"
        height="136"
        rx="10.88"
        fill="rgba(255, 255, 255, 0.12)"
        stroke="#00B9F2"
        stroke-width="1.5"
      />
    </g>
    <g v-show="visible(804, [])" data-shape="804">
      <rect
        x="700"
        y="218"
        width="196"
        height="152"
        rx="12.16"
        fill="none"
        stroke="#00B9F2"
        stroke-width="3"
      />
    </g>

    <g v-show="visible(806, [])" data-shape="806">
      <rect
        x="272"
        y="132"
        width="416"
        height="320"
        rx="8"
        fill="rgba(11, 18, 32, 0.88)"
        stroke="rgba(255, 255, 255, 0.3)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(807, [])" data-shape="807">
      <rect
        x="273"
        y="133"
        width="414"
        height="22"
        rx="0"
        fill="rgba(255, 255, 255, 0.1)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(808, [])" data-shape="808">
      <ellipse
        cx="287.5"
        cy="144.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(809, [])" data-shape="809">
      <ellipse
        cx="300.5"
        cy="144.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(810, [])" data-shape="810">
      <ellipse
        cx="313.5"
        cy="144.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(818, [])" data-shape="818">
      <rect
        x="459.1"
        y="183"
        width="108.1"
        height="20"
        rx="3"
        fill="none"
        stroke="#FF6B6B"
        stroke-width="1.5"
      />
    </g>
    <g v-show="visible(819, [])" data-shape="819">
      <rect
        x="272"
        y="474"
        width="416"
        height="40"
        rx="8"
        fill="rgba(255, 255, 255, 0.12)"
        stroke="#FFFF00"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(820, [])" data-shape="820">
      <rect
        x="560"
        y="482"
        width="116"
        height="24"
        rx="12"
        fill="rgba(248, 153, 39, 0.25)"
        stroke="#F89927"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(821, [])" data-shape="821">
      <rect
        x="560"
        y="482"
        width="116"
        height="24"
        rx="12"
        fill="rgba(53, 172, 70, 0.25)"
        stroke="#35AC46"
        stroke-width="1"
      />
    </g>
  </svg>
</template>
