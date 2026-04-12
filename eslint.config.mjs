import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  // next/core-web-vitals includes Next.js rules + React hooks + accessibility
  // next/typescript adds TypeScript-aware rules on top
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
]

export default eslintConfig
