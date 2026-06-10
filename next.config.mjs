/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/gsap-reveal' : '',
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
