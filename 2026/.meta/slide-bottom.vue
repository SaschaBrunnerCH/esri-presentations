<script setup>
import SessionFeedback from './components/SessionFeedback.vue';
</script>

<template>
  <img
    alt=""
    src="https://raw.githubusercontent.com/Esri/reveal.js/refs/tags/dev-summit-2026/images/2026/dev/02.jpg"
  />
  <img
    alt=""
    src="https://raw.githubusercontent.com/Esri/reveal.js/refs/tags/dev-summit-2026/images/2026/dev/01.jpg"
    v-show="$nav.currentPage === 1"
  />
  <img
    alt=""
    src="https://raw.githubusercontent.com/Esri/reveal.js/refs/tags/dev-summit-2026/images/2026/dev/03.jpg"
    v-show="$frontmatter.layout === 'intro'"
  />
  <SessionFeedback v-if="$frontmatter.is === 'feedback'" />
  <img
    alt=""
    src="https://raw.githubusercontent.com/Esri/reveal.js/refs/tags/dev-summit-2026/images/2026/dev/03.jpg"
    v-show="$frontmatter.is === 'social'"
  />
  <img
    alt="Esri logo"
    src="https://raw.githubusercontent.com/Esri/reveal.js/refs/tags/dev-summit-2026/images/2026/dev/07.jpg"
    v-show="$frontmatter.is === 'esri'"
  />
</template>

<style>
@import './styles.css';
</style>
