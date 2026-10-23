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

    <g v-show="visible(5, [])" data-shape="5">
      <svg
        x="72"
        y="194.9998"
        width="237.4393"
        height="170.0136"
        viewBox="0 0 237.4393 170.0136"
        overflow="hidden"
      >
        <image
          :href="asset('image19.jpeg')"
          x="-31.1868"
          y="-0"
          width="302.1394"
          height="170.0136"
          preserveAspectRatio="none"
        />
      </svg>
    </g>

    <g v-show="visible(2, [3])" data-shape="2">
      <svg
        x="346.3361"
        y="194.9998"
        width="237.4393"
        height="173.5359"
        viewBox="0 0 237.4393 173.5359"
        overflow="hidden"
      >
        <image
          :href="asset('image20.jpeg')"
          x="-49.4978"
          y="-0"
          width="311.2284"
          height="173.5359"
          preserveAspectRatio="none"
        />
      </svg>
    </g>

    <g v-show="visible(7, [6])" data-shape="7">
      <svg
        x="620.6721"
        y="194.9998"
        width="237.4394"
        height="173.5359"
        viewBox="0 0 237.4394 173.5359"
        overflow="hidden"
      >
        <image
          :href="asset('image21.jpeg')"
          x="-104.625"
          y="-44.6737"
          width="372.3838"
          height="248.256"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
  </svg>
</template>
