export default {
  singleQuote: true,
  overrides: [
    {
      files: ['**/slides.md', '**/footer.md'],
      options: {
        parser: 'slidev',
        embeddedLanguageFormatting: 'off',
        plugins: ['prettier-plugin-slidev'],
      },
    },
  ],
};
