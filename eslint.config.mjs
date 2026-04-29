import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import jsxA11y from "eslint-plugin-jsx-a11y";

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  { rules: jsxA11y.flatConfigs.recommended.rules },
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts", "*.mjs"],
  },
];

export default eslintConfig;
