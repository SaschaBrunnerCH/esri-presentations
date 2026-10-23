export default {
  singleQuote: true,
  overrides: [
    {
      files: [
        '**/slides.md',
        '**/footer.md',
        '**/session.md',
        '**/original-before.md',
        '**/original-after.md',
      ],
      options: {
        parser: 'slidev',
        embeddedLanguageFormatting: 'off',
        plugins: ['prettier-plugin-slidev'],
      },
    },
  ],
};
