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
    <g v-show="visible(19, [9])" data-shape="19">
      <svg
        x="73.2554"
        y="67.0883"
        width="204.682"
        height="444.3756"
        viewBox="0 0 204.682 444.3756"
        overflow="hidden"
      >
        <image
          :href="asset('image22.jpeg')"
          x="0"
          y="0"
          width="204.682"
          height="444.3756"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(3, [9])" data-shape="3">
      <svg
        x="42.2379"
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

    <g v-show="visible(23, [2, 8])" data-shape="23">
      <svg
        x="371.9217"
        y="67.0884"
        width="204.682"
        height="444.3755"
        viewBox="0 0 204.682 444.3755"
        overflow="hidden"
      >
        <image
          :href="asset('image24.jpeg')"
          x="0"
          y="0"
          width="204.682"
          height="444.3755"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(5, [2, 8])" data-shape="5">
      <svg
        x="343.3992"
        y="28.1739"
        width="263.8876"
        height="496.1738"
        viewBox="0 0 263.8876 496.1738"
        overflow="hidden"
      >
        <image
          :href="asset('image23.webp')"
          x="-497.6791"
          y="5.8436"
          width="1259.2458"
          height="516.6755"
          preserveAspectRatio="none"
        />
      </svg>
    </g>

    <g v-show="visible(21, [4, 7])" data-shape="21">
      <svg
        x="674.1633"
        y="67.0884"
        width="204.682"
        height="444.3755"
        viewBox="0 0 204.682 444.3755"
        overflow="hidden"
      >
        <image
          :href="asset('image25.jpeg')"
          x="0"
          y="0"
          width="204.682"
          height="444.3755"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(6, [4, 7])" data-shape="6">
      <svg
        x="644.5606"
        y="28.1739"
        width="263.8876"
        height="496.1738"
        viewBox="0 0 263.8876 496.1738"
        overflow="hidden"
      >
        <image
          :href="asset('image23.webp')"
          x="-497.6791"
          y="5.8436"
          width="1259.2458"
          height="516.6755"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
  </svg>
</template>
