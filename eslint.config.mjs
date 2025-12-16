import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import pluginPrettier from 'eslint-plugin-prettier/recommended'

const eslintConfig = defineConfig([
  ...nextVitals,
  pluginPrettier,
  globalIgnores(['.next/**', 'coverage/**', 'next-env.d.ts'])
])

export default eslintConfig
