import { defineConfig } from 'vite';

export default defineConfig({
  slidev: {
    markdown: {
      markdownSetup(md) {
        md.core.ruler.before('replacements', 'literal-ai-copy', (state) => {
          if (!state.src.includes('<NativeAiSlide')) return;
          // Preserve literal punctuation for this parse, including concurrent builds.
          // The existing development-cycle section retains its original typography.
          state.md = Object.assign(Object.create(state.md), {
            options: { ...state.md.options, typographer: false },
          });
        });
      },
    },
  },
  server: {
    fs: {
      allow: ['../..'],
    },
  },
});
