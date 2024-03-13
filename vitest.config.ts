import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    testTimeout: 30000,
    exclude: [...configDefaults.exclude, './services/auth/api/index.test.ts'],
  },
})
