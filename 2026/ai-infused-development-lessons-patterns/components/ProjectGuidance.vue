<template>
  <svg
    class="native-diagram native-guidance"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 260"
    role="img"
    aria-labelledby="guidance-title guidance-desc"
  >
    <title id="guidance-title">
      Documentation informs implementation and is checked against the running
      app
    </title>
    <desc id="guidance-desc">
      Current developer and user docs are found for a task and updated with
      implementation. Following the guide in the app can reveal mistakes in the
      docs or software.
    </desc>
    <defs>
      <marker
        id="guidance-arrow"
        markerWidth="12"
        markerHeight="10"
        refX="10"
        refY="5"
        orient="auto"
      >
        <path d="M0 0 L12 5 L0 10 Z" fill="#91c9ef" />
      </marker>
      <marker
        id="guidance-focus-arrow"
        markerWidth="12"
        markerHeight="10"
        refX="10"
        refY="5"
        orient="auto"
      >
        <path d="M0 0 L12 5 L0 10 Z" fill="#54e2d1" />
      </marker>
      <marker
        id="guidance-return-arrow"
        markerWidth="12"
        markerHeight="10"
        refX="10"
        refY="5"
        orient="auto"
      >
        <path d="M0 0 L12 5 L0 10 Z" fill="#f8c879" />
      </marker>
    </defs>
    <g v-click="1" class="guidance-reveal">
      <rect
        x="16"
        y="41"
        width="230"
        height="156"
        rx="15"
        fill="#0b2339"
        stroke="#8fc7ff"
        stroke-width="2"
      />
      <text
        x="38"
        y="77"
        fill="#8fc7ff"
        font-family="Arial, sans-serif"
        font-size="16px"
        font-weight="700"
        letter-spacing="1.5"
      >
        WRITE
      </text>
      <text
        x="38"
        y="115"
        fill="#ffffff"
        font-family="Arial, sans-serif"
        font-size="27px"
        font-weight="700"
      >
        Current docs
      </text>
      <text
        x="38"
        y="150"
        fill="#c9e4f5"
        font-family="Arial, sans-serif"
        font-size="17px"
      >
        design · user steps
      </text>
      <text
        x="38"
        y="176"
        fill="#c9e4f5"
        font-family="Arial, sans-serif"
        font-size="17px"
      >
        expected results
      </text>
    </g>
    <g v-click="2" class="guidance-reveal">
      <path
        d="M246 118 H300"
        fill="none"
        stroke="#91c9ef"
        stroke-width="3"
        marker-end="url(#guidance-arrow)"
      />
      <rect
        x="310"
        y="41"
        width="250"
        height="156"
        rx="15"
        fill="#103a45"
        stroke="#54e2d1"
        stroke-width="3"
      />
      <text
        x="333"
        y="77"
        fill="#54e2d1"
        font-family="Arial, sans-serif"
        font-size="16px"
        font-weight="700"
        letter-spacing="1.5"
      >
        FIND
      </text>
      <text
        x="333"
        y="115"
        fill="#ffffff"
        font-family="Arial, sans-serif"
        font-size="25px"
        font-weight="700"
      >
        Docs for this task
      </text>
      <text
        x="333"
        y="150"
        fill="#c9e4f5"
        font-family="Arial, sans-serif"
        font-size="17px"
      >
        code · rules · examples
      </text>
    </g>
    <g v-click="3" class="guidance-reveal">
      <path
        d="M560 118 H610 Q618 118 618 110 V67 Q618 59 626 59 H665"
        fill="none"
        stroke="#54e2d1"
        stroke-width="3"
        marker-end="url(#guidance-focus-arrow)"
      />
      <rect
        x="676"
        y="20"
        width="300"
        height="83"
        rx="15"
        fill="#0b2339"
        stroke="#54e2d1"
        stroke-width="2"
      />
      <text
        x="698"
        y="52"
        fill="#54e2d1"
        font-family="Arial, sans-serif"
        font-size="15px"
        font-weight="700"
        letter-spacing="1.2"
      >
        USE
      </text>
      <text
        x="698"
        y="82"
        fill="#ffffff"
        font-family="Arial, sans-serif"
        font-size="23px"
        font-weight="700"
      >
        Implement + document
      </text>
    </g>
    <g v-click="4" class="guidance-reveal">
      <path
        d="M560 118 H610 Q618 118 618 126 V183 Q618 191 626 191 H665"
        fill="none"
        stroke="#54e2d1"
        stroke-width="3"
        marker-end="url(#guidance-focus-arrow)"
      />
      <rect
        x="676"
        y="149"
        width="300"
        height="83"
        rx="15"
        fill="#0b2339"
        stroke="#f8c879"
        stroke-width="2"
      />
      <text
        x="698"
        y="181"
        fill="#f8c879"
        font-family="Arial, sans-serif"
        font-size="15px"
        font-weight="700"
        letter-spacing="1.2"
      >
        VERIFY
      </text>
      <text
        x="698"
        y="211"
        fill="#ffffff"
        font-family="Arial, sans-serif"
        font-size="23px"
        font-weight="700"
      >
        Follow the guide
      </text>
    </g>
    <g v-click="5" class="guidance-reveal">
      <path
        d="M836 235 V248 H113 Q105 248 105 240 V198"
        fill="none"
        stroke="#f8c879"
        stroke-width="2.5"
        marker-end="url(#guidance-return-arrow)"
      />
      <rect x="381" y="228" width="316" height="25" rx="5" fill="#102639" />
      <text
        x="392"
        y="246"
        fill="#f8c879"
        font-family="Arial, sans-serif"
        font-size="16px"
        font-weight="700"
      >
        FIX THE GUIDE OR THE SOFTWARE
      </text>
    </g>
  </svg>
</template>
