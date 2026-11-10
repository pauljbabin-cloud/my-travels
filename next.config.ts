import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'standalone',
    cacheComponents: true,
    partialPrefetching: true,

};

export default nextConfig;

safelist:
[
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
