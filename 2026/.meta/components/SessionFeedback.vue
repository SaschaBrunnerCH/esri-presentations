<script setup>
import feedback from '../assets/feedback-original.png';
</script>

<template>
  <img
    class="session-feedback"
    :src="feedback"
    alt="Please share your feedback in the app. Select My Event, select My Surveys, select the desired survey, then complete the survey."
  />
</template>

<style scoped>
.session-feedback {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  max-width: none;
  border-radius: 0;
  background: #0b3045;
  object-fit: contain;
  pointer-events: none;
}
</style>
