<script setup>
import mapCover from './assets/eudts-2026/map-cover.png';
import mapContent from './assets/eudts-2026/map-content.png';
import coverArt from './assets/eudts-2026/art-cover.png';
import sectionArt from './assets/eudts-2026/art-section.png';
import closingArt from './assets/eudts-2026/art-closing.png';
import logo from './assets/eudts-2026/logo-small.png';
import closingLogo from './assets/eudts-2026/logo-closing.png';
import feedbackEvent from './assets/eudts-2026/feedback-event.jpeg';
import feedbackSurveys from './assets/eudts-2026/feedback-surveys.png';
import feedbackSelect from './assets/eudts-2026/feedback-select.png';
import feedbackComplete from './assets/eudts-2026/feedback-complete.png';

const feedbackSteps = [
  {
    text: 'Select “My Event” in the event app main menu',
    image: feedbackEvent,
  },
  { text: 'Select “My Surveys”', image: feedbackSurveys },
  { text: 'Select the desired survey', image: feedbackSelect },
  { text: 'Complete the survey', image: feedbackComplete },
];
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

  <section
    v-if="$frontmatter.is === 'feedback'"
    class="eudts-feedback"
    aria-label="Session feedback"
  >
    <h1>Please share your feedback in the app</h1>
    <ol>
      <li v-for="(step, index) in feedbackSteps" :key="step.image">
        <p>
          <span>{{ index + 1 }}.</span> {{ step.text }}
        </p>
        <img :src="step.image" :alt="step.text" />
      </li>
    </ol>
  </section>

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
@import './theme.css';
</style>
