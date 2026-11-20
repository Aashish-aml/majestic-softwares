import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/beta',
  output: 'export',
  outputFileTracingRoot: root,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
