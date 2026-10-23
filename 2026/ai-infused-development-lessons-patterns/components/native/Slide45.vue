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

    <g v-show="visible(10, [])" data-shape="10">
      <rect
        x="72"
        y="230"
        width="256"
        height="275"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#00B9F2"
        stroke-width="2"
      />
    </g>
    <g v-show="visible(11, [])" data-shape="11">
      <rect
        x="352"
        y="194"
        width="256"
        height="311"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(12, [])" data-shape="12">
      <rect
        x="632"
        y="158"
        width="256"
        height="347"
        rx="0"
        fill="rgba(0, 26, 61, 0.45)"
        stroke="#FFFFFF"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(13, [])" data-shape="13">
      <svg
        x="266"
        y="449"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        overflow="hidden"
      >
        <image
          :href="asset('image60.svg')"
          x="0"
          y="0"
          width="48"
          height="48"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(14, [])" data-shape="14">
      <svg
        x="546"
        y="449"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        overflow="hidden"
      >
        <image
          :href="asset('image61.svg')"
          x="0"
          y="0"
          width="48"
          height="48"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(15, [])" data-shape="15">
      <svg
        x="826"
        y="449"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        overflow="hidden"
      >
        <image
          :href="asset('image62.svg')"
          x="0"
          y="0"
          width="48"
          height="48"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
  </svg>
</template>
