/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        myName: "David Choy"
    }
};

nextConfig.env.websiteTitle = `All About Me | ${nextConfig.env.myName}`;

export default nextConfig;
