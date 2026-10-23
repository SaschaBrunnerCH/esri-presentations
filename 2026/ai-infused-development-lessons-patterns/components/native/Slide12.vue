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
    <g v-show="visible(29, [2, 28])" data-shape="29">
      <svg
        x="375.1231"
        y="66.9893"
        width="204.378"
        height="443.7154"
        viewBox="0 0 204.378 443.7154"
        overflow="hidden"
      >
        <image
          :href="asset('image26.jpeg')"
          x="0"
          y="0"
          width="204.378"
          height="443.7154"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(30, [2, 28])" data-shape="30">
      <svg
        x="345.2176"
        y="28.1739"
        width="264.189"
        height="496.7406"
        viewBox="0 0 264.189 496.7406"
        overflow="hidden"
      >
        <image
          :href="asset('image23.webp')"
          x="-498.2476"
          y="5.8503"
          width="1260.6842"
          height="517.2657"
          preserveAspectRatio="none"
        />
      </svg>
    </g>

    <g v-show="visible(32, [3, 31])" data-shape="32">
      <svg
        x="674.899"
        y="63.598"
        width="204.378"
        height="443.7154"
        viewBox="0 0 204.378 443.7154"
        overflow="hidden"
      >
        <image
          :href="asset('image27.jpeg')"
          x="0"
          y="0"
          width="204.378"
          height="443.7154"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(33, [3, 31])" data-shape="33">
      <svg
        x="644.5606"
        y="28.1739"
        width="264.189"
        height="496.7406"
        viewBox="0 0 264.189 496.7406"
        overflow="hidden"
      >
        <image
          :href="asset('image23.webp')"
          x="-498.2476"
          y="5.8503"
          width="1260.6842"
          height="517.2657"
          preserveAspectRatio="none"
        />
      </svg>
    </g>

    <g v-show="visible(49, [48])" data-shape="49">
      <svg
        x="72.0076"
        y="64.3807"
        width="204.378"
        height="443.7154"
        viewBox="0 0 204.378 443.7154"
        overflow="hidden"
      >
        <image
          :href="asset('image28.jpeg')"
          x="0"
          y="0"
          width="204.378"
          height="443.7154"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(50, [48])" data-shape="50">
      <svg
        x="42.9557"
        y="28.1739"
        width="264.189"
        height="496.7406"
        viewBox="0 0 264.189 496.7406"
        overflow="hidden"
      >
        <image
          :href="asset('image23.webp')"
          x="-498.2476"
          y="5.8503"
          width="1260.6842"
          height="517.2657"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
  </svg>
</template>
