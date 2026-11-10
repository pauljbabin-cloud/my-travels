import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'standalone',
    logging: {
        browserToTerminal: true,
    },
};

/xport const safelist = [
    'property',
    'icon',
    'details',
    'description',
    'highlight'
];

export default nextConfig;
