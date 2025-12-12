import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import nextTs from "eslint-config-next/typescript";
import nextVitals from "eslint-config-next/core-web-vitals";
import tseslint from "typescript-eslint";

const eslintConfig = defineConfig(
  [
    ...nextVitals,
    ...nextTs,
    ...tseslint.configs.recommended,
    globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  ],
  {
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      "sort-imports": "error"
    },
  },
  eslintConfigPrettier
);

export default eslintConfig;
