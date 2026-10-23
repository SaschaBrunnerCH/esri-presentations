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
      <filter id="ai-53-image-effects-1" color-interpolation-filters="sRGB">
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncR type="table" tableValues="0 1" />
          <feFuncG type="table" tableValues="0.215294 1" />
          <feFuncB type="table" tableValues="0.342353 1" />
        </feComponentTransfer>
      </filter>
      <linearGradient
        id="ai-53-background"
        x1="85.3553%"
        y1="14.6447%"
        x2="14.6447%"
        y2="85.3553%"
      >
        <stop offset="75%" stop-color="#0C4799" />
        <stop offset="10%" stop-color="#008BDD" />
      </linearGradient>
      <linearGradient id="ai-53-5-fill" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stop-color="#22244E" />
        <stop offset="50%" stop-color="#242677" />
        <stop offset="99%" stop-color="#206161" />
      </linearGradient>
      <linearGradient id="ai-53-18-fill" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="69%" stop-color="rgba(0, 120, 219, 0)" />
        <stop offset="0%" stop-color="rgba(0, 19, 113, 0.29)" />
      </linearGradient>
      <linearGradient id="ai-53-24-fill" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="100%" stop-color="#65ABE4" />
        <stop offset="0%" stop-color="rgba(101, 171, 228, 0)" />
      </linearGradient>
      <linearGradient id="ai-53-25-fill" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="100%" stop-color="#65ABE4" />
        <stop offset="0%" stop-color="rgba(101, 171, 228, 0)" />
      </linearGradient>
      <linearGradient id="ai-53-26-fill" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="100%" stop-color="#65ABE4" />
        <stop offset="0%" stop-color="rgba(101, 171, 228, 0)" />
      </linearGradient>
    </defs>
    <rect width="960" height="540" fill="url(#ai-53-background)" />
    <g v-show="visible(5, [])" data-shape="5">
      <rect
        x="0"
        y="0"
        width="960"
        height="540"
        rx="0"
        fill="url(#ai-53-5-fill)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(11, [])" data-shape="11">
      <svg
        x="383.1336"
        y="0"
        width="576.8664"
        height="538.9409"
        viewBox="0 0 576.8664 538.9409"
        overflow="hidden"
      >
        <image
          opacity="0.2"
          filter="url(#ai-53-image-effects-1)"
          :href="asset('image8.webp')"
          x="0"
          y="0"
          width="576.8664"
          height="538.9409"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(18, [])" data-shape="18">
      <ellipse
        cx="765.2216"
        cy="395.8153"
        rx="134.8191"
        ry="140.9089"
        fill="url(#ai-53-18-fill)"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(17, [3])" data-shape="17">
      <svg
        x="125.0223"
        y="190.9924"
        width="130.937"
        height="251.2324"
        viewBox="0 0 130.937 251.2324"
        overflow="hidden"
      >
        <image
          :href="asset('image9.jpeg')"
          x="-0"
          y="-0"
          width="130.937"
          height="251.2324"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(13, [3, 14])" data-shape="13">
      <path
        d="M125.0222 190.9924 L255.9869 190.9924 L255.9869 442.2247 L125.0222 442.2247 L125.0222 278 L210.9639 278 L210.9639 261.75 L125.0222 261.75 L125.0222 190.9924 Z"
        fill="rgba(0, 0, 0, 0.4536)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(45, [3, 14])" data-shape="45">
      <svg
        x="119.1208"
        y="178.1318"
        width="142.8161"
        height="276.8558"
        viewBox="0 0 142.8161 276.8558"
        overflow="hidden"
      >
        <image
          opacity="0.5"
          :href="asset('image10.svg')"
          x="-0"
          y="-0"
          width="142.8161"
          height="276.8558"
          preserveAspectRatio="none"
        />
      </svg>
    </g>

    <g v-show="visible(16, [22])" data-shape="16">
      <rect
        x="314.6816"
        y="398.8653"
        width="131.04"
        height="43.3594"
        rx="0"
        fill="#F2F3F7"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(15, [22])" data-shape="15">
      <svg
        x="314.6816"
        y="190.9924"
        width="131.04"
        height="246.1507"
        viewBox="0 0 131.04 246.1507"
        overflow="hidden"
      >
        <image
          :href="asset('image11.webp')"
          x="-0"
          y="-0"
          width="131.04"
          height="246.1507"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(20, [22])" data-shape="20">
      <path
        d="M314.6815 190.9924 L445.7215 190.9924 L445.7215 442.2247 L314.6815 442.2247 L314.6815 190.9924 Z M386.9166 300.2501 C383.5108 300.2501 380.7498 303.011 380.7498 306.4169 L380.7498 331.0833 C380.7498 334.4891 383.5108 337.2501 386.9166 337.2501 L438.8331 337.2501 C442.2389 337.2501 444.9998 334.4891 444.9998 331.0833 L444.9998 306.4169 C444.9998 303.011 442.2389 300.2501 438.8331 300.2501 L386.9166 300.2501 Z"
        fill="rgba(0, 0, 0, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(52, [22])" data-shape="52">
      <svg
        x="308.7935"
        y="178.1318"
        width="142.8161"
        height="276.8558"
        viewBox="0 0 142.8161 276.8558"
        overflow="hidden"
      >
        <image
          opacity="0.5"
          :href="asset('image10.svg')"
          x="-0"
          y="-0"
          width="142.8161"
          height="276.8558"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(24, [])" data-shape="24">
      <polygon
        points="240.75,260.3249 287.3133,260.3249 287.3133,250.783 306.3971,269.8667 287.3133,288.9505 287.3133,279.4086 240.75,279.4086"
        fill="url(#ai-53-24-fill)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(25, [])" data-shape="25">
      <polygon
        points="437.7687,312.7931 479.9401,312.7931 479.9401,303.2512 499.0239,322.3349 479.9401,341.4187 479.9401,331.8768 437.7687,331.8768"
        fill="url(#ai-53-25-fill)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(26, [])" data-shape="26">
      <polygon
        points="626.6514,229.7049 668.8229,229.7049 668.8229,220.163 687.9066,239.2467 668.8229,258.3305 668.8229,248.7886 626.6514,248.7886"
        fill="url(#ai-53-26-fill)"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(39, [56])" data-shape="39">
      <svg
        x="507.0519"
        y="190.9924"
        width="131.04"
        height="251.2324"
        viewBox="0 0 131.04 251.2324"
        overflow="hidden"
      >
        <image
          :href="asset('image12.webp')"
          x="-0"
          y="-0"
          width="131.04"
          height="251.2324"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(53, [56])" data-shape="53">
      <svg
        x="501.1639"
        y="178.1318"
        width="142.8161"
        height="276.8558"
        viewBox="0 0 142.8161 276.8558"
        overflow="hidden"
      >
        <image
          opacity="0.5"
          :href="asset('image10.svg')"
          x="-0"
          y="-0"
          width="142.8161"
          height="276.8558"
          preserveAspectRatio="none"
        />
      </svg>
    </g>

    <g v-show="visible(43, [55])" data-shape="43">
      <svg
        x="699.7294"
        y="190.9924"
        width="131.04"
        height="251.2324"
        viewBox="0 0 131.04 251.2324"
        overflow="hidden"
      >
        <image
          :href="asset('image13.webp')"
          x="-0"
          y="-0"
          width="131.04"
          height="251.2324"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
    <g v-show="visible(54, [55])" data-shape="54">
      <svg
        x="693.5343"
        y="178.1318"
        width="142.8161"
        height="276.8558"
        viewBox="0 0 142.8161 276.8558"
        overflow="hidden"
      >
        <image
          opacity="0.5"
          :href="asset('image10.svg')"
          x="-0"
          y="-0"
          width="142.8161"
          height="276.8558"
          preserveAspectRatio="none"
        />
      </svg>
    </g>
  </svg>
</template>
