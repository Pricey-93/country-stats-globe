import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    root: '__tests__',
    cache: { dir: '../node_modules/.vitest' },
    coverage: {
      enabled: true,
    },
    globals: true,
  },
})