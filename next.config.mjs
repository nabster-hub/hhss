/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'a.storyblok.com',
                port: '',
                pathname: '/f/**',
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
                port: '',
                pathname: '/*/**',
            }
        ],
    },
};

export default nextConfig;
