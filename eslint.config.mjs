// eslint.config.mjs
import nextPlugin from '@next/next/eslint';

export default [
  // ... other configurations and plugins
  {
    rules: {
      // Disables the rule for unescaped entities in JSX.
      'react/no-unescaped-entities': 'off',
      // Turns the rule for unused variables into a warning.
      '@typescript-eslint/no-unused-vars': 'warn',
      // Disables the Next.js specific rule against using <img> tags.
      '@next/next/no-img-element': 'off',
    },
    // The plugins option is where you define the plugins that contain your rules.
    // In this case, `react` and `@typescript-eslint` are assumed to be enabled
    // through other configurations or a base config you have. The `@next/next`
    // plugin is explicitly shown here for clarity.
    plugins: {
      '@next/next': nextPlugin,
    },
  },
];