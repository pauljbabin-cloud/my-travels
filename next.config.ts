import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

safelist: [
  'property',
  'icon',
  'details',
  'description',
  'highlight'
]

module.exports = {
  logging: {
    browserToTerminal: true,
  },
}

