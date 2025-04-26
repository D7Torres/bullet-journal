import { vi, beforeEach } from 'vitest'
import '@testing-library/jest-dom' // defaults to Jest matchers instead of Chai

beforeEach(() => {
  vi.clearAllMocks()
})
