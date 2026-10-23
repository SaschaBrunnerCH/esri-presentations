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

    <g v-show="visible(44, [])" data-shape="44">
      <rect
        x="72"
        y="160"
        width="189"
        height="140"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(45, [])" data-shape="45">
      <rect
        x="281"
        y="160"
        width="189"
        height="140"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(46, [])" data-shape="46">
      <rect
        x="490"
        y="160"
        width="189"
        height="140"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(47, [])" data-shape="47">
      <rect
        x="699"
        y="160"
        width="189"
        height="140"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(48, [])" data-shape="48">
      <rect
        x="72"
        y="320"
        width="189"
        height="140"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(49, [])" data-shape="49">
      <rect
        x="281"
        y="320"
        width="189"
        height="140"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(50, [])" data-shape="50">
      <rect
        x="490"
        y="320"
        width="189"
        height="140"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(51, [])" data-shape="51">
      <rect
        x="699"
        y="320"
        width="189"
        height="140"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#00B9F2"
        stroke-width="2"
      />
    </g>
    <g v-show="visible(53, [])" data-shape="53">
      <svg
        x="86"
        y="174"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        overflow="hidden"
      >
        <image
          :href="asset('image50.svg')"
          x="0"
          y="0"
          width="38"
          height="38"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(54, [])" data-shape="54">
      <svg
        x="295"
        y="174"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        overflow="hidden"
      >
        <image
          :href="asset('image51.svg')"
          x="0"
          y="0"
          width="38"
          height="38"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(55, [])" data-shape="55">
      <svg
        x="504"
        y="174"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        overflow="hidden"
      >
        <image
          :href="asset('image52.svg')"
          x="0"
          y="0"
          width="38"
          height="38"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(56, [])" data-shape="56">
      <svg
        x="86"
        y="334"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        overflow="hidden"
      >
        <image
          :href="asset('image53.svg')"
          x="0"
          y="0"
          width="38"
          height="38"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(57, [])" data-shape="57">
      <svg
        x="295"
        y="334"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        overflow="hidden"
      >
        <image
          :href="asset('image54.svg')"
          x="0"
          y="0"
          width="38"
          height="38"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(58, [])" data-shape="58">
      <svg
        x="504"
        y="334"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        overflow="hidden"
      >
        <image
          :href="asset('image55.svg')"
          x="0"
          y="0"
          width="38"
          height="38"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(59, [])" data-shape="59">
      <svg
        x="713"
        y="334"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        overflow="hidden"
      >
        <image
          :href="asset('image56.svg')"
          x="0"
          y="0"
          width="38"
          height="38"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(60, [])" data-shape="60">
      <svg
        x="713"
        y="174"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        overflow="hidden"
      >
        <image
          :href="asset('image57.svg')"
          x="0"
          y="0"
          width="38"
          height="38"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
  </svg>
</template>
