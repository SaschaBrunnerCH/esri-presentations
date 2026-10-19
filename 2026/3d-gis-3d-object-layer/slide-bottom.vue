<script setup>
import mapCover from '../app-development-components-frameworks/assets/eudts-2026/map-cover.png';
import mapContent from '../app-development-components-frameworks/assets/eudts-2026/map-content.png';
import coverArt from '../app-development-components-frameworks/assets/eudts-2026/art-cover.png';
import sectionArt from '../app-development-components-frameworks/assets/eudts-2026/art-section.png';
import closingArt from '../app-development-components-frameworks/assets/eudts-2026/art-closing.png';
import logo from '../app-development-components-frameworks/assets/eudts-2026/logo-small.png';
import closingLogo from '../app-development-components-frameworks/assets/eudts-2026/logo-closing.png';
import SessionFeedback from '../.meta/components/SessionFeedback.vue';
</script>

<template>
  <div
    class="eudts-background"
    :class="{
      'eudts-section':
        $frontmatter.layout === 'intro' || $frontmatter.is === 'social',
    }"
    aria-hidden="true"
  >
    <img
      class="eudts-map"
      :class="{
        'eudts-map-content':
          !['cover', 'intro'].includes($frontmatter.layout) &&
          !['social', 'esri'].includes($frontmatter.is),
      }"
      :src="
        ['cover', 'intro'].includes($frontmatter.layout) ||
        ['social', 'esri'].includes($frontmatter.is)
          ? mapCover
          : mapContent
      "
      alt=""
    />
    <template v-if="$frontmatter.layout === 'cover'">
      <img class="eudts-art-cover" :src="coverArt" alt="" />
      <img class="eudts-logo-small" :src="logo" alt="" />
    </template>
    <img
      v-else-if="
        $frontmatter.layout === 'intro' || $frontmatter.is === 'social'
      "
      class="eudts-art-section"
      :src="sectionArt"
      alt=""
    />
    <img
      v-else-if="$frontmatter.is === 'esri'"
      class="eudts-art-closing"
      :src="closingArt"
      alt=""
    />
  </div>

  <div v-if="$frontmatter.layout === 'cover'" class="eudts-event">
    ESRI EUROPEAN DEVELOPER &amp;<br />TECHNOLOGY SUMMIT 2026
    <small>Copyright © 2026 Esri. All rights reserved.</small>
  </div>

  <SessionFeedback v-if="$frontmatter.is === 'feedback'" />

  <div v-if="$frontmatter.is === 'esri'" class="eudts-closing">
    <img :src="closingLogo" alt="Esri — The Science of Where" />
    <p>Copyright © 2026 Esri. All rights reserved.</p>
    <p>
      Portions of this work may include Adobe Stock images used under license.
      Copyright © 2026 Adobe Inc. All rights reserved.
    </p>
  </div>
</template>

<style>
@import '../.meta/styles.css';
@import '../app-development-components-frameworks/theme.css';
@import './theme.css';
</style>
