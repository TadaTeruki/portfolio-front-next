/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
            },
            {
                protocol: 'https',
                hostname: 'user-images.githubusercontent.com',
            },
        ],
        //domains: ['firebasestorage.googleapis.com', 'user-images.githubusercontent.com']
    }
};
