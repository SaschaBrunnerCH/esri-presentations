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

    <g v-show="visible(400, [])" data-shape="400">
      <rect
        x="85"
        y="146"
        width="2"
        height="320"
        rx="0"
        fill="rgba(255, 255, 255, 0.35)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(401, [])" data-shape="401">
      <rect
        x="430"
        y="132"
        width="458"
        height="338"
        rx="13.52"
        fill="rgba(255, 255, 255, 0.08)"
        stroke="rgba(255, 255, 255, 0.2)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(402, [404])" data-shape="402">
      <ellipse
        cx="86"
        cy="151"
        rx="6"
        ry="6"
        fill="#00B9F2"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(405, [414])" data-shape="405">
      <rect
        x="462"
        y="152"
        width="394"
        height="236"
        rx="9.44"
        fill="rgba(30, 36, 51, 0.95)"
        stroke="rgba(255, 255, 255, 0.3)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(406, [414])" data-shape="406">
      <rect
        x="463"
        y="153"
        width="392"
        height="20"
        rx="0"
        fill="rgba(255, 255, 255, 0.1)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(600, [414])" data-shape="600">
      <rect
        x="463"
        y="173"
        width="16"
        height="200"
        rx="0"
        fill="rgba(255, 255, 255, 0.06)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(601, [414])" data-shape="601">
      <rect
        x="467"
        y="180"
        width="8"
        height="8"
        rx="1.6"
        fill="rgba(255, 255, 255, 0.35)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(602, [414])" data-shape="602">
      <rect
        x="467"
        y="198"
        width="8"
        height="8"
        rx="1.6"
        fill="rgba(255, 255, 255, 0.35)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(603, [414])" data-shape="603">
      <rect
        x="467"
        y="216"
        width="8"
        height="8"
        rx="1.6"
        fill="rgba(255, 255, 255, 0.35)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(604, [414])" data-shape="604">
      <rect
        x="463"
        y="374"
        width="392"
        height="13"
        rx="0"
        fill="rgba(0, 122, 204, 0.85)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(407, [414])" data-shape="407">
      <ellipse
        cx="475.5"
        cy="162.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(408, [414])" data-shape="408">
      <ellipse
        cx="487.5"
        cy="162.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(409, [414])" data-shape="409">
      <ellipse
        cx="499.5"
        cy="162.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(412, [414])" data-shape="412">
      <rect
        x="772"
        y="239"
        width="46"
        height="20"
        rx="6"
        fill="none"
        stroke="#00B9F2"
        stroke-width="1"
      />
    </g>

    <g v-show="visible(415, [417])" data-shape="415">
      <ellipse
        cx="86"
        cy="215"
        rx="6"
        ry="6"
        fill="#00B9F2"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(418, [437])" data-shape="418">
      <rect
        x="456"
        y="152"
        width="196"
        height="236"
        rx="7.84"
        fill="rgba(11, 18, 32, 0.85)"
        stroke="rgba(255, 255, 255, 0.3)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(419, [437])" data-shape="419">
      <rect
        x="457"
        y="153"
        width="194"
        height="20"
        rx="0"
        fill="rgba(255, 255, 255, 0.1)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(606, [437])" data-shape="606">
      <rect
        x="503"
        y="155"
        width="143"
        height="15"
        rx="7.5"
        fill="rgba(255, 255, 255, 0.12)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(420, [437])" data-shape="420">
      <ellipse
        cx="469.5"
        cy="162.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(421, [437])" data-shape="421">
      <ellipse
        cx="481.5"
        cy="162.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(422, [437])" data-shape="422">
      <ellipse
        cx="493.5"
        cy="162.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(424, [437])" data-shape="424">
      <rect
        x="500"
        y="182"
        width="142"
        height="56"
        rx="11.2"
        fill="rgba(0, 185, 242, 0.3)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(425, [437])" data-shape="425" data-code="true">
      <rect
        x="466"
        y="250"
        width="176"
        height="52"
        rx="5.2"
        fill="rgba(255, 255, 255, 0.1)"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(427, [437])" data-shape="427">
      <polygon
        points="658,262.5 681,262.5 681,256 694,269 681,282 681,275.5 658,275.5"
        fill="#F89927"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(429, [437])" data-shape="429">
      <rect
        x="700"
        y="152"
        width="156"
        height="236"
        rx="6.24"
        fill="rgba(30, 36, 51, 0.95)"
        stroke="rgba(255, 255, 255, 0.3)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(430, [437])" data-shape="430">
      <rect
        x="701"
        y="153"
        width="154"
        height="20"
        rx="0"
        fill="rgba(255, 255, 255, 0.1)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(607, [437])" data-shape="607">
      <rect
        x="701"
        y="173"
        width="16"
        height="200"
        rx="0"
        fill="rgba(255, 255, 255, 0.06)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(608, [437])" data-shape="608">
      <rect
        x="705"
        y="180"
        width="8"
        height="8"
        rx="1.6"
        fill="rgba(255, 255, 255, 0.35)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(609, [437])" data-shape="609">
      <rect
        x="705"
        y="198"
        width="8"
        height="8"
        rx="1.6"
        fill="rgba(255, 255, 255, 0.35)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(610, [437])" data-shape="610">
      <rect
        x="705"
        y="216"
        width="8"
        height="8"
        rx="1.6"
        fill="rgba(255, 255, 255, 0.35)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(611, [437])" data-shape="611">
      <rect
        x="701"
        y="374"
        width="154"
        height="13"
        rx="0"
        fill="rgba(0, 122, 204, 0.85)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(431, [437])" data-shape="431">
      <ellipse
        cx="713.5"
        cy="162.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(432, [437])" data-shape="432">
      <ellipse
        cx="725.5"
        cy="162.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(433, [437])" data-shape="433">
      <ellipse
        cx="737.5"
        cy="162.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(438, [440])" data-shape="438">
      <ellipse
        cx="86"
        cy="279"
        rx="6"
        ry="6"
        fill="#00B9F2"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(441, [453])" data-shape="441">
      <rect
        x="456"
        y="152"
        width="402"
        height="236"
        rx="9.44"
        fill="rgba(30, 36, 51, 0.95)"
        stroke="rgba(255, 255, 255, 0.3)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(442, [453])" data-shape="442">
      <rect
        x="457"
        y="153"
        width="400"
        height="20"
        rx="0"
        fill="rgba(255, 255, 255, 0.1)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(612, [453])" data-shape="612">
      <rect
        x="457"
        y="173"
        width="16"
        height="200"
        rx="0"
        fill="rgba(255, 255, 255, 0.06)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(613, [453])" data-shape="613">
      <rect
        x="461"
        y="180"
        width="8"
        height="8"
        rx="1.6"
        fill="rgba(255, 255, 255, 0.35)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(614, [453])" data-shape="614">
      <rect
        x="461"
        y="198"
        width="8"
        height="8"
        rx="1.6"
        fill="rgba(255, 255, 255, 0.35)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(615, [453])" data-shape="615">
      <rect
        x="461"
        y="216"
        width="8"
        height="8"
        rx="1.6"
        fill="rgba(255, 255, 255, 0.35)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(616, [453])" data-shape="616">
      <rect
        x="457"
        y="374"
        width="400"
        height="13"
        rx="0"
        fill="rgba(0, 122, 204, 0.85)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(443, [453])" data-shape="443">
      <ellipse
        cx="469.5"
        cy="162.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(444, [453])" data-shape="444">
      <ellipse
        cx="481.5"
        cy="162.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(445, [453])" data-shape="445">
      <ellipse
        cx="493.5"
        cy="162.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(448, [453])" data-shape="448">
      <rect
        x="680"
        y="174"
        width="170"
        height="206"
        rx="0"
        fill="rgba(255, 255, 255, 0.08)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(449, [453])" data-shape="449">
      <rect
        x="690"
        y="184"
        width="150"
        height="50"
        rx="10"
        fill="rgba(0, 185, 242, 0.3)"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(451, [453])" data-shape="451">
      <rect
        x="690"
        y="300"
        width="70"
        height="24"
        rx="7.2"
        fill="#35AC46"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(454, [456])" data-shape="454">
      <ellipse
        cx="86"
        cy="343"
        rx="6"
        ry="6"
        fill="#00B9F2"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(457, [465])" data-shape="457">
      <rect
        x="456"
        y="152"
        width="402"
        height="236"
        rx="9.44"
        fill="rgba(5, 7, 11, 0.95)"
        stroke="rgba(255, 255, 255, 0.3)"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(458, [465])" data-shape="458">
      <rect
        x="457"
        y="153"
        width="400"
        height="20"
        rx="0"
        fill="rgba(255, 255, 255, 0.1)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(459, [465])" data-shape="459">
      <ellipse
        cx="469.5"
        cy="162.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(460, [465])" data-shape="460">
      <ellipse
        cx="481.5"
        cy="162.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(461, [465])" data-shape="461">
      <ellipse
        cx="493.5"
        cy="162.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(466, [468])" data-shape="466">
      <ellipse
        cx="86"
        cy="407"
        rx="6"
        ry="6"
        fill="#00B9F2"
        stroke="none"
        stroke-width="0"
      />
    </g>

    <g v-show="visible(617, [480])" data-shape="617">
      <rect
        x="448"
        y="137"
        width="418"
        height="250"
        rx="10"
        fill="rgba(11, 18, 32, 0.85)"
        stroke="rgba(255, 255, 255, 0.35)"
        stroke-width="0.75"
      />
    </g>
    <g v-show="visible(618, [480])" data-shape="618">
      <rect
        x="449"
        y="138"
        width="416"
        height="17"
        rx="0"
        fill="rgba(255, 255, 255, 0.1)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(619, [480])" data-shape="619">
      <ellipse
        cx="461.5"
        cy="147.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(620, [480])" data-shape="620">
      <ellipse
        cx="473.5"
        cy="147.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(621, [480])" data-shape="621">
      <ellipse
        cx="485.5"
        cy="147.5"
        rx="3.5"
        ry="3.5"
        fill="rgba(255, 255, 255, 0.45)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(622, [480])" data-shape="622">
      <rect
        x="498"
        y="140"
        width="200"
        height="15"
        rx="7.5"
        fill="rgba(255, 255, 255, 0.12)"
        stroke="none"
        stroke-width="0"
      />
    </g>
    <g v-show="visible(469, [480])" data-shape="469">
      <rect
        x="456"
        y="163.5225"
        width="402"
        height="54"
        rx="5.4"
        fill="rgba(11, 18, 32, 0.85)"
        stroke="rgba(255, 255, 255, 0.3)"
        stroke-width="1"
      />
    </g>

    <g v-show="visible(471, [480])" data-shape="471">
      <rect
        x="760"
        y="178.5225"
        width="84"
        height="24"
        rx="7.2"
        fill="none"
        stroke="#35AC46"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(472, [480])" data-shape="472">
      <rect
        x="456"
        y="227.5225"
        width="402"
        height="54"
        rx="5.4"
        fill="rgba(11, 18, 32, 0.85)"
        stroke="rgba(255, 255, 255, 0.3)"
        stroke-width="1"
      />
    </g>

    <g v-show="visible(474, [480])" data-shape="474">
      <rect
        x="760"
        y="242.5225"
        width="84"
        height="24"
        rx="7.2"
        fill="none"
        stroke="#F89927"
        stroke-width="1"
      />
    </g>
    <g v-show="visible(475, [480])" data-shape="475">
      <rect
        x="456"
        y="291.5225"
        width="402"
        height="54"
        rx="5.4"
        fill="rgba(11, 18, 32, 0.85)"
        stroke="rgba(255, 255, 255, 0.3)"
        stroke-width="1"
      />
    </g>

    <g v-show="visible(477, [480])" data-shape="477">
      <rect
        x="760"
        y="306.5225"
        width="84"
        height="24"
        rx="7.2"
        fill="none"
        stroke="#F89927"
        stroke-width="1"
      />
    </g>

    <g v-show="visible(500, [502])" data-shape="500">
      <ellipse
        cx="86"
        cy="471"
        rx="6"
        ry="6"
        fill="#1E2A6E"
        stroke="#00B9F2"
        stroke-width="1.5"
      />
    </g>
  </svg>
</template>
