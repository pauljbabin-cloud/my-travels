import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'standalone',
    logging: {
        browserToTerminal: true,
    },
};

export const safelist = [
    'property',
    'icon',
    'details',
    'description',
    'highlight'
];

export default nextConfig;
