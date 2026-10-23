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

    <g v-show="visible(600, [])" data-shape="600">
      <rect
        x="72"
        y="130"
        width="560"
        height="376"
        rx="11.28"
        fill="rgba(11, 18, 32, 0.88)"
        stroke="rgba(255, 255, 255, 0.3)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(601, [])" data-shape="601">
      <rect
        x="73"
        y="131"
        width="558"
        height="22"
        rx="0"
        fill="rgba(255, 255, 255, 0.1)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(602, [])" data-shape="602">
      <ellipse
        cx="87.5"
        cy="142.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(603, [])" data-shape="603">
      <ellipse
        cx="100.5"
        cy="142.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(604, [])" data-shape="604">
      <ellipse
        cx="113.5"
        cy="142.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(606, [])" data-shape="606">
      <rect
        x="82"
        y="162"
        width="540"
        height="284"
        rx="8.52"
        fill="none"
        stroke="rgba(255, 255, 255, 0.35)"
        stroke-width="1"
      />
    </g>

    <g v-show="visible(609, [])" data-shape="609">
      <ellipse
        cx="659"
        cy="181"
        rx="11"
        ry="11"
        fill="#00B9F2"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(612, [])" data-shape="612">
      <ellipse
        cx="659"
        cy="243"
        rx="11"
        ry="11"
        fill="#00B9F2"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(615, [])" data-shape="615">
      <ellipse
        cx="659"
        cy="289"
        rx="11"
        ry="11"
        fill="#00B9F2"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(618, [])" data-shape="618">
      <ellipse
        cx="659"
        cy="351"
        rx="11"
        ry="11"
        fill="#00B9F2"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(621, [])" data-shape="621">
      <ellipse
        cx="659"
        cy="429"
        rx="11"
        ry="11"
        fill="#F89927"
        stroke="none"
        stroke-width="0"
      />
    </g>
  </svg>
</template>
