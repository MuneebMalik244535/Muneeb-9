import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Warn instead of error for unused variables
      "@typescript-eslint/no-unused-vars": "warn",

      // Disable error for 'any' type
      "@typescript-eslint/no-explicit-any": "off",

      // Allow <img> tags in Next.js
      "@next/next/no-img-element": "warn",

      // Allow empty interfaces
      "@typescript-eslint/no-empty-interface": "off",

      // Disable warning for anonymous default exports
      "import/no-anonymous-default-export": "off",
    },
  },
];

export default eslintConfig;
