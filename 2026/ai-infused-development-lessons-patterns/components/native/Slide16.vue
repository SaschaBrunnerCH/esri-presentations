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

    <g v-show="visible(304, [])" data-shape="304">
      <rect
        x="228"
        y="170"
        width="322"
        height="112"
        rx="6.72"
        fill="rgba(255, 255, 255, 0.12)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(305, [])" data-shape="305">
      <rect
        x="242"
        y="182"
        width="70"
        height="32"
        rx="9.6"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(306, [])" data-shape="306">
      <rect
        x="320"
        y="182"
        width="47"
        height="32"
        rx="9.6"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(307, [])" data-shape="307">
      <rect
        x="375"
        y="182"
        width="70"
        height="32"
        rx="9.6"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(308, [])" data-shape="308">
      <rect
        x="453"
        y="182"
        width="54"
        height="32"
        rx="9.6"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(310, [])" data-shape="310">
      <rect
        x="566"
        y="170"
        width="322"
        height="112"
        rx="6.72"
        fill="rgba(255, 255, 255, 0.12)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(311, [])" data-shape="311">
      <rect
        x="580"
        y="182"
        width="54"
        height="32"
        rx="9.6"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(312, [])" data-shape="312">
      <rect
        x="642"
        y="182"
        width="85"
        height="32"
        rx="9.6"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(313, [])" data-shape="313">
      <rect
        x="735"
        y="182"
        width="47"
        height="32"
        rx="9.6"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(314, [])" data-shape="314">
      <rect
        x="790"
        y="182"
        width="54"
        height="32"
        rx="9.6"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(315, [])" data-shape="315">
      <rect
        x="580"
        y="222"
        width="77"
        height="32"
        rx="9.6"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(316, [])" data-shape="316">
      <rect
        x="665"
        y="222"
        width="77"
        height="32"
        rx="9.6"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(318, [])" data-shape="318">
      <rect
        x="228"
        y="334"
        width="322"
        height="120"
        rx="7.2"
        fill="rgba(255, 255, 255, 0.12)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(319, [])" data-shape="319">
      <rect
        x="242"
        y="346"
        width="108"
        height="32"
        rx="9.6"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(320, [])" data-shape="320">
      <rect
        x="358"
        y="346"
        width="70"
        height="32"
        rx="9.6"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(321, [])" data-shape="321">
      <rect
        x="242"
        y="386"
        width="130"
        height="32"
        rx="9.6"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(322, [])" data-shape="322">
      <rect
        x="380"
        y="386"
        width="54"
        height="32"
        rx="9.6"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(324, [])" data-shape="324">
      <rect
        x="566"
        y="334"
        width="322"
        height="120"
        rx="7.2"
        fill="rgba(255, 255, 255, 0.12)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(325, [])" data-shape="325">
      <rect
        x="580"
        y="346"
        width="85"
        height="32"
        rx="9.6"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(326, [])" data-shape="326">
      <rect
        x="673"
        y="346"
        width="92"
        height="32"
        rx="9.6"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(327, [])" data-shape="327">
      <rect
        x="773"
        y="346"
        width="100"
        height="32"
        rx="9.6"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(328, [])" data-shape="328">
      <rect
        x="580"
        y="386"
        width="62"
        height="32"
        rx="9.6"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(329, [])" data-shape="329">
      <rect
        x="650"
        y="386"
        width="39"
        height="32"
        rx="9.6"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(330, [])" data-shape="330">
      <rect
        x="697"
        y="386"
        width="62"
        height="32"
        rx="9.6"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(335, [])" data-shape="335">
      <rect
        x="228"
        y="472"
        width="28"
        height="16"
        rx="4.8"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="#35AC46"
        stroke-width="2"
      />
    </g>

    <g v-show="visible(337, [])" data-shape="337">
      <rect
        x="566"
        y="472"
        width="28"
        height="16"
        rx="4.8"
        fill="rgba(255, 255, 255, 0.18)"
        stroke="#F89927"
        stroke-width="2"
      />
    </g>

    <g v-show="visible(400, [])" data-shape="400">
      <rect
        x="242"
        y="346"
        width="108"
        height="32"
        rx="9.6"
        fill="none"
        stroke="#F89927"
        stroke-width="2"
      />
    </g>
    <g v-show="visible(401, [])" data-shape="401">
      <rect
        x="358"
        y="346"
        width="70"
        height="32"
        rx="9.6"
        fill="none"
        stroke="#35AC46"
        stroke-width="2"
      />
    </g>
    <g v-show="visible(402, [])" data-shape="402">
      <rect
        x="242"
        y="386"
        width="130"
        height="32"
        rx="9.6"
        fill="none"
        stroke="#35AC46"
        stroke-width="2"
      />
    </g>
    <g v-show="visible(403, [])" data-shape="403">
      <rect
        x="380"
        y="386"
        width="54"
        height="32"
        rx="9.6"
        fill="none"
        stroke="#35AC46"
        stroke-width="2"
      />
    </g>
    <g v-show="visible(404, [])" data-shape="404">
      <rect
        x="580"
        y="346"
        width="85"
        height="32"
        rx="9.6"
        fill="none"
        stroke="#35AC46"
        stroke-width="2"
      />
    </g>
    <g v-show="visible(405, [])" data-shape="405">
      <rect
        x="673"
        y="346"
        width="92"
        height="32"
        rx="9.6"
        fill="none"
        stroke="#F89927"
        stroke-width="2"
      />
    </g>
    <g v-show="visible(406, [])" data-shape="406">
      <rect
        x="773"
        y="346"
        width="100"
        height="32"
        rx="9.6"
        fill="none"
        stroke="#F89927"
        stroke-width="2"
      />
    </g>
    <g v-show="visible(407, [])" data-shape="407">
      <rect
        x="580"
        y="386"
        width="62"
        height="32"
        rx="9.6"
        fill="none"
        stroke="#35AC46"
        stroke-width="2"
      />
    </g>
    <g v-show="visible(408, [])" data-shape="408">
      <rect
        x="650"
        y="386"
        width="39"
        height="32"
        rx="9.6"
        fill="none"
        stroke="#35AC46"
        stroke-width="2"
      />
    </g>
    <g v-show="visible(409, [])" data-shape="409">
      <rect
        x="697"
        y="386"
        width="62"
        height="32"
        rx="9.6"
        fill="none"
        stroke="#35AC46"
        stroke-width="2"
      />
    </g>
    <g v-show="visible(420, [])" data-shape="420">
      <rect
        x="242"
        y="182"
        width="70"
        height="32"
        rx="9.6"
        fill="none"
        stroke="#F89927"
        stroke-width="2"
      />
    </g>
    <g v-show="visible(421, [])" data-shape="421">
      <rect
        x="320"
        y="182"
        width="47"
        height="32"
        rx="9.6"
        fill="none"
        stroke="#F89927"
        stroke-width="2"
      />
    </g>
    <g v-show="visible(422, [])" data-shape="422">
      <rect
        x="375"
        y="182"
        width="70"
        height="32"
        rx="9.6"
        fill="none"
        stroke="#F89927"
        stroke-width="2"
      />
    </g>
  </svg>
</template>
