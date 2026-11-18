import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	serverExternalPackages: ['@prisma/orm-postgres'],
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

