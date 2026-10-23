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
    <defs>
      <marker
        id="ai-13-43-end"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="8"
        markerHeight="8"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 Z" fill="#FFFFFF" />
      </marker>
    </defs>
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

    <g v-show="visible(12, [2])" data-shape="12" data-code="true">
      <rect
        x="116.64"
        y="160.7312"
        width="109.9102"
        height="51.84"
        rx="0"
        fill="#ECECEC"
        stroke="rgba(255, 255, 255, 0)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(13, [2])" data-shape="13" data-code="true">
      <rect
        x="226.5502"
        y="160.7312"
        width="278.4393"
        height="51.84"
        rx="0"
        fill="#D2D2D2"
        stroke="rgba(255, 255, 255, 0)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(14, [2])" data-shape="14" data-code="true">
      <rect
        x="504.9896"
        y="160.7312"
        width="124.565"
        height="51.84"
        rx="0"
        fill="#ECECEC"
        stroke="rgba(255, 255, 255, 0)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(15, [2])" data-shape="15" data-code="true">
      <rect
        x="629.5546"
        y="160.7312"
        width="219.8205"
        height="51.84"
        rx="0"
        fill="#D2D2D2"
        stroke="rgba(255, 255, 255, 0)"
        stroke-width="1"
      />
    </g>

    <g v-show="visible(17, [3])" data-shape="17" data-code="true">
      <rect
        x="116.64"
        y="228.7712"
        width="131.8923"
        height="51.84"
        rx="0"
        fill="#ECECEC"
        stroke="rgba(255, 255, 255, 0)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(18, [3])" data-shape="18" data-code="true">
      <rect
        x="248.5323"
        y="228.7712"
        width="219.8205"
        height="51.84"
        rx="0"
        fill="#D2D2D2"
        stroke="rgba(255, 255, 255, 0)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(19, [3])" data-shape="19" data-code="true">
      <rect
        x="468.3528"
        y="228.7712"
        width="153.8743"
        height="51.84"
        rx="0"
        fill="#ECECEC"
        stroke="rgba(255, 255, 255, 0)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(20, [3])" data-shape="20" data-code="true">
      <rect
        x="622.2272"
        y="228.7712"
        width="227.1479"
        height="51.84"
        rx="0"
        fill="#D2D2D2"
        stroke="rgba(255, 255, 255, 0)"
        stroke-width="1"
      />
    </g>

    <g v-show="visible(22, [5])" data-shape="22" data-code="true">
      <rect
        x="116.64"
        y="296.3499"
        width="146.547"
        height="51.84"
        rx="0"
        fill="#ECECEC"
        stroke="rgba(255, 255, 255, 0)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(23, [5])" data-shape="23" data-code="true">
      <rect
        x="263.187"
        y="296.3499"
        width="175.8564"
        height="51.84"
        rx="0"
        fill="#D2D2D2"
        stroke="rgba(255, 255, 255, 0)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(24, [5])" data-shape="24" data-code="true">
      <rect
        x="439.0434"
        y="296.3499"
        width="153.8743"
        height="51.84"
        rx="0"
        fill="#ECECEC"
        stroke="rgba(255, 255, 255, 0)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(25, [5])" data-shape="25" data-code="true">
      <rect
        x="592.9178"
        y="296.3499"
        width="256.4572"
        height="51.84"
        rx="0"
        fill="#D2D2D2"
        stroke="rgba(255, 255, 255, 0)"
        stroke-width="1"
      />
    </g>

    <g v-show="visible(27, [6])" data-shape="27" data-code="true">
      <rect
        x="116.64"
        y="363.9627"
        width="146.547"
        height="51.84"
        rx="0"
        fill="#ECECEC"
        stroke="rgba(255, 255, 255, 0)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(28, [6])" data-shape="28" data-code="true">
      <rect
        x="263.187"
        y="363.9627"
        width="109.9102"
        height="51.84"
        rx="0"
        fill="#D2D2D2"
        stroke="rgba(255, 255, 255, 0)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(29, [6])" data-shape="29" data-code="true">
      <rect
        x="373.0972"
        y="363.9627"
        width="219.8205"
        height="51.84"
        rx="0"
        fill="#ECECEC"
        stroke="rgba(255, 255, 255, 0)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(30, [6])" data-shape="30" data-code="true">
      <rect
        x="592.9178"
        y="363.9627"
        width="256.4572"
        height="51.84"
        rx="0"
        fill="#D2D2D2"
        stroke="rgba(255, 255, 255, 0)"
        stroke-width="1"
      />
    </g>

    <g v-show="visible(32, [9])" data-shape="32" data-code="true">
      <rect
        x="116.64"
        y="432"
        width="153.8743"
        height="51.84"
        rx="0"
        fill="#ECECEC"
        stroke="rgba(255, 255, 255, 0)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(33, [9])" data-shape="33">
      <rect
        x="270.5143"
        y="432"
        width="58.6187"
        height="51.84"
        rx="0"
        fill="#D2D2D2"
        stroke="rgba(255, 255, 255, 0)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(34, [9])" data-shape="34" data-code="true">
      <rect
        x="329.1331"
        y="432"
        width="183.1838"
        height="51.84"
        rx="0"
        fill="#ECECEC"
        stroke="rgba(255, 255, 255, 0)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(35, [9])" data-shape="35" data-code="true">
      <rect
        x="512.3169"
        y="432"
        width="337.0581"
        height="51.84"
        rx="0"
        fill="#D2D2D2"
        stroke="rgba(255, 255, 255, 0)"
        stroke-width="1"
      />
    </g>

    <g v-show="visible(43, [10])" data-shape="43">
      <path
        d="M 299.8237 483.8401 Q 318.1421 483.8401 318.1421 512.4831"
        fill="none"
        stroke="#FFFFFF"
        stroke-width="2.25"
        stroke-dasharray="5 4"
        marker-end="url(#ai-13-43-end)"
        transform="rotate(180 308.9829 498.1616)"
      />
    </g>
  </svg>
</template>
