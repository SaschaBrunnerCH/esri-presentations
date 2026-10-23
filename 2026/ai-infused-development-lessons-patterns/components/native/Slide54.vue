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
      <filter id="ai-54-image-effects-1" color-interpolation-filters="sRGB">
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncR type="table" tableValues="0 0.421961" />
          <feFuncG type="table" tableValues="0 0.86385" />
          <feFuncB type="table" tableValues="0 1" />
        </feComponentTransfer>
      </filter>
      <linearGradient
        id="ai-54-background"
        x1="85.3553%"
        y1="14.6447%"
        x2="14.6447%"
        y2="85.3553%"
      >
        <stop offset="75%" stop-color="#0C4799" />
        <stop offset="10%" stop-color="#008BDD" />
      </linearGradient>
      <linearGradient id="ai-54-12-fill" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stop-color="#173248" />
        <stop offset="100%" stop-color="#3C8B8E" />
        <stop offset="61%" stop-color="#1E5B5B" />
      </linearGradient>
    </defs>
    <rect width="960" height="540" fill="url(#ai-54-background)" />
    <g v-show="visible(12, [])" data-shape="12">
      <rect
        x="0"
        y="0"
        width="960"
        height="540"
        rx="0"
        fill="url(#ai-54-12-fill)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(19, [])" data-shape="19">
      <svg
        x="435.9428"
        y="0"
        width="524.0572"
        height="540.747"
        viewBox="0 0 524.0572 540.747"
        overflow="hidden"
      >
        <image
          opacity="0.3"
          filter="url(#ai-54-image-effects-1)"
          :href="asset('image5.webp')"
          x="0"
          y="0"
          width="524.0572"
          height="540.747"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(21, [])" data-shape="21">
      <svg
        x="441.3182"
        y="0.8169"
        width="518.6818"
        height="539.1831"
        viewBox="0 0 518.6818 539.1831"
        overflow="hidden"
      >
        <image
          :href="asset('image17.webp')"
          x="0"
          y="0"
          width="518.6818"
          height="539.1831"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(29, [])" data-shape="29">
      <svg
        x="80.1256"
        y="374.915"
        width="26.6457"
        height="26.6457"
        viewBox="0 0 26.6457 26.6457"
        overflow="hidden"
      >
        <image
          :href="asset('image66.webp')"
          x="0"
          y="0"
          width="26.6457"
          height="26.6457"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(30, [])" data-shape="30">
      <svg
        x="79.9839"
        y="409.7909"
        width="26.9291"
        height="26.9291"
        viewBox="0 0 26.9291 26.9291"
        overflow="hidden"
      >
        <image
          :href="asset('image66.webp')"
          x="0"
          y="0"
          width="26.9291"
          height="26.9291"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(31, [])" data-shape="31">
      <svg
        x="80.1256"
        y="305.163"
        width="26.6457"
        height="26.6457"
        viewBox="0 0 26.6457 26.6457"
        overflow="hidden"
      >
        <image
          :href="asset('image67.webp')"
          x="0"
          y="0"
          width="26.6457"
          height="26.6457"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(38, [])" data-shape="38">
      <ellipse
        cx="93.4484"
        cy="353.3618"
        rx="13.3228"
        ry="13.3228"
        fill="#35AC46"
        stroke="rgba(255, 255, 255, 0.4196)"
        stroke-width="1.5"
      />
    </g>
    <g v-show="visible(40, [])" data-shape="40">
      <svg
        x="79.9839"
        y="444.9502"
        width="26.9291"
        height="26.9291"
        viewBox="0 0 26.9291 26.9291"
        overflow="hidden"
      >
        <image
          :href="asset('image69.webp')"
          x="0"
          y="0"
          width="26.9291"
          height="26.9291"
          preserveAspectRatio="none"
        />
      </svg>
    </g>

    <g v-show="visible(14, [])" data-shape="14">
      <svg
        x="80.1256"
        y="235.411"
        width="26.6457"
        height="26.6457"
        viewBox="0 0 26.6457 26.6457"
        overflow="hidden"
      >
        <image
          :href="asset('image70.webp')"
          x="0"
          y="0"
          width="26.6457"
          height="26.6457"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(16, [])" data-shape="16">
      <ellipse
        cx="93.4484"
        cy="214.2831"
        rx="12.8976"
        ry="12.8976"
        fill="none"
        stroke="none"
        stroke-width="0"
      />
      <svg
        x="80.5508"
        y="201.3854"
        width="25.7953"
        height="25.7953"
        viewBox="0 0 25.7953 25.7953"
        overflow="hidden"
      >
        <image
          :href="asset('image71.webp')"
          x="-4.7357"
          y="-3.811"
          width="34.055"
          height="34.6734"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(17, [])" data-shape="17">
      <ellipse
        cx="93.4484"
        cy="180.2575"
        rx="12.8976"
        ry="12.8976"
        fill="none"
        stroke="none"
        stroke-width="0"
      />
      <svg
        x="80.5508"
        y="167.3598"
        width="25.7953"
        height="25.7953"
        viewBox="0 0 25.7953 25.7953"
        overflow="hidden"
      >
        <image
          :href="asset('image71.webp')"
          x="-4.7357"
          y="-3.811"
          width="34.055"
          height="34.6734"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(18, [])" data-shape="18">
      <svg
        x="80.1256"
        y="270.287"
        width="26.6457"
        height="26.6457"
        viewBox="0 0 26.6457 26.6457"
        overflow="hidden"
      >
        <image
          :href="asset('image70.webp')"
          x="0"
          y="0"
          width="26.6457"
          height="26.6457"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
  </svg>
</template>
