<script setup>
import mapCover from './assets/eudts-2026/map-cover.png';
import coverArt from './assets/eudts-2026/art-cover.png';
import sectionArt from './assets/eudts-2026/art-section.png';
import logo from './assets/eudts-2026/logo-small.png';
import nativeContent from './assets/native-sdk/background-content.png';
</script>

<template>
  <div
    class="eudts-background"
    :class="{ 'eudts-section': $frontmatter.layout === 'intro' }"
    aria-hidden="true"
  >
    <img
      v-if="['cover', 'intro'].includes($frontmatter.layout)"
      class="eudts-map"
      :src="mapCover"
      alt=""
    />
    <img v-else class="native-content-background" :src="nativeContent" alt="" />
    <template v-if="$frontmatter.layout === 'cover'">
      <img class="eudts-art-cover" :src="coverArt" alt="" />
      <img class="eudts-logo-small" :src="logo" alt="" />
    </template>
    <img
      v-else-if="$frontmatter.layout === 'intro'"
      class="eudts-art-section"
      :src="sectionArt"
      alt=""
    />
  </div>
  <div v-if="$frontmatter.layout === 'cover'" class="eudts-event">
    ESRI EUROPEAN DEVELOPER &amp;<br />TECHNOLOGY SUMMIT 2026
    <small>Copyright © 2026 Esri. All rights reserved.</small>
  </div>
</template>

<style>
@import './theme.css';
</style>
